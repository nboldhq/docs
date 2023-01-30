---
keywords: []
tags: []
title: Teams Lifecycle
description: This article describes what is teams lifecycle and how does it work
image: ''

---
# Teams Lifecycle

While your organization would be well equipped and organized with various team workflows, there might be tens or hundreds of inactive teams that you would like to eliminate (even from the hidden view) for a much more organized and structured view.

Introducing **Teams Lifecycle** - the newest addition to your collaboration templates.

## What is Teams Lifecycle?

Teams Lifecycle helps you manage the life cycle of teams within the platform. It allows administrators to establish policies for groups based on their level of activity. This helps to ensure that inactive teams are recognized and managed efficiently.

With Teams Lifecycle, admins can keep track of teams, monitor their activity levels, and act when necessary to keep the platform organized and running smoothly.

## How does it work?

* When a team becomes inactive, an email notification is sent to all the owners of the team asking them for action, with a direct link to the team in question.
* After the grace period has ended, if the action is set to archive or delete, an email notification is sent to all the owners of the team mentioning the executed action on that team.

## What are the available options?

* **Enable**: Turns on/off the lifecycle policy control for teams associated with this template.
* **Inactivity period**: The period to wait until after the latest recorded activity to trigger the team owner's notification. The inactivity period can be defined as 7, 30, or 90 days.
* **Expiration**: The period to wait before triggering the lifecycle policy action. The grace period can be defined as 7 or 30 days.
* **Action**: The action to be taken if the grace period has ended, among none, archive, or delete.

![](/media/screenshot-2023-01-29-at-18-42-25.png)

> **Please Note**: By default, the lifecycle is disabled and when enabled, the inactivity is set to 30 days, Expiration is set to 7 days and the Action is selected as Archive.

## How to enable Teams Lifecycle?

1. Go to Microsoft Teams and log into your nBold account.
2. Click on Create a Template.
3. Go to the Lifecycle tab.
4. Click on "Enable lifecycle policy".
5. Enter the number of days of Inactivity and Expiration.
6. Select the Action you would like to take on the teams (Archive or Delete).

> Please Note:
>
> 1. For the lifecycle to work as expected, the service account must the `Reports.Read.All` role granted.
> 2. The "Lifecycle" tab from the template form is only accessible to change managers.