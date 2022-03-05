'use strict'

// #region DECLARATIONS
// Platform Dependencies
const fs = require('fs')
const path = require('path')
const https = require('https')
const { exec } = require('child_process')
// External Dependencies
const gulp = require('gulp')
const glob = require('glob')
const concat = require('gulp-concat')
const YAML = require('yamljs')
// Variables
const ROOT_DIRECTORY = './'
const SRC_DIRECTORY = ROOT_DIRECTORY + 'src/'
const PUBLIC_DIRECTORY = SRC_DIRECTORY + '.vuepress/public/'
const JS_DIRECTORY = PUBLIC_DIRECTORY + 'js/'
const CSS_DIRECTORY = PUBLIC_DIRECTORY + 'css/'
// #endregion DECLARATIONS

/**
 * Concatenate js dependencies in one file
 * @param {function} done - Callback()
 */
const concatJs = (done) => {
  gulp.src([
    './src/.vuepress/public/js/ga.js',
    './src/.vuepress/public/js/intercom.js',
    './node_modules/uikit/dist/js/uikit.min.js',
    './node_modules/uikit/dist/js/uikit-icons.min.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(JS_DIRECTORY)).on('end', () => {
      done()
    })
  gulp.src([
    './node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js'
  ])
    .pipe(concat('MicrosoftTeams.min.js'))
    .pipe(gulp.dest(JS_DIRECTORY)).on('end', () => {
      done()
    })
  gulp.src([
    './node_modules/swagger-ui-dist/swagger-ui-bundle.js',
    './node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js'
  ])
    .pipe(concat('swagger-viewer.bundle.js'))
    .pipe(gulp.dest(JS_DIRECTORY)).on('end', () => {
      // done()
    })
  gulp.src([
    './node_modules/msal/dist/msal.min.js',
    './node_modules/moment/min/moment.min.js',
    './src/.vuepress/public/js/authentication.js'
  ])
    .pipe(concat('authentication.bundle.js'))
    .pipe(gulp.dest(JS_DIRECTORY)).on('end', () => {
      // done()
    })
}

/**
 * Concatenate css dependencies in one file
 * @param {function} done - Callback()
 */
const concatCss = (done) => {
  gulp.src([
    './node_modules/uikit/dist/css/uikit.min.css'
  ])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(CSS_DIRECTORY)).on('end', () => {
      done()
    })
  gulp.src([
    './node_modules/swagger-ui-dist/swagger-ui.css'
  ])
    .pipe(concat('swagger-viewer.bundle.css'))
    .pipe(gulp.dest(CSS_DIRECTORY)).on('end', () => {
      // done()
    })
}

const convertOpenApiYamlToJson = (done) => {
  try {
    const srcYamlFiles = [
      './src/api/latest/definition/nbold-openapi.yaml',
      './src/api/latest/definition/power-platform/apiDefinition.swagger.yaml'
    ]
    for (let index = 0; index < srcYamlFiles.length; index++) {
      const srcYamlFile = srcYamlFiles[index] // eslint-disable-line
      const targetJsonFile = srcYamlFile.replace('.yaml', '.json')

      fs.readFile(srcYamlFile, 'utf8', (err, data) => { // eslint-disable-line
        if (!err) {
          console.log('JSON file has been saved.')
          const openApiJson = YAML.parse(data)
          fs.writeFile(targetJsonFile, JSON.stringify(openApiJson, null, 2), 'utf8', function (err) { // eslint-disable-line
            if (!err) {
              console.log('JSON file has been saved.')
              if (index === srcYamlFiles.length - 1) {
                done()
              }
            } else {
              console.error('An error occured while writing JSON Object to File.')
              console.dir(err)
              done(err)
            }
          })
        } else {
          console.error('An error occured while reading YAML File.')
          console.dir(err)
          done(err)
        }
      })
    }
  } catch (err) { // Unexpected error
    console.error('Unexpected error in /gulpfile/convertOpenApiYamlToJson.')
    console.dir(err)
    done(err)
  }
}

const downloadAssetsFromAppPlatformRepo = (done) => {
  try {
    const REFERENCES_DIR = `${SRC_DIRECTORY}hosting/references`
    const ASSETS_ROOT_URL = 'https://dist.salestim.io/assets'
    const assets = [
      'azure-resources-reference.md',
      'configuration-reference.md',
      'docker-resources-reference.md',
      'environment-variables-reference.md',
      'events-reference.md',
      'services-reference.md'
    ]
    assets.forEach((asset, i) => {
      const file = fs.createWriteStream(`${REFERENCES_DIR}/${asset}`)
      https.get(`${ASSETS_ROOT_URL}/${asset}`, (response) => {
        response.pipe(file)
        if (i === assets.length - 1) {
          done()
        }
      })
    })
  } catch (err) { // Unexpected error
    console.error('Unexpected error in /gulpfile/downloadAssetsFromAppPlatformRepo.')
    console.dir(err)
    done(err)
  }
}

const checkLinks = (done) => {
  const files = glob.sync(`${ROOT_DIRECTORY}**/*.md`)

  const items = []
  files.forEach((file, i) => {
    if (
      file.indexOf('/node_modules/') === -1 && // Exclude node_modules
      file.indexOf('/build/') === -1 &&
      file.indexOf('/drafts/') === -1 &&
      file.indexOf('/reference/') === -1 && // Exclude reference (auto-generated)
      file.indexOf('/sdks/') === -1 // Exclude SDKs (auto-generated)
    ) {
      const filePath = path.join(__dirname, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      items.push(
        {
          file: file,
          content: fileContent
        }
      )
    }
  })

  console.log(`✅ Analyzing ${items.length} markdown files...`)

  let report = ''
  let processed = 0
  let errorsCount = 0

  items.forEach((item, i) => {
    try {
      // console.log(`✅ Analyzing ${item.file} (#${i})...`)
      const checkCommand = `npx --yes markdown-link-check ${item.file} --config ./build/makdown_links_check/.mlc_config.json --quiet`
      exec(checkCommand, (error, stdout, stderr) => {
        processed++
        if (error) { // Only includes files containing errors
          errorsCount++
          report += stdout
        }
        // If it is the last file
        if (processed === items.length - 1) {
          const headerMessage = `✅ ${items.length} markdown files analyzed, ${errorsCount} in error.`
          console.log(headerMessage + report)

          // const outputFile = path.join(__dirname, './build/makdown_links_check/links_check.log')
          // fs.writeFileSync(outputFile, report)
          // console.log(`✅ Report written to ${outputFile} (wd: ${__dirname})`)

          if (done) { done() }
        }
      })
    } catch (err) { // Unexpected error
      console.error('✅ Unexpected error in /gulpfile/checkLinks.', err)
      // If it is the last one
      if (i === items.length - 1) {
        if (done) { done() }
      }
    }
  })
}

exports.test = gulp.series(
  checkLinks
)

exports.build = gulp.series(
  concatJs,
  concatCss,
  convertOpenApiYamlToJson,
  downloadAssetsFromAppPlatformRepo
)
