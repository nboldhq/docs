# SalesTim API Changelog

All notable changes to the SalesTim API, Connectors and SDKs will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [1.2.1] - 2021-04-21

### Added
- The OpenAPI definition of the `/hooks` operation now describes the events and body schema of all the possible callbacks from all the supported webhooks.
  - It follows the [OpenAPI 3 Specification](https://swagger.io/docs/specification/about/) for [Callbacks](https://swagger.io/docs/specification/callbacks/)
  - See it live in [API Explorer](https://developers.salestim.com/api/explorer.html#/hooks/CreateHook).

### Changed
- The `TeamProvisioningCompletedNotificationPayload` object (payload of the `team_provisioning_completed` [webhook](https://developers.salestim.com/api/webhooks.html#team-provisioning-completed)), now has an additional `metadata` property holding the metadata passed to the `createTeamProvisioningJob` [operation](https://developers.salestim.com/api/reference/Apis/TeamsApi.html#createteamprovisioningjob)

## [1.2.0] - 2021-04-16

### Added
- New API operation [GetTemplates](/api/reference/Apis/CatalogApi.html#getcatalogtemplates).
- New API operation [UpdateTeam](/api/reference/Apis/TeamsApi.html#updateteam).
- The API support for application access tokens is now GA (aka "OAuth 2.0 client credentials grant flow"). See [Authentication](/api/authentication).

### Changed
- The [Authentication](/api/authentication) page now reflects the new support for application access tokens.
- The [GetUsers](/api/reference/Apis/UsersApi.html#getusers) API operation now supports standard [Microsoft Graph filters](https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#optional-query-parameters).
- The [GetJob](/connectors/connectors-actions.html#get-job-🦺) Connector Action is now only hidded by default but is still visible through search.

## [1.1.0] - 2021-02-07

### Added
- New API SDK for Node.js published in beta
- New API PowerShell module published in beta
- New webhooks available to manage the team creation approval process:
  - [Team Creation Approval Requested](/api/webhooks.html#team-creation-approval-requested)
  - [Team Creation Approved](/api/webhooks.html#team-creation-approved)
  - [Team Creation Rejected](/api/webhooks.html#team-creation-rejected)
- New API operations to manage the team creation approval process:
  - ApproveTeamCreation
  - RejectTeamCreation
- New API operations to support Power Automate and Logic Apps triggers:
  - CreateHook
  - DeleteHook
  - GetHooksEvents
  - GenerateHookSignature
- New API operations to manage teams resources:
  - GetTeam
  - UpdateTeam
  - DeleteTeam
  - ArchiveTeam
  - GetTeamChannels
  - CreateTeamChannel
  - GetTeamChannelTabs
  - CreateTeamChannelTab
  - GetTeamPrimaryChannel
  - AddTeamMember
  - UnarchiveTeam

## [1.0.0] - 2020-12-04

### Added
- Initial GA release of the API with the following operations:
  - GetMyCatalogTemplates
  - GetMyLabels
  - GetUsers
  - CreateTeamProvisioningJob
  - GetJob
