# How to use Active Directory Schema Extensions

**ABSTRACT**  
This article describes how you can leverage the nBold platform to create [naming conventions](/nocode/naming-conventions.md) and [audience targeting](/nocode/audience-targeting.md) rules based on user profiles Active Directory schema extensions (aka `extension attributes`).

::: warning
This article only applies to `Azure Active Directory Schema Extensions`, that are different from the Microsoft Graph specific `Open extensions` and `Schema extensions`. To learn more about Microsoft Graph extensions, see [Add custom data to resources using extensions](https://docs.microsoft.com/en-us/graph/extensibility-overview).
:::

---

**TABLE OF CONTENTS**
[[toc]]

---

## Understanding Extension Attributes
Azure AD extension attributes may be accessed from two different locations depending on their origin:
1. Synchronized from an on-premises Active Directory. See [On-premises Extension Attributes](#on-premises-extension-attributes).
2. Managed by an application. See [Application-managed Extension Attributes](#application-managed-extension-attributes).

## On-premises Extension Attributes
On-premises extension attributes are synchronized with Azure Active Directory from an on-premises Active Directory.

::: tip
These extension attributes are also known as `Exchange custom attributes 1-15`, and can also be accessed from the Microsoft 365 Exchange Admin UI as mailbox properties.
:::

On-premises extension attributes may be accessed from the `onPremisesExtensionAttributes` property of the user profile. This property is comprised of fifteen custom extension attribute properties:
```json
{ 
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#users/$entity",
  "id": "e463251c-f0c1-42ce-a8f0-e09f89895323",
  ...
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

::: tip
To see the available extensions in your tenant, you can use this link from the [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com) that list all the user profile properties for the current user.
:::

::: tip Note
For an `onPremisesSyncEnabled` user, the source of authority for this set of properties is the on-premises Active Directory which is synchronized to Azure AD, and is read-only. For a cloud-only user (where `onPremisesSyncEnabled` is false), these properties may be set during creation or update.
:::

Usage example in naming conventions and audience targeting:
```js
user.onPremisesExtensionAttributes.extensionAttribute10
```

## Application-managed Extension Attributes
Application-managed extension attributes may be accessed from the root of the user profile:
```json
{ 
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#users/$entity",
  "id": "e463251c-f0c1-42ce-a8f0-e09f89895323",
  ...
  "extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10": "REDACTED"
}
```

These attributes are named by using the convention `extension_<extensions-app-id>_attributename`, and note that the `<extensions-app-id>` is specific to each tenant.

Usage example in naming conventions and audience targeting:
```js
user.extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10
```

::: tip
To see the available extensions in your tenant, you can use this link from the [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com) that list all the user profile properties for the current user.
:::

