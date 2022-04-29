# NBoldApi.MicrosoftTeamsMessagesApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMicrosoftTeamsMessageNamespaceMetadata**](MicrosoftTeamsMessagesApi.md#getMicrosoftTeamsMessageNamespaceMetadata) | **GET** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Get a message metadata
[**setMicrosoftTeamsMessageNamespaceMetadata**](MicrosoftTeamsMessagesApi.md#setMicrosoftTeamsMessageNamespaceMetadata) | **POST** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Set message metadata
[**updateMicrosoftTeamsMessageNamespaceMetadata**](MicrosoftTeamsMessagesApi.md#updateMicrosoftTeamsMessageNamespaceMetadata) | **PATCH** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Update a message metadata



## getMicrosoftTeamsMessageNamespaceMetadata

> Object getMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace)

Get a message metadata

Get metadata for a message for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsMessagesApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The channel ID.
let messageId = "messageId_example"; // String | The message ID.
let namespace = "namespace_example"; // String | The metadata namespace.
apiInstance.getMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, (error, data, response) => {
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
 **channelId** | **String**| The channel ID. | 
 **messageId** | **String**| The message ID. | 
 **namespace** | **String**| The metadata namespace. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setMicrosoftTeamsMessageNamespaceMetadata

> Object setMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, body)

Set message metadata

Set message metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsMessagesApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The channel ID.
let messageId = "messageId_example"; // String | The message ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {key: null}; // Object | Supply a JSON representation of your metadata.
apiInstance.setMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, body, (error, data, response) => {
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
 **channelId** | **String**| The channel ID. | 
 **messageId** | **String**| The message ID. | 
 **namespace** | **String**| The metadata namespace. | 
 **body** | **Object**| Supply a JSON representation of your metadata. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMicrosoftTeamsMessageNamespaceMetadata

> Object updateMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, body)

Update a message metadata

Update a message metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsMessagesApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The channel ID.
let messageId = "messageId_example"; // String | The message ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {key: null}; // Object | Supply a JSON representation of your metadata.
apiInstance.updateMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, body, (error, data, response) => {
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
 **channelId** | **String**| The channel ID. | 
 **messageId** | **String**| The message ID. | 
 **namespace** | **String**| The metadata namespace. | 
 **body** | **Object**| Supply a JSON representation of your metadata. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

