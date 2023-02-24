'use strict'
// #region DECLARATIONS
// Platform Dependencies
const fs = require('fs')
const https = require('https')
// External Dependencies
const gulp = require('gulp')
// Variables
const ROOT_DIRECTORY = '.'
// const TEMP_DIRECTORY = `${ROOT_DIRECTORY}/temp`
const CONTENTS_DIRECTORY = `${ROOT_DIRECTORY}/contents`
const DRAFTS_DIRECTORY = `${ROOT_DIRECTORY}/drafts`
const TRUST_CENTER_DIRECTORY = `${CONTENTS_DIRECTORY}/90-trust-center`
const REFERENCES_DIRECTORY = `${DRAFTS_DIRECTORY}/75-hosting/90-references`
// #endregion DECLARATIONS

const downloadAssetsFromAppPlatformRepo = (done) => {
  try {
    const CDN_ROOT_URL = 'https://assets.nbold.io'
    const ASSETS_ROOT_URL = `${CDN_ROOT_URL}/documentation`
    const assets = [
      {
        file_name: 'CHANGELOG.md',
        source: CDN_ROOT_URL,
        destination: TRUST_CENTER_DIRECTORY
      },
      // {
      //   file_name: 'configuration-reference.md',
      //   source: ASSETS_ROOT_URL,
      //   destination: REFERENCES_DIRECTORY
      // },
      // {
      //   file_name: '.env-template',
      //   source: ASSETS_ROOT_URL,
      //   destination: REFERENCES_DIRECTORY
      // },
      // {
      //   file_name: 'events-reference.md',
      //   source: ASSETS_ROOT_URL,
      //   destination: REFERENCES_DIRECTORY
      // },
      // {
      //   file_name: 'services-reference.md',
      //   source: ASSETS_ROOT_URL,
      //   destination: REFERENCES_DIRECTORY
      // }
    ]
    assets.forEach((asset, i) => {
      try {
        const file = fs.createWriteStream(`${asset.destination}/${asset.file_name}`)
        https.get(`${asset.source}/${asset.file_name}`, (response) => {
          response.pipe(file)
          if (i === assets.length - 1) {
            done()
          }
        })
      } catch (err) {
        console.error(`Unexpected error in /gulpfile/downloadAssetsFromAppPlatformRepo for asset ${asset.file_name}.`)
      }
    })
  } catch (err) { // Unexpected error
    console.error('Unexpected error in /gulpfile/downloadAssetsFromAppPlatformRepo.')
    console.dir(err)
    done(err)
  }
}

exports.build = gulp.series(
  downloadAssetsFromAppPlatformRepo
)
