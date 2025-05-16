import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "3b62cdf7-6254-4112-8c4a-a1bf499da995",
    authority: "https://login.microsoftonline.com/9e9fbccb-bd2a-4cc1-97f7-3d18787a45ee",
    redirectUri: "https://skan-dev.nbold.dev/dashboard/categorytree",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        console.log(message);
      },
    },
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  msalInstance.handleRedirectPromise().then((response) => {
    if (response) {
      msalInstance.setActiveAccount(response.account);
    }
  }).catch((error) => {
    console.error("Redirect error:", error);
  });
});