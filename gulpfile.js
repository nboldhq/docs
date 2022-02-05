'use strict'

// #region DECLARATIONS
// Platform Dependencies
const os = require('os')
const fs = require('fs')
// External Dependencies
const gulp = require('gulp')
const concat = require('gulp-concat')
const YAML = require('yamljs')
// Variables
const ROOT_FOLDER = './'
const PACKAGE_FILE = ROOT_FOLDER + 'package.json'
let pck = require(PACKAGE_FILE) // Not declared as a const as it may be refreshed/updated durung build
const SRC_FOLDER = ROOT_FOLDER + 'src/'
const PUBLIC_FOLDER = SRC_FOLDER + '.vuepress/public/'
const JS_FOLDER = PUBLIC_FOLDER + 'js/'
const CSS_FOLDER = PUBLIC_FOLDER + 'css/'
// #endregion DECLARATIONS

// #region BUILD

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
    .pipe(gulp.dest(JS_FOLDER)).on('end', () => {
      done()
    })
  gulp.src([
    './node_modules/swagger-ui-dist/swagger-ui-bundle.js',
    './node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js'
  ])
    .pipe(concat('swagger-viewer.bundle.js'))
    .pipe(gulp.dest(JS_FOLDER)).on('end', () => {
      // done()
    })
  gulp.src([
    './node_modules/msal/dist/msal.min.js',
    './node_modules/moment/min/moment.min.js',
    './src/.vuepress/public/js/authentication.js'
  ])
    .pipe(concat('authentication.bundle.js'))
    .pipe(gulp.dest(JS_FOLDER)).on('end', () => {
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
    .pipe(gulp.dest(CSS_FOLDER)).on('end', () => {
      done()
    })
  gulp.src([
    './node_modules/swagger-ui-dist/swagger-ui.css'
  ])
    .pipe(concat('swagger-viewer.bundle.css'))
    .pipe(gulp.dest(CSS_FOLDER)).on('end', () => {
      // done()
    })
}

const convertOpenApiYamlToJson = (done) => {
  try {
    const srcYamlFiles = [
      './src/.vuepress/public/api/production/definitions/open-api/apiDefinition.swagger.yaml',
      './src/.vuepress/public/api/production/definitions/open-api/power-platform/apiDefinition.swagger.yaml'
    ]
    for (let index = 0; index < srcYamlFiles.length; index++) {
      const srcYamlFile = srcYamlFiles[index] // eslint-disable-line
      const targetJsonFile = srcYamlFile.replace('.yaml', '.json')

      fs.readFile(srcYamlFile, 'utf8', (err, data) => { // eslint-disable-line
        if (!err) {
          console.log('JSON file has been saved.')
          const openApiJson = YAML.parse(data)
          fs.writeFile(targetJsonFile, JSON.stringify(openApiJson), 'utf8', function (err) { // eslint-disable-line
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

// #region EXPORTS

exports.build = gulp.series(
  concatJs,
  concatCss,
  convertOpenApiYamlToJson,
  // copySdkDocs
)

// #endregion EXPORTS
