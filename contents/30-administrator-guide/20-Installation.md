---
author: Kristina Konstantnyova

---
# Installation

The article describes how to setup nBold in your Microsoft Teams environment, you'll see it's fast 🚀

## Install nBold from the Microsoft Teams store

### 1. Get the nBold app

You can install the latest version of nBold from the Microsoft Teams store:  
[![Microsoft Teams store](https://img.shields.io/badge/Microsoft_Teams-nBold-253BFE?logo=microsoft-teams&logoColor=white&style=flat)](https://teams.microsoft.com/l/app/589748de-ec98-4616-9063-e91c629bd1a4)

### 2. Connect to Microsoft Teams as a Global Admin

Connect to Microsoft Teams with an `Global Administrator` account. Otherwise, you won't be able to activate the app in your organization.

Select it, click on `Install` and choose `Add`

![](/media/screenshot-2022-02-13-at-11-44-50.png)

### 3. Give Permission for SSO Login

![](/media/screenshot-2022-02-13-at-11-48-38.png)

### 4. Grant Admin Consent for all other permissions

Log into nBold then click the `Consent as an administrator` button to start the approval process.

![](/media/permission-1.png)![](/media/permission-2.png)

Sign in with your Microsoft 365 account from your organization that is granted the `Global Administrator` role. Check the permissions, and don't forget to check the `Consent on behalf of your organization` option. Finally, click `Accept`.

::: Warning nBold does **NOT** support personal Microsoft Accounts (for instance @outlook.com, @hotmail.com...). :::

You're all set up! Now it's time to [create your first template](/collaboration-templates/create-a-new-collaboration-template) to try it out.

You can also:

* [Set up the Home package](/quickstart/setup-the-home-page) to make it easier for your end-users.
* [Delegate the Template Catalog administration](/administrator-guide/delegate-template-catalog-administration) to your business users.

## Alternative deployment method (Optional)

### Install nBold in your Corporate App Catalog

This "standalone" package is a personal Microsoft Teams app comprised of the following tabs (Home, Catalog, Settings, Docs), that you can manually upload to your Microsoft Teams App Catalog:
[📦 nBold Standalone](https://assets.nbold.io/packages/io.nbold.standalone.prd.zip)

### Package customization

This package could be customized to match your organization's branding or vertical approach, especially:

* Package icons
* Package title and description

For reference, see [Manifest schema for Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema).

::: tip 👋 We'll be glad to help! Need help customizing your own package? Just <a onclick="Intercom('showNewMessage');">Contact Us!</a> :::