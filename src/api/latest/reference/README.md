# Documentation for nBold API

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
*MetadataApi* | [**getMicrosoftTeamsMessageNamespaceMetadata**](Apis/MetadataApi.md#getmicrosoftteamsmessagenamespacemetadata) | **GET** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Get a message metadata
*MetadataApi* | [**getTeamNamespaceMetadata**](Apis/MetadataApi.md#getteamnamespacemetadata) | **GET** /teams/{teamId}/metadata/{namespace} | Get a team metadata
*MetadataApi* | [**getTeamsChannelNamespaceMetadata**](Apis/MetadataApi.md#getteamschannelnamespacemetadata) | **GET** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Get a channel metadata
*MetadataApi* | [**queryMetadata**](Apis/MetadataApi.md#querymetadata) | **POST** /metadata/{namespace}/query | Query metadata
*MetadataApi* | [**setMicrosoftTeamsChannelNamespaceMetadata**](Apis/MetadataApi.md#setmicrosoftteamschannelnamespacemetadata) | **POST** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Set channel metadata
*MetadataApi* | [**setMicrosoftTeamsMessageNamespaceMetadata**](Apis/MetadataApi.md#setmicrosoftteamsmessagenamespacemetadata) | **POST** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Set message metadata
*MetadataApi* | [**setTeamNamespaceMetadata**](Apis/MetadataApi.md#setteamnamespacemetadata) | **PUT** /teams/{teamId}/metadata/{namespace} | Set team metadata
*MetadataApi* | [**updateMicrosoftTeamsChannelNamespaceMetadata**](Apis/MetadataApi.md#updatemicrosoftteamschannelnamespacemetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Update a channel metadata
*MetadataApi* | [**updateMicrosoftTeamsMessageNamespaceMetadata**](Apis/MetadataApi.md#updatemicrosoftteamsmessagenamespacemetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Update a message metadata
*MetadataApi* | [**updateTeamNamespaceMetadata**](Apis/MetadataApi.md#updateteamnamespacemetadata) | **PATCH** /teams/{teamId}/metadata/{namespace} | Update a team metadata
*MicrosoftTeamsChannelsApi* | [**getTeamsChannelNamespaceMetadata**](Apis/MicrosoftTeamsChannelsApi.md#getteamschannelnamespacemetadata) | **GET** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Get a channel metadata
*MicrosoftTeamsChannelsApi* | [**setMicrosoftTeamsChannelNamespaceMetadata**](Apis/MicrosoftTeamsChannelsApi.md#setmicrosoftteamschannelnamespacemetadata) | **POST** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Set channel metadata
*MicrosoftTeamsChannelsApi* | [**updateMicrosoftTeamsChannelNamespaceMetadata**](Apis/MicrosoftTeamsChannelsApi.md#updatemicrosoftteamschannelnamespacemetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Update a channel metadata
*MicrosoftTeamsMessagesApi* | [**getMicrosoftTeamsMessageNamespaceMetadata**](Apis/MicrosoftTeamsMessagesApi.md#getmicrosoftteamsmessagenamespacemetadata) | **GET** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Get a message metadata
*MicrosoftTeamsMessagesApi* | [**setMicrosoftTeamsMessageNamespaceMetadata**](Apis/MicrosoftTeamsMessagesApi.md#setmicrosoftteamsmessagenamespacemetadata) | **POST** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Set message metadata
*MicrosoftTeamsMessagesApi* | [**updateMicrosoftTeamsMessageNamespaceMetadata**](Apis/MicrosoftTeamsMessagesApi.md#updatemicrosoftteamsmessagenamespacemetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Update a message metadata
*MicrosoftTeamsTeamsApi* | [**getTeamNamespaceMetadata**](Apis/MicrosoftTeamsTeamsApi.md#getteamnamespacemetadata) | **GET** /teams/{teamId}/metadata/{namespace} | Get a team metadata
*MicrosoftTeamsTeamsApi* | [**setTeamNamespaceMetadata**](Apis/MicrosoftTeamsTeamsApi.md#setteamnamespacemetadata) | **PUT** /teams/{teamId}/metadata/{namespace} | Set team metadata
*MicrosoftTeamsTeamsApi* | [**updateTeamNamespaceMetadata**](Apis/MicrosoftTeamsTeamsApi.md#updateteamnamespacemetadata) | **PATCH** /teams/{teamId}/metadata/{namespace} | Update a team metadata
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
 - [ApiError_error](./Models/ApiError_error.md)
 - [ApiError_error_innerError](./Models/ApiError_error_innerError.md)
 - [ApprovalTeamMember](./Models/ApprovalTeamMember.md)
 - [ApprovedApprovalResponsePayload](./Models/ApprovedApprovalResponsePayload.md)
 - [ApprovedApprovalResponsePayload_approver](./Models/ApprovedApprovalResponsePayload_approver.md)
 - [ApprovedApprovalResponsePayload_updates](./Models/ApprovedApprovalResponsePayload_updates.md)
 - [AuditTrail](./Models/AuditTrail.md)
 - [AuditTrailRecords](./Models/AuditTrailRecords.md)
 - [AuditTrails](./Models/AuditTrails.md)
 - [CatalogTemplate](./Models/CatalogTemplate.md)
 - [CatalogTemplate_clonedTeam](./Models/CatalogTemplate_clonedTeam.md)
 - [CatalogTemplate_newTeam](./Models/CatalogTemplate_newTeam.md)
 - [CatalogTemplate_templateConfiguration](./Models/CatalogTemplate_templateConfiguration.md)
 - [CatalogTemplate_templateConfiguration_approval](./Models/CatalogTemplate_templateConfiguration_approval.md)
 - [CatalogTemplate_templateConfiguration_audienceTargeting](./Models/CatalogTemplate_templateConfiguration_audienceTargeting.md)
 - [CatalogTemplate_templateConfiguration_permanentMembership](./Models/CatalogTemplate_templateConfiguration_permanentMembership.md)
 - [CatalogTemplates](./Models/CatalogTemplates.md)
 - [Hook](./Models/Hook.md)
 - [HookEvent](./Models/HookEvent.md)
 - [HookPayload](./Models/HookPayload.md)
 - [HookSignature](./Models/HookSignature.md)
 - [HookSignatureRequest](./Models/HookSignatureRequest.md)
 - [Hook_config](./Models/Hook_config.md)
 - [HooksEvents](./Models/HooksEvents.md)
 - [Job](./Models/Job.md)
 - [Label](./Models/Label.md)
 - [Labels](./Models/Labels.md)
 - [MemberUserIdentifier](./Models/MemberUserIdentifier.md)
 - [MetadataQueryResult](./Models/MetadataQueryResult.md)
 - [OwnerUserIdentifier](./Models/OwnerUserIdentifier.md)
 - [PermanentMember](./Models/PermanentMember.md)
 - [RejectedApprovalResponsePayload](./Models/RejectedApprovalResponsePayload.md)
 - [Team](./Models/Team.md)
 - [TeamChannel](./Models/TeamChannel.md)
 - [TeamChannelTab](./Models/TeamChannelTab.md)
 - [TeamChannelTab_configuration](./Models/TeamChannelTab_configuration.md)
 - [TeamChannelTab_teamsApp](./Models/TeamChannelTab_teamsApp.md)
 - [TeamMembershipPayload](./Models/TeamMembershipPayload.md)
 - [TeamProvisioningRequest](./Models/TeamProvisioningRequest.md)
 - [TeamProvisioningRequest_team](./Models/TeamProvisioningRequest_team.md)
 - [TeamProvisioningRequest_team_membership](./Models/TeamProvisioningRequest_team_membership.md)
 - [TeamProvisioningRequest_template](./Models/TeamProvisioningRequest_template.md)
 - [Team_discoverySettings](./Models/Team_discoverySettings.md)
 - [Team_funSettings](./Models/Team_funSettings.md)
 - [Team_guestSettings](./Models/Team_guestSettings.md)
 - [Team_memberSettings](./Models/Team_memberSettings.md)
 - [Team_messagingSettings](./Models/Team_messagingSettings.md)
 - [User_1](./Models/User_1.md)
 - [Users](./Models/Users.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP basic authentication

