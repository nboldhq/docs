---
keywords: []
tags: []
title: Teams Lifecycle
description: This article describes what is teams lifecycle and how does it work
image: ''

---
# Teams Lifecycle

While your organization would be well-equipped and organized with various team workflows, there might be tens or hundreds of inactive teams that you would like to archive or delete.

Introducing **Teams Lifecycle** - the newest addition to your collaboration templates.

## What is Teams Lifecycle?

Teams Lifecycle helps you manage the lifecycle of teams within the platform. It allows administrators to establish team and group policies based on their activity level. This helps to ensure that inactive teams are identified and managed efficiently.

With Teams Lifecycle, admins can keep track of teams, monitor their activity levels, and act when necessary to keep the platform organized and running smoothly.

## How does it work?

* When a team becomes inactive, an email notification is sent to all the owners of the team asking them for action, with a direct link to the team in question.
* After the grace period has ended, if the action is set to archive or delete, an email notification is sent to all the owners of the team mentioning the executed action on that team.

## What are the available options?

* **Enable**: Turns on/off the lifecycle policy control for teams associated with this template.
* **Inactivity period**: The period to wait until the latest recorded activity to trigger the team owner's notification. The inactivity period can be defined as 7, 30, or 90 days.
* **Expiration**: The period to wait before triggering the lifecycle policy action. The grace period can be defined as 7 or 30 days.
* **Action**: The action to be taken if the grace period has ended, among "None", "Archive", or "Delete".

![](/media/screenshot-2023-01-29-at-18-42-25.png)

> **Please Note**: By default, the lifecycle policy is disabled. When enabled, the inactivity period is set to 30 days, the grade period is set to 7 days and the action defined as "Archive".

## How to enable Teams Lifecycle?

1. Go to Microsoft Teams and log into your nBold account.
2. Click on Create a Template or edit an existing one.
3. Go to the Lifecycle tab.
4. Click on "Enable lifecycle policy".
5. Enter the number of days of Inactivity and Expiration.
6. Select the Action you would like to take on the teams.

> Please Note:
>
> 1. For the lifecycle to work as expected, the service account must have the `Reports.Read.All` role granted.
> 2. As of today, the "Lifecycle" tab is restricted to users granted the \`Change Managers\` role.