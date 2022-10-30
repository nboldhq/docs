---
id: api
tags:
- api
---
# API

## Abstract

The nBold API provides a unified programmability model that you can use to manage your Microsoft Teams environment and build powerful apps easily.

Here at nBold, we know you want to concentrate on the value of your products, services, and business process, not be challenged by the complexities of integration with Microsoft Teams. Our APIs will take care of the underlying technical complexity, leaving you free to take care of your real value proposition.

## What can you do with nBold API?
nBold API is used in a lot of different industries to automate Microsoft Teams governance and improve business process across the organization, here are some common examples:
- Create powerful self-service templates for Microsoft Teams
- Deploy Microsoft Planner at scale with plans templates
- Create a custom approval process for your teams provisioning requests
- Apply automaticaly governance policies across all your teams
- Integrate a custom in-house and LoB apps with Microsoft Teams

:::tip 💡 Another Idea?
Don't hesitate to <a href="#" onclick="Intercom('showNewMessage');"><b><i>submit your ideas and scenarios</i></b></a>!
:::

## Key concepts for working with nBold API

### Templates
Templates are at the core of the nBold platform. As a rule of thumb, templates are a combination of two elements:
- A team template, describing the structure and contents of a team.
- A governance policy that may include security and compliance rules.

A template may be created by yourself and saved in your private corporate catalog for internal use. We call this kind of template `Catalog Template`.

:::tip Learn more
- See [How to create a new template](/collaboration-templates/create-a-new-collaboration-template.md).
:::

### Corporate Catalog
The corporate catalog contains your own private templates, accessible to your end-users, that includes your custom governance policies, such as:
- Naming conventions
- Audience targeting
- Approval rules
- Security automation
- Sensitivity labels

### Jobs
Jobs are governance tasks executed by the nBold Platform automation engine.

Jobs can be requested by the nBold administrators, catalog managers and virtual apps, to perform powerful operations such as:
- Provision a new team based on a template
- Apply governance policies to multiple teams
- Automatically archive teams based on a specific rule

## Use our API Explorer to get to know the API
The easiest way to start exploring the data and services available through nBold API is to use [API Explorer](/api/explorer).  
API Explorer lets you craft REST requests, adapt the HTTP request headers, and see the data responses.