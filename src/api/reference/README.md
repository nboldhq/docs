# Documentation for SalesTim API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/api/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApprovalsApi* | [**approveTeamCreation**](Apis/ApprovalsApi.md#approveteamcreation) | **POST** /approvals/{approvalRequestId}/approve | Approve a team creation request
*ApprovalsApi* | [**rejectTeamCreation**](Apis/ApprovalsApi.md#rejectteamcreation) | **POST** /approvals/{approvalRequestId}/reject | Reject a team creation request
*AuditTrailsApi* | [**getAuditTrailRecords**](Apis/AuditTrailsApi.md#getaudittrailrecords) | **GET** /audittrails/{code}/records | Get all the records from an audit trail
*AuditTrailsApi* | [**getAuditTrails**](Apis/AuditTrailsApi.md#getaudittrails) | **GET** /audittrails | Get audit trails
*JobsApi* | [**getJob**](Apis/JobsApi.md#getjob) | **GET** /jobs/{jobId} | Get information about a job
*SensitivityLabelsApi* | [**getMyLabels**](Apis/SensitivityLabelsApi.md#getmylabels) | **GET** /me/labels | Get my sensitivity labels
*TeamsApi* | [**addTeamMember**](Apis/TeamsApi.md#addteammember) | **POST** /teams/{teamId}/members | Add a team member
*TeamsApi* | [**archiveTeam**](Apis/TeamsApi.md#archiveteam) | **POST** /teams/{teamId}/archive | Archive a team
*TeamsApi* | [**createTeamChannel**](Apis/TeamsApi.md#createteamchannel) | **POST** /teams/{teamId}/channels | Create a new team channel
*TeamsApi* | [**createTeamChannelTab**](Apis/TeamsApi.md#createteamchanneltab) | **POST** /teams/{teamId}/channels/{channelId}/tabs | Create a new team channel tab
*TeamsApi* | [**createTeamProvisioningJob**](Apis/TeamsApi.md#createteamprovisioningjob) | **POST** /teams/provisioning | Create a new team based on a template
*TeamsApi* | [**deleteTeam**](Apis/TeamsApi.md#deleteteam) | **DELETE** /teams/{teamId} | Delete a team
*TeamsApi* | [**getTeam**](Apis/TeamsApi.md#getteam) | **GET** /teams/{teamId} | Get a team
*TeamsApi* | [**getTeamChannelTabs**](Apis/TeamsApi.md#getteamchanneltabs) | **GET** /teams/{teamId}/channels/{channelId}/tabs | Get team channel tabs
*TeamsApi* | [**getTeamChannels**](Apis/TeamsApi.md#getteamchannels) | **GET** /teams/{teamId}/channels | Get team channels
*TeamsApi* | [**getTeamPrimaryChannel**](Apis/TeamsApi.md#getteamprimarychannel) | **GET** /teams/{teamId}/channels/primary | Get the primary channel of a team
*TeamsApi* | [**unarchiveTeam**](Apis/TeamsApi.md#unarchiveteam) | **POST** /teams/{teamId}/unarchive | Unarchive a team
*TeamsApi* | [**updateTeam**](Apis/TeamsApi.md#updateteam) | **PATCH** /teams/{teamId} | Update a team
*TemplatesCatalogApi* | [**getCatalogTemplates**](Apis/TemplatesCatalogApi.md#getcatalogtemplates) | **GET** /catalog/templates | Get teams templates
*TemplatesCatalogApi* | [**getMyCatalogTemplates**](Apis/TemplatesCatalogApi.md#getmycatalogtemplates) | **GET** /me/catalog/templates | Get my teams templates
*UsersApi* | [**getUsers**](Apis/UsersApi.md#getusers) | **GET** /users | Retreive users from your Microsoft 365 environment
*WebhooksApi* | [**createHook**](Apis/WebhooksApi.md#createhook) | **POST** /hooks | Create a new webhook
*WebhooksApi* | [**deleteHook**](Apis/WebhooksApi.md#deletehook) | **DELETE** /hooks/{hookId} | Delete a webhook
*WebhooksApi* | [**generateHookSignature**](Apis/WebhooksApi.md#generatehooksignature) | **POST** /hooks/signature | Generate a signature from a secret and a webhook payload
*WebhooksApi* | [**getHooksEvents**](Apis/WebhooksApi.md#gethooksevents) | **GET** /hooks/events | Get webhooks events


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ApiError](./Models/ApiError.md)
 - [ApiErrorError](./Models/ApiErrorError.md)
 - [ApiErrorErrorInnerError](./Models/ApiErrorErrorInnerError.md)
 - [ApprovalTeamMember](./Models/ApprovalTeamMember.md)
 - [ApprovedApprovalResponsePayload](./Models/ApprovedApprovalResponsePayload.md)
 - [ApprovedApprovalResponsePayloadApprover](./Models/ApprovedApprovalResponsePayloadApprover.md)
 - [ApprovedApprovalResponsePayloadUpdates](./Models/ApprovedApprovalResponsePayloadUpdates.md)
 - [AuditTrail](./Models/AuditTrail.md)
 - [AuditTrailRecords](./Models/AuditTrailRecords.md)
 - [AuditTrails](./Models/AuditTrails.md)
 - [CatalogTemplate](./Models/CatalogTemplate.md)
 - [CatalogTemplateClonedTeam](./Models/CatalogTemplateClonedTeam.md)
 - [CatalogTemplateNewTeam](./Models/CatalogTemplateNewTeam.md)
 - [CatalogTemplateTemplateConfiguration](./Models/CatalogTemplateTemplateConfiguration.md)
 - [CatalogTemplateTemplateConfigurationApproval](./Models/CatalogTemplateTemplateConfigurationApproval.md)
 - [CatalogTemplateTemplateConfigurationAudienceTargeting](./Models/CatalogTemplateTemplateConfigurationAudienceTargeting.md)
 - [CatalogTemplateTemplateConfigurationPermanentMembership](./Models/CatalogTemplateTemplateConfigurationPermanentMembership.md)
 - [CatalogTemplates](./Models/CatalogTemplates.md)
 - [Hook](./Models/Hook.md)
 - [HookConfig](./Models/HookConfig.md)
 - [HookEvent](./Models/HookEvent.md)
 - [HookPayload](./Models/HookPayload.md)
 - [HookSignature](./Models/HookSignature.md)
 - [HookSignatureRequest](./Models/HookSignatureRequest.md)
 - [HooksEvents](./Models/HooksEvents.md)
 - [Job](./Models/Job.md)
 - [Label](./Models/Label.md)
 - [Labels](./Models/Labels.md)
 - [MemberUserIdentifier](./Models/MemberUserIdentifier.md)
 - [OwnerUserIdentifier](./Models/OwnerUserIdentifier.md)
 - [PermanentMember](./Models/PermanentMember.md)
 - [RejectedApprovalResponsePayload](./Models/RejectedApprovalResponsePayload.md)
 - [Team](./Models/Team.md)
 - [TeamChannel](./Models/TeamChannel.md)
 - [TeamChannelTab](./Models/TeamChannelTab.md)
 - [TeamChannelTabConfiguration](./Models/TeamChannelTabConfiguration.md)
 - [TeamChannelTabTeamsApp](./Models/TeamChannelTabTeamsApp.md)
 - [TeamDiscoverySettings](./Models/TeamDiscoverySettings.md)
 - [TeamFunSettings](./Models/TeamFunSettings.md)
 - [TeamGuestSettings](./Models/TeamGuestSettings.md)
 - [TeamMemberSettings](./Models/TeamMemberSettings.md)
 - [TeamMembershipPayload](./Models/TeamMembershipPayload.md)
 - [TeamMessagingSettings](./Models/TeamMessagingSettings.md)
 - [TeamProvisioningRequest](./Models/TeamProvisioningRequest.md)
 - [TeamProvisioningRequestTeam](./Models/TeamProvisioningRequestTeam.md)
 - [TeamProvisioningRequestTeamMembership](./Models/TeamProvisioningRequestTeamMembership.md)
 - [TeamProvisioningRequestTemplate](./Models/TeamProvisioningRequestTemplate.md)
 - [User1](./Models/User1.md)
 - [Users](./Models/Users.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP basic authentication

