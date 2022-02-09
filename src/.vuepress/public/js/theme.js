let iconClicksCount = 0

function initSigninPage () {
  try {
    microsoftTeams.initialize()
    // Get context and set theme on load
    microsoftTeams.getContext((context) => {
      // We're in Teams
      hideLogo()
      hideUserSettings()
      updateTheme(context.theme) // Update theme based on Teams theme
    })
    // Handles theme change in Microsoft Teams client
    microsoftTeams.registerOnThemeChangeHandler((theme) => {
      updateTheme(theme)
    })
  } catch (err) {
    console.error(err)
  }
}
initSigninPage()

// function hideNavbar () {
//   try {
//     var checkExist = setInterval(function () {
//       if (document.getElementsByClassName('theme-container').length && document.getElementsByClassName('navbar')) {
//         const themeContainer = document.getElementsByClassName('theme-container')[0]
//         themeContainer.classList.add('no-navbar')
//         const navbar = document.getElementsByClassName('navbar')[0]
//         navbar.style.display = 'none'
//       }
//     }, 100)
//   } catch (err) {
//     console.error(err)
//   }
// }

function hideLogo () {
  try {
    const logoClass = 'logo'
    const checkExist = setInterval(function () {
      if (document.getElementsByClassName(logoClass).length) {
        const logo = document.getElementsByClassName(logoClass)[0]
        logo.style.display = 'none'
      }
    }, 100)
  } catch (err) {
    console.error(err)
  }
}

function hideUserSettings () {
  try {
    const userSettingsClass = 'user-settings'
    var checkExist = setInterval(function () {
      if (document.getElementsByClassName(userSettingsClass).length) {
        const userSettings = document.getElementsByClassName(userSettingsClass)[0]
        userSettings.style.display = 'none'
      }
    }, 100)
  } catch (err) {
    console.error(err)
  }
}

function updateTheme (theme) {
  try {
    localStorage.removeItem('dark-theme') // Remove previously defined dark theme
    const darkThemeClass = 'yuu-theme-dark'
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove(darkThemeClass)
    switch (theme) { // "theme": "The current UI theme: default | dark | contrast",
      case 'default':
        // Do nothing
        break
      case 'dark':
        body.classList.add(darkThemeClass)
        break
      case 'contrast':
        body.classList.add(darkThemeClass)
        break
      default:
        // Do nothing
        break
    }
  } catch (err) {
    console.error(err)
  }
}
