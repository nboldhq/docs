# Getting Started with the SalesTim API

---

**TABLE OF CONTENTS**  
[[toc]]

---

## Key concepts for working with SalesTim API

### Templates
Templates are at the core of the SalesTim platform. As a rule of thumb, templates are a combination of two elements:
- A team template, describing the structure and contents of a team.
- A governance policy that may include security and compliance rules.

A template may be created by yourself and saved in your private corporate catalog for internal use. We call this kind of template `Catalog Template`.

::: tip Learn more
- See [How to create a new template](https://help.salestim.com/collections/2021774-build-your-microsoft-teams-templates) from our [Help Center](https://help.salestim.com)
- See [How to apply governance policies](https://help.salestim.com/collections/2036258-governance-policies)
:::

A template may also be public and accessible for free from the Microsoft Teams [Template Store](https://store.salestim.com). We call this kind of template `Store Template`
::: tip Learn more
See our open source GitHub repository [@salestim/template-manifests](https://github.com/SalesTim/template-manifests) to learn how to publish your own template to the template store.
:::

### Corporate Catalog
The corporate catalog contains your own private templates, accessible to your end-users, that includes your custom governance policies, such as:
- Naming conventions
- Audience targeting
- Approval rules
- Security automation
- Sensitivity labels

### Jobs
Jobs are governance tasks executed by the SalesTim Platform automation engine.

Jobs can be requested by the SalesTim administrators, catalog managers and virtual apps, to perform powerful operations such as:
- Provision a new team based on a template
- Apply governance policies to multiple teams
- Automatically archive teams based on a specific rule


## Use API Explorer to get to know the API
The easiest way to start exploring the data and services available through SalesTim API is to use [API Explorer](/api/explorer.md).  
API Explorer lets you craft REST requests, adapt the HTTP request headers, and see the data responses.

<Classification label="public" />
