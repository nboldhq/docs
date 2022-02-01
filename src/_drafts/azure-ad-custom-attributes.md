
- added: Support for Azure Active Directory schema extensions (aka custom attributes) in #naming-conventions and #audience-targeting
  - WARNING: The Azure AD `schema extensions` are different from the Microsoft Graph specific `Open extensions` and `Schema extensions` (that we may also support in the future if requested).
  - Usage: Azure AD extension attributes may be located in two different locations depending on their origin:
    1. Right at the root of the user profile for attributes created by a specific application, for instance:
    ```yaml
    { "extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10": "REDACTED" }
    ```
    These attributes are named by using the convention `extension_<extensions-app-id>_attributename`, and the `<extensions-app-id>` is specific to each tenant. To find this identifier, navigate to [Azure Active Directory > App registrations > All applications](https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps/menuId/). Search for the app that starts with "aad-extensions-app" and select it. On the app's Overview page, note the Application (client) ID.
    Usage in naming conventions and audience targeting:
    ```js
    user.extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10
    ```
    2. In the `onPremisesExtensionAttributes` property of the user profile for attributes synchronized by Azure Ad Connect (Also available from the M365 Exchange Admin UI as mailbox properties), such as:
    ```yaml
    { 
      "onPremisesExtensionAttributes": {
        "extensionAttribute1": "REDACTED",
        "extensionAttribute2": "REDACTED",
        "extensionAttribute3": "REDACTED",
        "extensionAttribute4": "REDACTED",
        "extensionAttribute5": "REDACTED",
        "extensionAttribute6": null,
        "extensionAttribute7": "M",
        "extensionAttribute8": "10/03/1982",
        "extensionAttribute9": null,
        "extensionAttribute10": "REDACTED",
        "extensionAttribute11": null,
        "extensionAttribute12": null,
        "extensionAttribute13": null,
        "extensionAttribute14": null,
        "extensionAttribute15": null
      }
    }
    ```
    Usage in naming conventions and audience targeting:
    ```js
    user.onPremisesExtensionAttributes.extensionAttribute10
    ```
  - To see the available extensions for a specific user, you can use this link that requests all the user profile properties:
    - https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com
  - Notes for later:
    - In order to list extensions dynamically from the UI:
      - List apps: https://docs.microsoft.com/en-us/graph/api/application-list
      - List extensions for an app: https://docs.microsoft.com/en-us/graph/api/application-list-extensionproperty
