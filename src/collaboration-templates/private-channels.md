---
status: published
tags: []
author: Kristina Konstantynova

---
# **Private Channels in Collaboration Templates by nBold**

In this article, we describe the different capabilities of the Private Channels in Collaboration Template by nBold, and to set this up.

***

**TABLE OF CONTENTS**
\[\[toc\]\]

***

## 1. Capabilities Description

In a word, you'll be able to get a team created with different standard channels including files and folders, configured tabs, Planner, and... several **Private Channels.**

![](/uploads/screenshot-2022-02-11-at-10-41-49.png)

In each Private Channel by default, the permanent owners defined at the template level, are added as Default Private Channel Owners.

![](/uploads/private-channels-1.png)

By default, Team Members of the team are not allowed to create a Private Channel in the team.

![](/uploads/private-channel-settings.png)

Tabs in Private Channels are supported and pre-configured following the configuration from the original team.

![](/uploads/tabs-configured.png)

Currently not supported with Private Channels in Collaboration Templates:

* Files and Folders
* Everything that is not supported by Microsoft Teams Private Channels itself.

## 2. How to set up

As described in the article [➕ Create a new Collaboration Template ](https://docs.nbold.co/collaboration-templates/create-a-new-collaboration-template.html)you need first to create a Team that will stand for the Original Team, add everything needed as described. In addition, create the Private Channels needed.

Make sure you have added the Service Account as an owner of the team and the private channels.

![](/uploads/screenshot-2022-02-11-at-10-48-00.png)

Then add this particular team as a Template (you need to be a Global Admin for that). Connect to Teams > nBold App > Catalog > Create a Template > Type the name of the original team.

![](/uploads/screenshot-2022-02-11-at-11-06-25.png)

Define Permanent Owners at the template level, they will be added as Private Channels Default Owners.

![](/uploads/screenshot-2022-02-11-at-11-06-55.png)

_Learn more about the_ [_Permanent Members and Permanent Owners Policy_](https://help.salestim.com/en/articles/4149874-permanent-owners-and-members-policy)_._

## 3. Members not allowed creating private channels by default

If you want to make sure members or not allowed to create a Private Channel by default in the team, make sure that in the Original Team of the template, this setting is off by default.

Make sure that at the Template Level, "Settings" is checked on "Cloning Strategy". So that settings from the Original Team will be cloned.

![](/uploads/screenshot-2022-02-11-at-11-33-52.png)

So that as a result, in the team created with this template, this setting is off by default.

![](/uploads/private-channel-team-member-settings.png)

## 4. Serve Private Channels through Templates only

For a governance purpose, you may want to make sure that Private Channels are only created through Microsoft Template, and users won't be allowed to create a Private Channel for any purpose. With nBold you can enable that scenario.

For a governance purpose, you may want to restrict Private Channels creation for users and make available only through the ones you define in Templates. Users won't be allowed to create a Private Channel for any other purpose. Private Channels will be created only with the teams created through the defined templates.

The only thing you need to do is first, to disable the ability for users to create Private Channel, second, make sure that only nBold App can create private channels.

**Disable the ability for users to create Private Channel**

As a Microsoft Teams Admin or Global Admin, go to the [Microsoft Teams Admin Portal](https://admin.teams.microsoft.com/) go To Teams > Teams Policies > Select Global > Disable.

As a result, everyone in your organization won't be able to create private channels.

![](https://downloads.intercomcdn.com/i/o/216810631/50350f2537121e5e36eb52e6/image.png)

**Only nBold App is allowed to create private channels**

Create a new policy that can call for example "nBold Service Account".

![](https://downloads.intercomcdn.com/i/o/216813323/0cd8c2d878c4e9c1b28f0490/image.png)

Then select the policy and apply this policy to the nBold Service Account in your tenant.

![](https://downloads.intercomcdn.com/i/o/216815209/002225c2437a53c039752a22/image.png)

_Here the Service Account Name is "nBold", in your organization it certainly has another name that is defined._