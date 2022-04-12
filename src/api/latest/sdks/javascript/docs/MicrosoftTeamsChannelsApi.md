# NBoldApi.MicrosoftTeamsChannelsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeamsChannelNamespaceMetadata**](MicrosoftTeamsChannelsApi.md#getTeamsChannelNamespaceMetadata) | **GET** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Get a channel metadata
[**setMicrosoftTeamsChannelNamespaceMetadata**](MicrosoftTeamsChannelsApi.md#setMicrosoftTeamsChannelNamespaceMetadata) | **POST** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Set channel metadata
[**updateMicrosoftTeamsChannelNamespaceMetadata**](MicrosoftTeamsChannelsApi.md#updateMicrosoftTeamsChannelNamespaceMetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Update a channel metadata



## getTeamsChannelNamespaceMetadata

> Object getTeamsChannelNamespaceMetadata(teamId, channelId, namespace)

Get a channel metadata

Get metadata for a channel for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsChannelsApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The channel ID.
let namespace = "namespace_example"; // String | The metadata namespace.
apiInstance.getTeamsChannelNamespaceMetadata(teamId, channelId, namespace, (error, data, response) => {
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
 **namespace** | **String**| The metadata namespace. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setMicrosoftTeamsChannelNamespaceMetadata

> Object setMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body)

Set channel metadata

Set channel metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsChannelsApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The channel ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {key: null}; // Object | Supply a JSON representation of your metadata.
apiInstance.setMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body, (error, data, response) => {
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
 **namespace** | **String**| The metadata namespace. | 
 **body** | **Object**| Supply a JSON representation of your metadata. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMicrosoftTeamsChannelNamespaceMetadata

> Object updateMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body)

Update a channel metadata

Update a channel metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsChannelsApi();
let teamId = "teamId_example"; // String | The team ID.
let channelId = "channelId_example"; // String | The channel ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {key: null}; // Object | Supply a JSON representation of your metadata.
apiInstance.updateMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body, (error, data, response) => {
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
 **namespace** | **String**| The metadata namespace. | 
 **body** | **Object**| Supply a JSON representation of your metadata. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

