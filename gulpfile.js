'use strict'
// #region DECLARATIONS
// Platform Dependencies
const fs = require('fs')
const https = require('https')
// External Dependencies
const gulp = require('gulp')
const concat = require('gulp-concat')
const YAML = require('yamljs')
// Variables
const ROOT_DIRECTORY = '.'
const SRC_DIRECTORY = `${ROOT_DIRECTORY}/src`
const PUBLIC_DIRECTORY = `${SRC_DIRECTORY}/.vuepress/public`
const JS_DIRECTORY = `${PUBLIC_DIRECTORY}/js`
const CSS_DIRECTORY = `${PUBLIC_DIRECTORY}/css`
const API_DEFINITION_DIRECTORY = `${PUBLIC_DIRECTORY}/api/latest/definition`
const TRUST_CENTER_DIRECTORY = `${SRC_DIRECTORY}/trust-center`
const REFERENCES_DIRECTORY = `${SRC_DIRECTORY}/hosting/references`
// #endregion DECLARATIONS

/**
 * Concatenate js dependencies in one file
 * @param {function} done - Callback()
 */
const concatJs = (done) => {
  gulp.src([
    `${JS_DIRECTORY}/ga.js`,
    `${JS_DIRECTORY}/intercom.js`,
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
    `${JS_DIRECTORY}/authentication.js`
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
      `${API_DEFINITION_DIRECTORY}/nbold-openapi.yaml`,
      `${API_DEFINITION_DIRECTORY}/power-platform/apiDefinition.swagger.yaml`
    ]
    for (let index = 0; index < srcYamlFiles.length; index++) {
      const srcYamlFile = srcYamlFiles[index] // eslint-disable-line
      const targetJsonFile = srcYamlFile.replace('.yaml', '.json')

      fs.readFile(srcYamlFile, 'utf8', (err, data) => { // eslint-disable-line
        if (!err) {
          console.log('JSON file has been saved.')
          const openApiJson = YAML.parse(data)
          fs.writeFile(targetJsonFile, JSON.stringify(openApiJson, null, 2), 'utf8', (err) => { // eslint-disable-line
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
    const CDN_ROOT_URL = 'https://assets.nbold.io'
    const ASSETS_ROOT_URL = `${CDN_ROOT_URL}/assets`
    const assets = [
      {
        file_name: 'CHANGELOG.md',
        source: CDN_ROOT_URL,
        destination: TRUST_CENTER_DIRECTORY
      },
      {
        file_name: 'azure-resources-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'configuration-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'docker-resources-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'environment-variables-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'events-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'services-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'app-data-model-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'events-data-model-reference.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      }
    ]
    assets.forEach((asset, i) => {
      const file = fs.createWriteStream(`${asset.destination}/${asset.file_name}`)
      https.get(`${asset.source}/${asset.file_name}`, (response) => {
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

exports.build = gulp.series(
  concatJs,
  concatCss,
  convertOpenApiYamlToJson,
  downloadAssetsFromAppPlatformRepo
)
