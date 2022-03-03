# n_bold_api

NBoldApi - JavaScript client for n_bold_api
Visit our [API documentation](https://docs.nbold.co/api/) for more information.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 2.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://docs.nbold.co/api](https://docs.nbold.co/api)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install n_bold_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your n_bold_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NBoldApi = require('n_bold_api');

var defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new NBoldApi.ApprovalsApi()
var approvalRequestId = "approvalRequestId_example"; // {String} The approval request ID.
var opts = {
  'approvedApprovalResponsePayload': new NBoldApi.ApprovedApprovalResponsePayload() // {ApprovedApprovalResponsePayload} An ApprovedApprovalResponsePayload object.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.approveTeamCreation(approvalRequestId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/api/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NBoldApi.ApprovalsApi* | [**approveTeamCreation**](docs/ApprovalsApi.md#approveTeamCreation) | **POST** /approvals/{approvalRequestId}/approve | Approve a team creation request
*NBoldApi.ApprovalsApi* | [**rejectTeamCreation**](docs/ApprovalsApi.md#rejectTeamCreation) | **POST** /approvals/{approvalRequestId}/reject | Reject a team creation request
*NBoldApi.AuditTrailsApi* | [**getAuditTrailRecords**](docs/AuditTrailsApi.md#getAuditTrailRecords) | **GET** /audittrails/{code}/records | Get all the records from an audit trail
*NBoldApi.AuditTrailsApi* | [**getAuditTrails**](docs/AuditTrailsApi.md#getAuditTrails) | **GET** /audittrails | Get audit trails
*NBoldApi.JobsApi* | [**getJob**](docs/JobsApi.md#getJob) | **GET** /jobs/{jobId} | Get information about a job
*NBoldApi.SensitivityLabelsApi* | [**getMyLabels**](docs/SensitivityLabelsApi.md#getMyLabels) | **GET** /me/labels | Get my sensitivity labels
*NBoldApi.TeamsApi* | [**addTeamMember**](docs/TeamsApi.md#addTeamMember) | **POST** /teams/{teamId}/members | Add a team member
*NBoldApi.TeamsApi* | [**archiveTeam**](docs/TeamsApi.md#archiveTeam) | **POST** /teams/{teamId}/archive | Archive a team
*NBoldApi.TeamsApi* | [**createTeamChannel**](docs/TeamsApi.md#createTeamChannel) | **POST** /teams/{teamId}/channels | Create a new team channel
*NBoldApi.TeamsApi* | [**createTeamChannelTab**](docs/TeamsApi.md#createTeamChannelTab) | **POST** /teams/{teamId}/channels/{channelId}/tabs | Create a new team channel tab
*NBoldApi.TeamsApi* | [**createTeamProvisioningJob**](docs/TeamsApi.md#createTeamProvisioningJob) | **POST** /teams/provisioning | Create a new team based on a template
*NBoldApi.TeamsApi* | [**deleteTeam**](docs/TeamsApi.md#deleteTeam) | **DELETE** /teams/{teamId} | Delete a team
*NBoldApi.TeamsApi* | [**getTeam**](docs/TeamsApi.md#getTeam) | **GET** /teams/{teamId} | Get a team
*NBoldApi.TeamsApi* | [**getTeamChannelTabs**](docs/TeamsApi.md#getTeamChannelTabs) | **GET** /teams/{teamId}/channels/{channelId}/tabs | Get team channel tabs
*NBoldApi.TeamsApi* | [**getTeamChannels**](docs/TeamsApi.md#getTeamChannels) | **GET** /teams/{teamId}/channels | Get team channels
*NBoldApi.TeamsApi* | [**getTeamPrimaryChannel**](docs/TeamsApi.md#getTeamPrimaryChannel) | **GET** /teams/{teamId}/channels/primary | Get the primary channel of a team
*NBoldApi.TeamsApi* | [**unarchiveTeam**](docs/TeamsApi.md#unarchiveTeam) | **POST** /teams/{teamId}/unarchive | Unarchive a team
*NBoldApi.TeamsApi* | [**updateTeam**](docs/TeamsApi.md#updateTeam) | **PATCH** /teams/{teamId} | Update a team
*NBoldApi.TemplatesCatalogApi* | [**getCatalogTemplates**](docs/TemplatesCatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get teams templates
*NBoldApi.TemplatesCatalogApi* | [**getMyCatalogTemplates**](docs/TemplatesCatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates
*NBoldApi.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /users | Retreive users from your Microsoft 365 environment
*NBoldApi.WebhooksApi* | [**createHook**](docs/WebhooksApi.md#createHook) | **POST** /hooks | Create a new webhook
*NBoldApi.WebhooksApi* | [**deleteHook**](docs/WebhooksApi.md#deleteHook) | **DELETE** /hooks/{hookId} | Delete a webhook
*NBoldApi.WebhooksApi* | [**generateHookSignature**](docs/WebhooksApi.md#generateHookSignature) | **POST** /hooks/signature | Generate a signature from a secret and a webhook payload
*NBoldApi.WebhooksApi* | [**getHooksEvents**](docs/WebhooksApi.md#getHooksEvents) | **GET** /hooks/events | Get webhooks events


## Documentation for Models

 - [NBoldApi.ApiError](docs/ApiError.md)
 - [NBoldApi.ApiErrorError](docs/ApiErrorError.md)
 - [NBoldApi.ApiErrorErrorInnerError](docs/ApiErrorErrorInnerError.md)
 - [NBoldApi.ApprovalTeamMember](docs/ApprovalTeamMember.md)
 - [NBoldApi.ApprovedApprovalResponsePayload](docs/ApprovedApprovalResponsePayload.md)
 - [NBoldApi.ApprovedApprovalResponsePayloadApprover](docs/ApprovedApprovalResponsePayloadApprover.md)
 - [NBoldApi.ApprovedApprovalResponsePayloadUpdates](docs/ApprovedApprovalResponsePayloadUpdates.md)
 - [NBoldApi.AuditTrail](docs/AuditTrail.md)
 - [NBoldApi.AuditTrailRecords](docs/AuditTrailRecords.md)
 - [NBoldApi.AuditTrails](docs/AuditTrails.md)
 - [NBoldApi.CatalogTemplate](docs/CatalogTemplate.md)
 - [NBoldApi.CatalogTemplateClonedTeam](docs/CatalogTemplateClonedTeam.md)
 - [NBoldApi.CatalogTemplateNewTeam](docs/CatalogTemplateNewTeam.md)
 - [NBoldApi.CatalogTemplateTemplateConfiguration](docs/CatalogTemplateTemplateConfiguration.md)
 - [NBoldApi.CatalogTemplateTemplateConfigurationApproval](docs/CatalogTemplateTemplateConfigurationApproval.md)
 - [NBoldApi.CatalogTemplateTemplateConfigurationAudienceTargeting](docs/CatalogTemplateTemplateConfigurationAudienceTargeting.md)
 - [NBoldApi.CatalogTemplateTemplateConfigurationPermanentMembership](docs/CatalogTemplateTemplateConfigurationPermanentMembership.md)
 - [NBoldApi.CatalogTemplates](docs/CatalogTemplates.md)
 - [NBoldApi.Hook](docs/Hook.md)
 - [NBoldApi.HookConfig](docs/HookConfig.md)
 - [NBoldApi.HookEvent](docs/HookEvent.md)
 - [NBoldApi.HookPayload](docs/HookPayload.md)
 - [NBoldApi.HookSignature](docs/HookSignature.md)
 - [NBoldApi.HookSignatureRequest](docs/HookSignatureRequest.md)
 - [NBoldApi.HooksEvents](docs/HooksEvents.md)
 - [NBoldApi.Job](docs/Job.md)
 - [NBoldApi.Label](docs/Label.md)
 - [NBoldApi.Labels](docs/Labels.md)
 - [NBoldApi.MemberUserIdentifier](docs/MemberUserIdentifier.md)
 - [NBoldApi.OwnerUserIdentifier](docs/OwnerUserIdentifier.md)
 - [NBoldApi.PermanentMember](docs/PermanentMember.md)
 - [NBoldApi.RejectedApprovalResponsePayload](docs/RejectedApprovalResponsePayload.md)
 - [NBoldApi.Team](docs/Team.md)
 - [NBoldApi.TeamChannel](docs/TeamChannel.md)
 - [NBoldApi.TeamChannelTab](docs/TeamChannelTab.md)
 - [NBoldApi.TeamChannelTabConfiguration](docs/TeamChannelTabConfiguration.md)
 - [NBoldApi.TeamChannelTabTeamsApp](docs/TeamChannelTabTeamsApp.md)
 - [NBoldApi.TeamDiscoverySettings](docs/TeamDiscoverySettings.md)
 - [NBoldApi.TeamFunSettings](docs/TeamFunSettings.md)
 - [NBoldApi.TeamGuestSettings](docs/TeamGuestSettings.md)
 - [NBoldApi.TeamMemberSettings](docs/TeamMemberSettings.md)
 - [NBoldApi.TeamMembershipPayload](docs/TeamMembershipPayload.md)
 - [NBoldApi.TeamMessagingSettings](docs/TeamMessagingSettings.md)
 - [NBoldApi.TeamProvisioningRequest](docs/TeamProvisioningRequest.md)
 - [NBoldApi.TeamProvisioningRequestTeam](docs/TeamProvisioningRequestTeam.md)
 - [NBoldApi.TeamProvisioningRequestTeamMembership](docs/TeamProvisioningRequestTeamMembership.md)
 - [NBoldApi.TeamProvisioningRequestTemplate](docs/TeamProvisioningRequestTemplate.md)
 - [NBoldApi.User1](docs/User1.md)
 - [NBoldApi.Users](docs/Users.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)
