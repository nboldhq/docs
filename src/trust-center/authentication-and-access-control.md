---
position: 3
status: published
author: Guillaume Meyer
---

# Authentication and access control

---

**TABLE OF CONTENTS**
[[toc]]

---

## Authentication

### Identity Provider (IdP)
Access to nBold relies 100% on Microsoft Azure Active Directory (AAD) as an IdP for authentication.  
Especially, it means that:
- User authentication is performed against your own AAD, just like any other regular Office 365 authentication process.
- You can enable, disable and manage individual permissions grants from your own AAD.
- We're not accessing, processing nor storing any login / password.
- Our authentication mechanism is compatible with any [MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication) authentication method supported by AAD.

### Single Sign On (SSO)

Single Sign On (SSO) for Microsoft Teams custom apps such as nBold is not yet fully supported by Microsoft, as the current implementation for SSO only grants consent for user-level permissions (email, profile, offline_access, openid) but not for other APIs (such as Microsoft Graph).  
For further reference, see [Microsoft Teams SSO for custom apps known limitations](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso#known-limitations)

::: tip Service account authentication details 
For service account authentication details, please refer to [Microsoft Graph Permissions](/trust-center/microsoft-graph-permissions.md)
:::

## Role Based Access Control (RBAC)

Role based access control (RBAC) enables Microsoft 365 global administrators to define permissions and restrict access to specific nBold's features to specific groups of users.

To implement RBAC and provide a high level of granularity, nBold relies on both standard Microsoft 365 roles, namely `Teams service admin` and `Global admin`, and also on some application specific roles, such as `Catalog managers` and `Integration manager`.

### Supported roles
The nBold platform supports the following roles:

| Role | Code | Origin |
|------|------|--------|
| End-User | `AUTHENTICATED_USER` | nBold |
| Authorized App | `AUTHORIZED_APP` | nBold |
| Catalog Manager | `CATALOG_MANAGER` | nBold |
| Integration Manager | `INTEGRATION_MANAGER` | nBold |
| Change Manager | `CHANGE_MANAGER` | nBold |
| Teams Service Admin | `TEAMS_SERVICE_ADMIN` | Microsoft 365 |
| Global Admin | `GLOBAL_ADMIN` | Microsoft 365 |

### Roles Permissions
Here is the matrix of features/roles supported by the nBold platform:

| Feature | End-User | Authorized App | Catalog Manager | Integration Manager | Change Manager | Teams Service Admin | Global Admin |
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Home** - View teams you're a member of from the homepage | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **New team** - Create a new team based on a template | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Approval** - Approve / Reject a team creation request | ✅ | 🚫 | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Templates Catalog** - Create / Update / Delete team templates, define their content, select their approvers, define their audience targeting and select a governance policy | 🚫 | ✅ | ✅ | 🚫 | 🚫 | ✅ | ✅ |
| **Integration** - Manage platform's webhooks and external connected apps integration settings | 🚫 | ✅ | 🚫 | ✅ | 🚫 | ✅ | ✅ |
| **Preview Features** - Allows change managers responsible for nBold updates to prepare for the upcoming changes by letting them test and validate new updates before they are released to all the users in the organization | 🚫 | 🚫 | 🚫 | 🚫 | ✅ | 🚫 | 🚫 |
| **Governance policies** - Define global governance policies available from the template catalog, including security and compliance rules | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | ✅ | ✅ |
| **Settings** - Manage service credentials and other platform's system configuration | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | ✅ |
| **Audit trails** - View company-wide and user-level audit trails | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | ✅ |
| **Roles management** - Assign roles to specific users | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | ✅ |
