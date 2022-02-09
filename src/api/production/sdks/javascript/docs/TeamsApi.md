# NBoldApi.TeamsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTeamMember**](TeamsApi.md#addTeamMember) | **POST** /teams/{teamId}/members | Add a team member
[**archiveTeam**](TeamsApi.md#archiveTeam) | **POST** /teams/{teamId}/archive | Archive a team
[**createTeamChannel**](TeamsApi.md#createTeamChannel) | **POST** /teams/{teamId}/channels | Create a new team channel
[**createTeamChannelTab**](TeamsApi.md#createTeamChannelTab) | **POST** /teams/{teamId}/channels/{channelId}/tabs | Create a new team channel tab
[**createTeamProvisioningJob**](TeamsApi.md#createTeamProvisioningJob) | **POST** /teams/provisioning | Create a new team based on a template
[**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /teams/{teamId} | Delete a team
[**getTeam**](TeamsApi.md#getTeam) | **GET** /teams/{teamId} | Get a team
[**getTeamChannelTabs**](TeamsApi.md#getTeamChannelTabs) | **GET** /teams/{teamId}/channels/{channelId}/tabs | Get team channel tabs
[**getTeamChannels**](TeamsApi.md#getTeamChannels) | **GET** /teams/{teamId}/channels | Get team channels
[**getTeamPrimaryChannel**](TeamsApi.md#getTeamPrimaryChannel) | **GET** /teams/{teamId}/channels/primary | Get the primary channel of a team
[**unarchiveTeam**](TeamsApi.md#unarchiveTeam) | **POST** /teams/{teamId}/unarchive | Unarchive a team
[**updateTeam**](TeamsApi.md#updateTeam) | **PATCH** /teams/{teamId} | Update a team



## addTeamMember

> ApiError addTeamMember(teamId, teamMembershipPayload)

Add a team member

Add a team member. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let teamMembershipPayload = new NBoldApi.TeamMembershipPayload(); // TeamMembershipPayload | TeamMembershipPayload.
apiInstance.addTeamMember(teamId, teamMembershipPayload, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 
 **teamMembershipPayload** | [**TeamMembershipPayload**](TeamMembershipPayload.md)| TeamMembershipPayload. | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## archiveTeam

> archiveTeam(teamId, opts)

Archive a team

Archive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let opts = {
  'body': {key: null} // Object | In the request, you may optionally include the shouldSetSpoSiteReadOnlyForMembers parameter in a JSON body. This optional parameter defines whether to set permissions for team members to read-only on the SharePoint Online site associated with the team. Setting it to false or omitting the body altogether will result in this step being skipped.
};
apiInstance.archiveTeam(teamId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 
 **body** | **Object**| In the request, you may optionally include the shouldSetSpoSiteReadOnlyForMembers parameter in a JSON body. This optional parameter defines whether to set permissions for team members to read-only on the SharePoint Online site associated with the team. Setting it to false or omitting the body altogether will result in this step being skipped. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTeamChannel

> TeamChannel createTeamChannel(teamId, body)

Create a new team channel

Create a new team channel. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let body = {key: null}; // Object | A TeamChannelPayload object describing the channel to create.
apiInstance.createTeamChannel(teamId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 
 **body** | **Object**| A TeamChannelPayload object describing the channel to create. | 

### Return type

[**TeamChannel**](TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTeamChannelTab

> TeamChannelTab createTeamChannelTab(teamId, channelId, body)

Create a new team channel tab

Create a new team channel tab. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The team channel ID.
let body = {key: null}; // Object | A TeamChannelTabPayload object describing the tab to create.
apiInstance.createTeamChannelTab(teamId, channelId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 
 **channelId** | **String**| The team channel ID. | 
 **body** | **Object**| A TeamChannelTabPayload object describing the tab to create. | 

### Return type

[**TeamChannelTab**](TeamChannelTab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTeamProvisioningJob

> Job createTeamProvisioningJob(teamProvisioningRequest)

Create a new team based on a template

Create a new team provisioning job. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamProvisioningRequest = new NBoldApi.TeamProvisioningRequest(); // TeamProvisioningRequest | A TeamProvisioningRequest object describing the job to execute.
apiInstance.createTeamProvisioningJob(teamProvisioningRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamProvisioningRequest** | [**TeamProvisioningRequest**](TeamProvisioningRequest.md)| A TeamProvisioningRequest object describing the job to execute. | 

### Return type

[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeam

> deleteTeam(teamId)

Delete a team

Delete a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
apiInstance.deleteTeam(teamId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeam

> Team getTeam(teamId)

Get a team

Get detailed information about a team. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
apiInstance.getTeam(teamId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 

### Return type

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamChannelTabs

> [TeamChannelTab] getTeamChannelTabs(teamId, channelId)

Get team channel tabs

Get team channel tabs. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The team channel ID.
apiInstance.getTeamChannelTabs(teamId, channelId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 
 **channelId** | **String**| The team channel ID. | 

### Return type

[**[TeamChannelTab]**](TeamChannelTab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamChannels

> [TeamChannel] getTeamChannels(teamId)

Get team channels

Get team channels. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
apiInstance.getTeamChannels(teamId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 

### Return type

[**[TeamChannel]**](TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamPrimaryChannel

> TeamChannel getTeamPrimaryChannel(teamId)

Get the primary channel of a team

Get the primary channel of a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
apiInstance.getTeamPrimaryChannel(teamId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 

### Return type

[**TeamChannel**](TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unarchiveTeam

> unarchiveTeam(teamId)

Unarchive a team

Unarchive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
apiInstance.unarchiveTeam(teamId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeam

> updateTeam(teamId, body)

Update a team

Update a team. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let body = {key: null}; // Object | Supply a JSON representation of team object.
apiInstance.updateTeam(teamId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | 
 **body** | **Object**| Supply a JSON representation of team object. | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

