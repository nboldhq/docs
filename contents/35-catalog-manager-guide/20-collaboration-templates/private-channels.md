---
author: Kristina Konstantynova

---
# Private Channels in Collaboration Templates by nBold

In this article, we describe the different capabilities of the Private Channels in Collaboration Template by nBold, and to set this up.

## 1. Capabilities Description

In a word, you'll be able to get a team created with different standard channels including files and folders, configured tabs, Planner, and... several **Private Channels.**

![](/media/screenshot-2022-02-11-at-10-41-49.png)

In each Private Channel by default, the permanent owners defined at the template level, are added as Default Private Channel Owners.

![](/media/private-channels-1.png)

By default, Team Members of the team are not allowed to create a Private Channel in the team.

![](/media/private-channel-settings.png)

Tabs in Private Channels are supported and pre-configured following the configuration from the original team.

![](/media/tabs-configured.png)

Currently not supported with Private Channels in Collaboration Templates:

* Files and Folders
* Everything that is not supported by Microsoft Teams Private Channels itself.

## 2. How to set up

As described in the article [➕ Create a new Collaboration Template ](/catalog-manager-guide/collaboration-templates/create-a-new-collaboration-template)you need first to create a Team that will stand for the Original Team, add everything needed as described. In addition, create the Private Channels needed.

Make sure you have added the Service Account as an owner of the team and the private channels.

![](/media/screenshot-2022-02-11-at-10-48-00.png)

Then add this particular team as a Template (you need to be a Global Admin for that). Connect to Teams > nBold App > Catalog > Create a Template > Type the name of the original team.

![](/media/screenshot-2022-02-11-at-11-06-25.png)

Define Permanent Owners at the template level, they will be added as Private Channels Default Owners.

![](/media/screenshot-2022-02-11-at-11-06-55.png)

_Learn more about the_ [_Permanent Members and Permanent Owners Policy_](https://help.salestim.com/en/articles/4149874-permanent-owners-and-members-policy)_._

## 3. Members not allowed creating private channels by default

If you want to make sure members or not allowed to create a Private Channel by default in the team, make sure that in the Original Team of the template, this setting is off by default.

Make sure that at the Template Level, "Settings" is checked on "Cloning Strategy". So that settings from the Original Team will be cloned.

![](/media/screenshot-2022-02-11-at-11-33-52.png)

So that as a result, in the team created with this template, this setting is off by default.

## 4. Serve Private Channels through Templates only

For a governance purpose, you may want to make sure that Private Channels are only created through Microsoft Template, and users won't be allowed to create a Private Channel for any purpose. With nBold you can enable that scenario.

Learn more in this [dedicated article](/catalog-manager-guide/governance-policies/serve-private-channels) under the governance policy section.