# Role Based Access Control (RBAC)

**ABSTRACT**  
*Role based access control (RBAC) enables Microsoft 365 global administrators to define permissions and restrict access to specific nBold's features to specific groups of users.*  
*To implement RBAC and provide a high level of granularity, nBold relies on both standard Microsoft 365 roles, namely `Teams service admin` and `Global admin`, and also on some application specific roles, such as `Catalog managers` and `Integration manager`.*

---

**TABLE OF CONTENTS**
[[toc]]

---

## Roles
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

## Roles Permissions
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

