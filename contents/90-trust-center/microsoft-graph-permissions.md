---
position: "4"
status: published
author: nBold DEV

---
# Microsoft Graph Permissions

## Understanding permissions scopes

To comply with the principle of "least-privilege", and request the minimum required permissions to perform specific operations, nBold defines different permissions scopes that it will use in different contexts.

Here is a diagram describing in which context each scope is requested:

```mermaid
flowchart TB

    %% Nodes

    teams(Microsoft Teams client<br />Desktop, web, mobile)
        
    subgraph serverside[Server-side]
        jobs(Asynchronous Jobs)
        serviceaccount(Service Account scope)
        application(Application scope)
    end

    subgraph clientside[Client-side]
        basic(Basic scope)
        home(Home scope)
        catalog(Catalog scope)
        settings(Settings scope)
    end

    azuread(Azure AD)
    msgraph(Microsoft Graph)
 
    %% Links

    teams -->|SSO| clientside
    teams -->|Triggers| serverside

    basic -->|Access to<br />Home tab| home
    basic -->|Access to<br />Catalog tab| catalog
    basic -->|Access to<br />Settings tab| settings

    jobs -->|Scheduled| jobs
    jobs -->|Service account<br />model?| serviceaccount
    jobs -->|Application<br />model?| application

    clientside -->|Delegated permissions| azuread
    application -->|Application permissions| azuread
    serviceaccount -->|Delegated permissions| azuread

    azuread -->|Authorize| msgraph

    %% Styles

    classDef external fill:#9099d8, stroke-width:0px;
        class teams external
    classDef scope fill:#90EE90, stroke-width:0px;
        class basic scope
        class home scope
        class catalog scope
        class settings scope
        class serviceaccount scope
        class application scope
    classDef microsoftervices fill:#FFFFE0, stroke-width:0px;
        class azuread microsoftervices
        class msgraph microsoftervices
    classDef containers fill:#ADD8E6, stroke-width:0px;
        class jobs containers
```

**Legend:**

```mermaid
graph TB
    ext(Client)
    srv(Server-side Service)
    scope(Scope)
    ms(Microsoft Service)

    classDef external fill:#9099d8, stroke-width:0px;
        class ext external
    classDef network fill:#90EE90, stroke-width:0px;
        class scope network
    classDef azureservices fill:#FFFFE0, stroke-width:0px;
        class ms azureservices
    classDef containers fill:#ADD8E6, stroke-width:0px;
        class srv containers
```

---

:::tip Understanding admin-restricted permissions
Depending on the permission type (Delegated or Application), some high-privilege permissions in the Microsoft ecosystem are set to admin-restricted.  
Examples of these kinds of permissions include the following:
- Read all user's full profiles by using ```User.Read.All```
- Write data to an organization's directory by using ```Directory.ReadWrite.All```
- Read all groups in an organization's directory by using ```Groups.Read.All```

For nBold to access data in Microsoft Graph, your administrator must grant it the correct permissions via a consent process.  

Learn more:
- [nBold Install and Setup Guide...](/administrator-guide/Installation)
- [Azure AD application consent experience...](https://docs.microsoft.com/en-us/azure/active-directory/develop/application-consent-experience)
- [Microsoft Graph permissions reference...](https://docs.microsoft.com/en-us/graph/permissions-reference)
:::

### Basic scope

From the nBold app for Microsoft Teams, a user is authenticated using the [Tabs SSO mechanism](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso). Through this SSO process, a limited set of user-level OpenID permissions is granted, namely `email`, `profile`, `offline_access`, and `openid`.

This basic scope is requested by the nBold app once the user is authenticated, to access any of its tabs:

| Permission | Type | Origin | Justification | Admin Consent Required |
|------------|------|--------|---------------|:----------------------:|
| `openid` | Delegated | OpenID | Allows nBold to sign-in a user. | No |
| `offline_access` | Delegated | OpenID | Allows nBold to retreive a refresh token used to refresh the access token of the current user from the application web client. | No |
| `email` | Delegated | OpenID | Allows nBold to read the email address of the current user. | No |
| `profile` | Delegated | OpenID | Allows nBold to read the basic profile (name, picture, user name) of the current user. | No |
| `User.Read` | Delegated | Microsoft Graph | Allows nBold to read the profile of signed-in users. It also allows the app to read basic company information of signed-in users. | No |

### Home scope

In addition to the basic scope, when a user is trying to access the `Home` tab, nBold requests the following additional permissions:

| Permission | Type | Origin | Justification | Admin Consent Required |
|------------|------|--------|---------------|:----------------------:|
| `TeamSettings.Read.All` | Delegated | Microsoft Graph | Allows nBold to retreive the settings of teams a user is a member of, used to show some teams settings from the `Home` tab of the nBold app. | Yes |
| `TeamMember.Read.All` | Delegated | Microsoft Graph | Allows nBold to retreive the members (owners, members and guests) of teams a user is a member of, used to show teams members from the `Home` tab of the nBold app. | Yes |
| `ChannelMember.Read.All` | Delegated | Microsoft Graph | Allows nBold to retreive the members (owners, members and guests) of channels (private, shared) from teams a user is a member of, used to show some teams members from the `Home` tab of the nBold app. | Yes |
| `ChannelSettings.Read.All` | Delegated | Microsoft Graph | Allows nBold to retreive the settings of channels from teams a user is a member of, used to show some channels settings from the `Home` tab of the nBold app. | Yes |
| `TeamsTab.Read.All` | Delegated | Microsoft Graph | Allows nBold to retreive the tabs included in channels from teams a user is a member of, used to show some tabs settings from the `Home` tab of the nBold app. | Yes |


### Catalog scope

In addition to the basic scope, when a user is trying to access the `Catalog` tab (and of course if the user was granted the `Catalog Manager` role from the RBAC settings), nBold requests the following additional permissions:

| Permission | Type | Origin | Justification | Admin Consent Required |
|------------|------|--------|---------------|:----------------------:|
| `InformationProtectionPolicy.Read` | Delegated | Microsoft Graph | Allows the catalog manager to select a sensitivity label from a list (Seeing only the labels he has access to) to associate with a collaboration template. | Yes |


### Settings scope

When a user is trying to access the `Settings` tab (and of course if the user was granted the `Global Administrator` or the `Teams Administrator` role), nBold only requests the permissions from the `Basic scope` as the only required permission is `User.Read` (already included in `Basic scope`)


### Service account scope

If the application is executed in the context of a service account model, when an administrator is registering the service account from the `Settings` tab, nBold requests the following `delegated` permissions as part of the admin consent process:

| Permission | Type | Origin | Justification | Admin Consent Required |
|------------|------|--------|---------------|:----------------------:|
| `email` | Delegated | Microsoft Graph | Allows the app to view users' email addresses. | Yes |
| `offline_access` | Delegated | Microsoft Graph | Maintains access to data the app has been given access to. | Yes |
| `openid` | Delegated | Microsoft Graph | Allows the app to sign users in. | Yes |
| `profile` | Delegated | Microsoft Graph | Allows the app to view users' basic profiles. | Yes |
| `User.Read` | Delegated | Microsoft Graph | Allows the app to sign in and read the user's profile. | Yes |
| `AppCatalog.Read.All` | Delegated | Microsoft Graph | Allows the app to read all app catalogs. | Yes |
| `Mail.Send` | Delegated | Microsoft Graph | Allows the app to send mail as a user. | Yes |
| `User.Read.All` | Delegated | Microsoft Graph | Allows the app to read all users' full profiles. | Yes |
| `Directory.AccessAsUser.All` | Delegated | Microsoft Graph | Allows the app to access the directory as the signed-in user. | Yes |
| `Group.ReadWrite.All` | Delegated | Microsoft Graph | Allows the app to read and write all groups. | Yes |
| `Team.ReadBasic.All` | Delegated | Microsoft Graph | Allows the app to read the names and descriptions of teams. | Yes |
| `Team.Create` | Delegated | Microsoft Graph | Allows the app to create teams. | Yes |
| `TeamsActivity.Send` | Delegated | Microsoft Graph | Allows the app to send a teamwork activity as the user. | Yes |
| `TeamSettings.ReadWrite.All` | Delegated | Microsoft Graph | Allows the app to read and change teams' settings. | Yes |
| `TeamsAppInstallation.ReadWriteForTeam` | Delegated | Microsoft Graph | Allows the app to manage installed Teams apps in teams. | Yes |
| `TeamMember.ReadWrite.All` | Delegated | Microsoft Graph | Allows the app to add and remove members from teams. | Yes |
| `TeamsTab.ReadWrite.All` | Delegated | Microsoft Graph | Allows the app to read and write tabs in Microsoft Teams. | Yes |
| `Channel.Create` | Delegated | Microsoft Graph | Allows the app to create channels. | Yes |
| `ChannelSettings.ReadWrite.All` | Delegated | Microsoft Graph | Allows the app to read and write the names, descriptions, and settings of channels. | Yes |
| `ChannelMember.ReadWrite.All` | Delegated | Microsoft Graph | Allows the app to add and remove members from channels. | Yes |
| `ChannelMessage.Read.All` | Delegated | Microsoft Graph | Allows the app to read user channel messages. | Yes |
| `ChannelMessage.ReadWrite` | Delegated | Microsoft Graph | Allows the app to read and write user channel messages. | Yes |
| `ChannelMessage.Send` | Delegated | Microsoft Graph | Allows the app to send channel messages. | Yes |
| `Sites.FullControl.All` | Delegated | Microsoft Graph | Allows the app to have full control of all site collections. | Yes |
| `Notes.ReadWrite.All` | Delegated | Microsoft Graph | Allows the app to read and write all OneNote notebooks that the user can access. | Yes |
| `Reports.Read.All` | Delegated | Microsoft Graph | Allows the app to read all usage reports. | Yes |
| `ReportSettings.Read.All` | Delegated | Microsoft Graph | Allows the app to read admin report settings. | Yes |
| `InformationProtectionPolicy.Read` | Delegated | Microsoft Graph | Allows the app to read user sensitivity labels and label policies. | Yes |
| `User.ReadBasic.All` | Delegated | Microsoft Graph | Allows the app to read all users' basic profiles. | Yes |
| `Channel.ReadBasic.All` | Delegated | Microsoft Graph | Allows the app to read the names and descriptions of channels. | Yes |
| `People.Read` | Delegated | Microsoft Graph | Allows the app to read users' relevant people lists. | Yes |

## Service Account
A service account is a user identity that is associated with a service executable (such as nBold) for the purpose of providing a security context for that service.

**Why do we NEED a service account?**  
nBold relies intensively on the Microsoft Graph API. Therefore it's important to understand its permissions model and basic requirements.  

**Understand delegated and application permissions**  
Microsoft Graph has two types of permissions:
* ***Delegated permissions*** are used by apps that have a signed-in user present. For these apps either the user or an administrator consents to the permissions that the app requests and the app can act as the signed-in user when making calls to Microsoft Graph. Some delegated permissions can be consented by non-administrative users, but some higher-privileged permissions require administrator consent.
* ***Application permissions*** are used by apps that run without a signed-in user present. For example, apps that run as background services or daemons. Application permissions can only be consented by an administrator.

:::tip
Due to some Microsoft Graph functional and technical limitations, nBold now relies on a delegated permission model. In the future, nBold will switch to an application model.
:::

Learn more about [Authentication and authorization basics for Microsoft Graph...](https://docs.microsoft.com/en-us/graph/auth/auth-concepts#microsoft-graph-permissions)

**How we're securing it?**
- **Least-Privilege Administrative Models**: Every single requested permission scope is documented and justified.
- **Authentication**: We're not storing any login / password combination, and service account configuration can only be performed by one of your administrators.

### Prerequisites

**Minimal requirements**  
Service account minimal requirements:
- Must be able to sign-in interactively
  * Why: The service account needs to sign-in from the app to retreive Microsoft Graph access and refresh token.
- Must have at least an active Office 365 E1 license
  * Why: The service account must be a regular Office 365 user to use the Microsoft Graph API in delegated mode.
- Must have an active license to Microsoft Teams
  * Why: To perform administrative operations on Microsoft Teams artefacts.
- Must be assigned at least the `Teams Administrator` role
  * Why: To perform administrative operations on teams/groups, especially gain the "owner" status on any existing teams/group.

**Optional requirements**  
Service account optional requirements:
- Must have an active Exchange Online license and its Exchange Online mailbox provisioned, if the `organization-level provider` option is enabled from the `Approval` section of the `Settings` tab.
  * Why: To send email notifications and actionable messages in a secure way inside customer's domain, respecting internal mail flow rules
- Must have an active Azure AD P1 license, if sensitivity labels are defined in your templates
  * Why: To apply sensitivity labels to your teams/groups

:::tip
Learn how to [setup the service account](/administrator-guide/Service-Account-Setup)
:::

**Is the service account visible to end-users?**  
Even if the service account is performing actions in the background (Such as provisioning and other administrative operations), it may appear to end-user in some cases:
- It is seen as the teams and associated resources (such as planner) creator
- Its profile picture and name appear as the sender of notifications

:::tip
Choose the name you want, this can be the name of your IT Service for instance, and add a nice picture!
:::

### Security Best practices

This list is for sure not exhaustive, but may give you some guidelines on how to secure your service accounts:

#### Enforce service account security with MFA
nBold service account supports Multi-Factor Authentication (MFA). MFA adds an additional layer of protection, ensuring that service account declaration or update is done by an authorized person.

:::caution Password update and MFA (Multi-factor authentication)
If you enforce MFA for the service account or update its password AFTER it has been configured in nBold, you MUST update it from the "Settings" tab using the "🎭 Update" button.
:::

#### Keep access limited
Ensure you only allocate AD service accounts the minimum privileges they require for the tasks they need to carry out, and don’t give them any more access than is necessary. In many cases you can remove the functionality for remote access, terminal service login, internet access, and remote control rights.

#### Create service accounts from scratch
Don’t create service accounts in Active Directory by copying old ones, as you might accidentally be copying from a service account with much higher privileges than you need. This could lead to security issues and account misuse if you give someone an account with access to resources or information they shouldn’t be privy to.

#### Don’t put service accounts in built-in privileged groups
Putting service accounts in groups with built-in privileges can be risky, because each person in the group will have access to the service account’s credentials. If there’s account misuse, it can be hard to figure out who the offender is. If you need a service account for a privileged group, create a new group with the same privileges and allow access only to the service account.

#### Control password configuration
You can set a service account so the user can’t change their own password. You can also set it so the account can’t be delegated to someone else. This ensures the administrator controls the password, and nobody other than authorized users has access to the account.

#### Enable auditing
Be sure to enable auditing for all service accounts and related objects. Once auditing is enabled, regularly check the logs to see who’s using the accounts, when, and for what purposes. Auditing is one of the most important of the best practices: it helps ensure security, verifies internal processes and compliance measures are being followed, and can discover any issues or breaches before too much time passes.

You can leverage multiple sources of reports and audits:
- Microsoft 365 and Microsoft Teams reports: As a regular user, some aspects of the service account activity are available from the standard [Microsoft 365 reports](https://admin.microsoft.com/#/reportsUsage) and [Microsoft Teams reports](https://admin.teams.microsoft.com/analytics/reports). This is especially useful to monitor the overall level of activity to detect unusual patterns (external file sharing, downloads...). N.B: These reports are also available from Power BI.
- Microsoft 365 Defender: Detailed audit trails are accessible from the [Microsoft 365 Defender portal](https://security.microsoft.com/auditlogsearch)
- Azure AD: From the [AAD portal)(https://aad.portal.azure.com), you have access to both signin-logs and audit logs
- nBold: nBold provides its own trails of all the operations performed by the service account, especially through the provisioning audit trails.

These audits trails could be integrated with an [SIEM](https://en.wikipedia.org/wiki/Security_information_and_event_management) solution such as [Microsoft Sentinel](https://docs.microsoft.com/en-us/azure/sentinel/overview) for automated analysis and patterns recognition.

#### Implement access rights management software
Carefully managing your Active Directory service accounts is crucial to preventing misuse of broad access and privileges. An access rights management tool can be beneficial to ensure user accounts are set up and managed with appropriate permissions and access.
