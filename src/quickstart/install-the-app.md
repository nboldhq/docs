---
tags: []
author: Kristina Konstantynova
status: published
position: 3

---
# Install nBold for Microsoft Teams

The article describes how to setup nBold in your Microsoft Teams environment, you'll see it's fast 🚀

***

**TABLE OF CONTENTS**
[[toc]]

***

## Install nBold from the Microsoft Teams store

### 1. Get the nBold app

You can install the latest version of nBold from the Microsoft Teams store:

| Package name | Download link |
| --- | --- |
| nBold | [![](https://img.shields.io/badge/Microsoft_Teams-nBold-253BFE?logo=microsoft-teams&logoColor=white&style=flat)](https://teams.microsoft.com/l/app/589748de-ec98-4616-9063-e91c629bd1a4?source=store-copy-link) |

***

### 2. Connect to Microsoft Teams as a Global Admin

Connect to Microsoft Teams with a `Global Administrator` account. Otherwise, you won't be able to activate the app in your organization.

Select it, click on `Install` and choose `Add`

![](/media/screenshot-2022-02-13-at-11-44-50.png)

***

### 3. Give Permission for SSO Login

![](/media/screenshot-2022-02-13-at-11-48-38.png)

***

### 4. Grant Admin Consent for all other permissions

Log into nBold then click the `Consent as an administrator` button to start the approval process.

![](/media/permission-1.png)![](/uploads/permission-2.png)

Sign-in with your Microsoft 365 account from your organization that is granted the `Global Administrator` role. Check the permissions, and don't forget to check the `Consent on behalf of your organization` option. Finally, click `Accept`.

:::warning
nBold does **NOT** supports personal Microsoft Accounts (for instance @outlook.com, @hotmail.com...).
:::

You're all set up! Now it's time to [create your first template](https://docs.nbold.co/collaboration-templates/create-a-new-collaboration-template.html) to try it out.

You can also:

* [Set up the Home package](https://docs.nbold.co/quickstart/setup-the-home-package.html) to make it easier for your end-users.
* [Delegate the Template Catalog administration](https://docs.nbold.co/quickstart/delegate-template-catalog-administration.html) to your business users.

***

## Optional: Alternative deployment method

### Install nBold in your Corporate App Catalog

This "standalone" package is a personal Microsoft Teams app comprised of the following tabs (Home, Catalog, Settings, Docs), that you can manually upload to your Microsoft Teams App Catalog.

| Package name | Download link |
| --- | --- |
| nBold Standalone | [![](https://img.shields.io/badge/Microsoft_Teams-nBold_Standalone-253BFE?logo=microsoft-teams&logoColor=white&style=flat)](https://dist.salestim.io/packages/io.nbold.standalone.prd.zip) |

### Package customization

This package could be be customized to match your organization's branding or vertical approach, especially:

* Package icons
* Package title and description

For reference, see [Manifest schema for Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema).

::: tip 👋 We'll be glad to help!
Need help to customize your own package? Just <a onclick="Intercom('showNewMessage');">Contact Us!</a>
:::