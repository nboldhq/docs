---
title: Home App Installation Steps
description: This page describes how to install the Home App

---
# Set up the Home Page

In this article, you'll see how to set up the `Home` Page in your Microsoft Teams environment:

![](https://downloads.intercomcdn.com/i/o/175631759/31ded0f5316a7f707c5752af/image.png)

Employees will get a home page that gathers all the Teams she/he belongs to, and where they can create teams based on templates made available by your organization.

:::tip You can make this homepage available to everyone in your organization or just certain groups of people.
:::

:::warning Note
To complete these steps, you MUST be a Microsoft Teams Administrator or a Microsoft 365 Global Administrator.
:::

## Setup

### 1. Download the nBold Home package

This "targeted" package is a personal Microsoft Teams app comprised of only one tab (Home).

[nBold Home package](https://assets.nbold.io/packages/io.nbold.home.prd.zip)

### 2. Connect to Microsoft Teams as an administrator

Connect to [Microsoft Teams](https://teams.microsoft.com) and load the Home Package as described here:

![](/media/home-page.png)

![](/media/screenshot-2023-01-26-at-12-05-22.png)

Select from your computer the nBold Home package (Select the entire zip file) that you have just downloaded.

![](/media/home-page-1.png)![](/media/add-home.png)

![](https://downloads.intercomcdn.com/i/o/442959300/32e37d44e7c306fe23d9c902/home+app+pinned.png)

Once installed, you'll find the home package on your own company store and on the Microsoft Teams navigation bar.

### 3. Connect to Microsoft Teams Admin Panel

Connect to the [Microsoft Teams Admin Center](https://admin.teams.microsoft.com/) and reach the [App Setup Policies Section](https://admin.teams.microsoft.com/policies/app-setup).

![](https://downloads.intercomcdn.com/i/o/164959617/c9f596e883c3f0cc24cd116f/image.png)

At this stage, you have two options:

* Deploy the Home Page for everyone: Just follow step 4
* Deploy the Home Page for a selected group of users: jump directly to step 5

### 4. Deploy the Home package for everyone

You'll see two policies by default, but it may vary depending on your own configuration. With App Setup Policies, you have the capability to change the Apps shown to end-users on the left bar.

Select the `Global (Org Wide Default)` policy:

![](https://downloads.intercomcdn.com/i/o/164963877/85ff3c22723fffe3ebcdb51c/image.png)

Select `Add apps`:

![](https://downloads.intercomcdn.com/i/o/164962343/e6d518a5dd5393427e9232a3/image.png)

Search for `Home` and click `Add`:

![](/media/add-home-1.png)

Select `Add` again:

![](/media/add-home-2.png)

Select and move up the Home app to the top:

![](/media/add-home-3.png)

And now just click on `Save`!

:::warning
It may take **up to two hours** for the policy to be effective and the app visible in the Microsoft Teams clients.
:::

### 5. Deploy the Home package to a selected group of users

On the App Setup Policies page, create a new policy by clicking `Add`:

![](https://downloads.intercomcdn.com/i/o/164966410/ea62789ceeebfe3875d4271a/image.png)

Give it a name, such as "nBold Home setup policy"

![](/media/add-home-page-5.png)

Then follow the steps described in **"4. Add the home Page to everyone"** to add the Home Package to the Policy.

## Package customization (Optional)

This package could be be customized to match your organization's branding or vertical approach, especially:

* Package icons
* Package title and description

For reference, see [Manifest schema for Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema).

:::tip 👋 We'll be glad to help!
Need help to customize your own package? Just <a onclick="Intercom('showNewMessage');">Contact Us!</a>
:::