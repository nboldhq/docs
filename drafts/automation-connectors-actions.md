---
author: Guillaume Meyer
tags:
- automation
- connectors
- actions
---
# Available triggers and actions

**Abstract**  
This article describes the Power Platform and Logic Apps triggers and actions available from the nBold Connector.

:::tip
This article refers to connex concepts. If required, please refer to:

* [Rate Limits](/api/rate-limits)
* [Role-Based Access Control (RBAC)](/trust-center/authentication-and-access-control)

:::


## Triggers

### When a Team is Created

Triggered when a team is created, whatever the creation origin (manual, api, using a template...).

* Event Code: `team_created`
* Category: `teams`
* Rate Limit: None
* Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks#team-created)

### When a Team Provisioning is Completed

Triggered when a team provisioning request based on a template is complete (wether successfully or not).

* Event Code: `team_provisioning_completed`
* Category: `teams`
* Rate Limit: None
* Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks#team-provisioning-completed)

### When a Team Creation Approval is Requested

Triggered when a user is requesting the creation of a new team using a template that enforces team creation approval.

* Event Code: `team_creation_approval_requested`
* Category: `approvals`
* Rate Limit: None
* Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks#team-creation-approval-requested)

### When a Team Creation is Approved

Triggered when a team creation approval is approved.

* Event Code: `team_creation_approved`
* Category: `approvals`
* Rate Limit: None
* Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks#team-creation-approved)

### When a Team Creation is Rejected

Triggered when a team creation approval is rejected.

* Event Code: `team_creation_rejected`
* Category: `approvals`
* Rate Limit: None
* Roles: `INTEGRATION_MANAGER`, `TEAMS_SERVICE_ADMIN`, `GLOBAL_ADMIN`

See [Webhook Documentation](/api/webhooks#team-creation-rejected)

## Actions

### Get My Catalog Templates

Get teams templates accessible to the connected user filtered by the audience targeting rules.

* Operation ID: `GetMyCatalogTemplates`
* Category: `catalog`
* Rate Limit: Tier 2
* Roles: `AUTHENTICATED_USER`

### Get My Sensitivity Labels

Get my Microsoft 365 sensitivity labels.

* Operation ID: `GetMyLabels`
* Category: `labels`
* Rate Limit: Tier 3
* Roles: `AUTHENTICATED_USER`

### Get Users

Retreive users from your Microsoft 365 environment.

* Operation ID: GetUsers
* Category: users
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS.

### Get Team

Get detailed information about a team.

* Operation ID: GetTeam
* Category: `teams`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS

### Delete Team

Delete a team.

* Operation ID: DeleteTeam
* Category: `teams`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS

### Archive Team

Archive a team.

* Operation ID: ArchiveTeam
* Category: `teams`
* Rate Limit: Tier 1
* Roles: All_AUTHENTICATED_USERS

### Unarchive Team

Unarchive a team.

* Operation ID: UnarchiveTeam
* Category: `teams`
* Rate Limit: Tier 1
* Roles: All_AUTHENTICATED_USERS

### Invite Team Member

Invite a member to a team.

* Operation ID: AddTeamMember
* Category: `teams`
* Rate Limit: Tier 2
* Roles: All_AUTHENTICATED_USERS

### Create Team Based on Template

Create a new team provisioning job.

* Operation ID: CreateTeamProvisioningJob
* Category: `teams`
* Rate Limit: Tier 1
* Roles: All_AUTHENTICATED_USERS.

### Approve Team Creation

Approve a team creation request.

* Operation ID: ApproveTeamCreation
* Category: `approvals`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS.

### Reject Team Creation

Reject a team creation request.

* Operation ID: RejectTeamCreation
* Category: `approvals`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS.

### Get Team Channels

Get team channels.

* Operation ID: GetTeamChannels
* Category: `teams`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS.

### Create Team Channel

Create a new team channel.

* Operation ID: CreateTeamChannel
* Category: `teams`
* Rate Limit: Tier 2
* Roles: All_AUTHENTICATED_USERS

### Get Team Primary Channel

Get the primary channel of a team

* Operation ID: `GetTeamPrimaryChannel`
* Category: `teams`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS

### Get Team Channel Tabs

Get team channel tabs

* Operation ID: `GetTeamChannelTabs`
* Category: `teams`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS

### Create Team Channel Tab

Create a new team channel tab

* Operation ID: CreateTeamChannelTab
* Category: `teams`
* Rate Limit: Tier 2
* Roles: All_AUTHENTICATED_USERS

### Get Job

Get detailed information about a job, including its status, progress, logs...

* Operation ID: `GetJob`
* Category: `jobs`
* Rate Limit: Tier 2
* Roles: All_AUTHENTICATED_USERS

### Generate Hook Signature

Generate a signature from a secret and a webhook payload

* Operation ID: `GenerateHookSignature`
* Category: `hooks`
* Rate Limit: Tier 3
* Roles: All_AUTHENTICATED_USERS
