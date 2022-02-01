// ################################################################################################
// # AZURE AD AUTHENTICATION MODULE
// ################################################################################################

// #region DECLARATIONS
// UI controls
var loading = document.getElementById('loading')
var authorizations = document.getElementById('authorizations')
// User mode
var profilePicture = document.getElementById('profilePicture')
var userDisplayName = document.getElementById('userDisplayName')
var userDetails = document.getElementById('userDetails')
var userIdentifier = document.getElementById('userIdentifier')
var userLoginDateTime = document.getElementById('userLoginDateTime')
var userRoles = document.getElementById('userRoles')
var delegatedLoginButton = document.getElementById('delegatedLoginButton')
var delegatedLogoutButton = document.getElementById('delegatedLogoutButton')
// App mode
var appPicture = document.getElementById('appPicture')
var appDisplayName = document.getElementById('appDisplayName')
var appDetails = document.getElementById('appDetails')
var appIdentifier = document.getElementById('appIdentifier')
var appLoginDateTime = document.getElementById('appLoginDateTime')
var appRoles = document.getElementById('appRoles')
var appTenantId = document.getElementById('appTenantId')
var appClientId = document.getElementById('appClientId')
var appClientSecret = document.getElementById('appClientSecret')
var appLoginButton = document.getElementById('appLoginButton')
var appLogoutButton = document.getElementById('appLogoutButton')
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters,
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/libs/_authenticationparameters_.html
var msalConfig = null
// Add here scopes for id token to be used at MS Identity Platform endpoints.
var loginRequest = null
// Add here scopes for access token to be used at MS Graph API endpoints.
var tokenRequest = null
// Add here the endpoints for MS Graph API services you would like to use.
var graphConfig = null
// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
var myMSALObj = null
// #endregion DECLARATIONS

// #region GRAPH HELPERS

// Helper function to call MS Graph API endpoint
// using authorization bearer token scheme
function callMSGraph(endpoint, token, callback) {
  const bearer = `Bearer ${token}`
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': bearer
    }
  }
  fetch(endpoint, options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(function (response) {
      callback(response, endpoint)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function callMSGraphBinary(endpoint, token, callback) {
  const bearer = `Bearer ${token}`
  const options = {
    method: 'GET',
    headers: {
      'Authorization': bearer
    }
  }
  fetch(endpoint, options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.blob()
    })
    .then(function (response) {
      callback(response, endpoint)
    })
    .catch(function (error) {
      console.log(error)
    })
}

// #endregion GRAPH HELPERS

// #region AUTHENTICATION - POPUP MODE

function initExplorerHeader() {
  // Init vars
  if (!msalConfig) {
    msalConfig = {
      auth: {
        clientId: '107219e4-ae69-4096-800e-c9cc2be660c7',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: window.location.origin + '/api/explorer'
      },
      cache: {
        cacheLocation: 'sessionStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
      }
    }
  }
  if (!loginRequest) {
    loginRequest = {
      scopes: ['email', 'offline_access', 'openid', 'profile', 'User.Read']
    }
  }
  if (!tokenRequest) {
    tokenRequest = {
      scopes: ['User.Read']
    }
  }
  if (!graphConfig) {
    graphConfig = {
      graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
      graphPhotoEndpoint: 'https://graph.microsoft.com/v1.0/me/photo/$value'
    }
  }
  if (!myMSALObj) {
    myMSALObj = new Msal.UserAgentApplication(msalConfig)
  }
  // Check pre-existing user session
  if (myMSALObj.getAccount()) {
    getDelegatedAccessToken()
  } else {
    setUserAnonymous()
  }
}

function delegatedSignIn() {
  myMSALObj
    .loginPopup(loginRequest)
    .then(loginResponse => {
      if (myMSALObj.getAccount()) {
        getDelegatedAccessToken()
      }
    })
    .catch(error => {
      console.log(error)
    })
}

function getApiRootUrl() {
  // Replace api root url with local in dev mode
  var apiRootUrl = 'https://api.salestim.io/api/v1.0'
  if (
    window.location.host.indexOf("localhost", 0) > -1 ||
    window.location.host.indexOf("devgme", 0) > -1
  ) {
    apiRootUrl = 'https://gme-dev-api.ngrok.io/api/v1.0'
  }
  return apiRootUrl
}

function appSignIn() {
  if (appTenantId.value === '' || appClientId.value === '' || appClientSecret.value === '') {
    UIkit.notification({
      message: 'Please fill "Tenant ID", "Client ID" and "Client Secret"',
      status: 'warning',
      timeout: 2000
    })
  } else {

    fetch(`${getApiRootUrl()}/authentication/clientcredentials/token`,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'api_explorer'
        },
        body: JSON.stringify(
          {
            tid: appTenantId.value,
            clientid: appClientId.value,
            clientsecret: appClientSecret.value
          }
        )
      })
      .then((response) => {
        if (response) {
          if (response.status === 200) {
            response.json().then((data) => {
              window.explorerLoggedApp = data
              setAppBearerAuth(data.access_token)
              getRoles(data.access_token, (err, rolesPayload) => {
                if (!err) {
                  data.roles = rolesPayload.value
                  setAppAuthenticated(data)
                  UIkit.notification({
                    message: 'Successfully signed-in...',
                    status: 'success',
                    timeout: 2000
                  })
                } else {
                  console.error('Error retreiving app roles')
                }
              })
            })
          } else {
            console.dir(response)
            let message = `Error ${response.status} fetching app token: ${response.statusText}`
            showError(message)
          }
        } else {
          console.error('No response fetching app token')
        }
      })
      .catch((error) => {
        console.dir(error)
        let message = 'Error fetching app token'
        if (error.message && error.message !== '') {
          message += ': ' + error.message
        }
        showError(message)
      })
  }
}

function getRoles(accessToken, cb) {
  fetch(`${getApiRootUrl()}/me/roles`,
    {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${accessToken}`
      }
    })
    .then((response) => {
      if (response) {
        if (response.status === 200) {
          response.json().then((data) => {
            if (cb) { cb(null, data) }
          })
        } else {
          console.dir(response)
          let message = `Error ${response.status} retreiving roles: ${response.statusText}`
          showError(message)
          if (cb) { cb(new Error(message), null) }
        }
      } else {
        const message = 'No response retreiving roles'
        console.error(message)
        if (cb) { cb(new Error(message), null) }
      }
    })
    .catch((error) => {
      console.dir(error)
      let message = 'Error fetching roles'
      if (error.message && error.message !== '') {
        message += ': ' + error.message
      }
      showError(message)
      if (cb) { cb(error, null) }
    })
}

function showError(message) {
  console.error(message)
  UIkit.notification({
    message: message,
    status: 'danger',
    timeout: 2000
  })
}

function getDelegatedAccessToken() {
  getDelegatedPopUp(loginRequest)
    .then(response => {
      callMSGraph(
        graphConfig.graphMeEndpoint,
        response.accessToken,
        function (data, endpoint) {
          window.explorerLoggedUser = response
          setUserBearerAuth(response.accessToken)

          getRoles(response.accessToken, (err, rolesPayload) => {
            if (!err) {
              response.roles = rolesPayload.value
              setUserAuthenticated(response, data)
              UIkit.notification({
                message: 'Successfully signed-in...',
                status: 'success',
                timeout: 2000
              })
            } else {
              console.error('Error retreiving app roles')
            }
          })
        }
      )
    })
    .catch(error => {
      console.log(error)
      setUserAnonymous()
    })
}

function getDelegatedPopUp(request) {
  return myMSALObj.acquireTokenSilent(request).catch(error => {
    console.log(error)
    console.log('silent token acquisition fails. acquiring token using popup')
    // fallback to interaction when silent call fails
    return myMSALObj
      .acquireTokenPopup(request)
      .then(tokenResponse => {
        return tokenResponse
      })
      .catch(error => {
        console.log(error)
      })
  })
}

function delegatedSignOut() {
  window.explorerLoggedUser = null
  // Actually don't do a real ad logout to prevent a global browser-wide logout
  // myMSALObj.logout()
  // Reset swagger ui bearer token
  setUserBearerAuth('')
  setUserAnonymous()
  UIkit.notification({
    message: 'Successfully signed-out...',
    status: 'success',
    timeout: 2000
  })
}

function appSignOut() {
  window.explorerLoggedApp = null
  // Reset swagger ui bearer token
  setAppBearerAuth('')
  setAppAnonymous()
  UIkit.notification({
    message: 'Successfully signed-out...',
    status: 'success',
    timeout: 2000
  })
}

// Send user access token to swagger ui
function setUserBearerAuth(token) {
  // "Bearer " is automatically added by swagger ui
  ui.preauthorizeApiKey('bearerAuth', token)
}

// Send app access token to swagger ui
function setAppBearerAuth(token) {
  // "Bearer " is automatically added by swagger ui
  ui.preauthorizeApiKey('bearerAuth', token)
}

// #endregion AUTHENTICATION - POPUP MODE

// #region UI

function enableLoading() {
  loading.style.display = ''
  authorizations.style.display = 'none'
}

function disableLoading() {
  loading.style.display = 'none'
  authorizations.style.display = ''
}

function setUserAnonymous() {
  disableLoading()
  window.explorerLoggedUser = null
  userDisplayName.innerText = 'Anonymous'
  userIdentifier.innerText = ''
  userLoginDateTime.innerText = ''
  userRoles.innerHTML = ''
  profilePicture.setAttribute('src', '/img/avatar.png')
  userDetails.style.display = 'none'
  delegatedLoginButton.style.display = 'block'
  delegatedLogoutButton.style.display = 'none'
}

function setAppAnonymous() {
  disableLoading()
  window.explorerLoggedApp = null
  appDisplayName.innerText = 'Anonymous'
  appIdentifier.innerText = ''
  appLoginDateTime.innerText = ''
  appRoles.innerHTML = ''
  appPicture.setAttribute('src', '/img/bot.png')
  appDetails.style.display = 'none'
  appLoginButton.style.display = 'block'
  appLogoutButton.style.display = 'none'
}

function setUserAuthenticated(userInfos, profile) {
  disableLoading()
  userDisplayName.innerText = profile.displayName
  userIdentifier.innerText = 'Email: ' + profile.mail
  userLoginDateTime.innerText = 'Sign-in: ' + moment().format('MMMM Do YYYY, h:mm:ss a')
  userRoles.innerHTML = 'Roles:<br />'
  if (userInfos.roles && userInfos.roles.length > 0) {
    userInfos.roles.forEach((role, i) => {
      userRoles.innerHTML += '<a href="/platform/rbac.html#roles">' +
        '<span class="uk-label uk-text-small uk-text-lowercase uk-label-success">' +
        `<span uk-icon="icon: check; ratio: 0.7"></span>&nbsp;${role}&nbsp;` +
        '</span>' +
        '</a>'
      if (i !== userInfos.roles.length - 1) {
        userRoles.innerHTML += ' '
      }
    })
  } else {
    userRoles.innerHTML += 'None'
  }
  setUserProfilePicture(userInfos.accessToken)
  userDetails.style.display = 'block'
  delegatedLoginButton.style.display = 'none'
  delegatedLogoutButton.style.display = 'block'
}

function setAppAuthenticated(token) {
  disableLoading()
  appDisplayName.innerText = token.app.display_name
  appIdentifier.innerText = 'App ID: ' + token.app.id
  appLoginDateTime.innerText = 'Sign-in: ' + moment().format('MMMM Do YYYY, h:mm:ss a')
  appRoles.innerHTML = 'Roles:<br />'
  if (token.roles && token.roles.length > 0) {
    token.roles.forEach((role, i) => {
      appRoles.innerHTML += '<a href="/platform/rbac.html#roles">' +
        '<span class="uk-label uk-text-small uk-text-lowercase uk-label-success">' +
        `<span uk-icon="icon: check; ratio: 0.7"></span>&nbsp;${role}&nbsp;` +
        '</span>' +
        '</a>'
      if (i !== token.roles.length - 1) {
        appRoles.innerHTML += ' '
      }
    })
  } else {
    appRoles.innerHTML += 'None'
  }
  appPicture.setAttribute('src', '')
  appPicture.setAttribute('src', '/img/botcolor.png')
  appDetails.style.display = 'block'
  appLoginButton.style.display = 'none'
  appLogoutButton.style.display = 'block'
}

function setUserProfilePicture(token) {
  callMSGraphBinary(graphConfig.graphPhotoEndpoint, token, function (response, endpoint) {
    const url = window.URL || window.webkitURL
    const blobUrl = url.createObjectURL(response)
    profilePicture.setAttribute("src", blobUrl)
  })
}

// #endregion UI
