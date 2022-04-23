# NBoldApi.MetadataApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMicrosoftTeamsMessageNamespaceMetadata**](MetadataApi.md#getMicrosoftTeamsMessageNamespaceMetadata) | **GET** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Get a message metadata
[**getTeamNamespaceMetadata**](MetadataApi.md#getTeamNamespaceMetadata) | **GET** /teams/{teamId}/metadata/{namespace} | Get a team metadata
[**getTeamsChannelNamespaceMetadata**](MetadataApi.md#getTeamsChannelNamespaceMetadata) | **GET** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Get a channel metadata
[**queryMetadata**](MetadataApi.md#queryMetadata) | **POST** /metadata/{namespace}/query | Query metadata
[**setMicrosoftTeamsChannelNamespaceMetadata**](MetadataApi.md#setMicrosoftTeamsChannelNamespaceMetadata) | **POST** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Set channel metadata
[**setMicrosoftTeamsMessageNamespaceMetadata**](MetadataApi.md#setMicrosoftTeamsMessageNamespaceMetadata) | **POST** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Set message metadata
[**setTeamNamespaceMetadata**](MetadataApi.md#setTeamNamespaceMetadata) | **PUT** /teams/{teamId}/metadata/{namespace} | Set team metadata
[**updateMicrosoftTeamsChannelNamespaceMetadata**](MetadataApi.md#updateMicrosoftTeamsChannelNamespaceMetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Update a channel metadata
[**updateMicrosoftTeamsMessageNamespaceMetadata**](MetadataApi.md#updateMicrosoftTeamsMessageNamespaceMetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace} | Update a message metadata
[**updateTeamNamespaceMetadata**](MetadataApi.md#updateTeamNamespaceMetadata) | **PATCH** /teams/{teamId}/metadata/{namespace} | Update a team metadata



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

let apiInstance = new NBoldApi.MetadataApi();
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


## getTeamNamespaceMetadata

> Object getTeamNamespaceMetadata(teamId, namespace)

Get a team metadata

Get metadata for a team for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MetadataApi();
let teamId = "teamId_example"; // String | The team ID.
let namespace = "namespace_example"; // String | The metadata namespace.
apiInstance.getTeamNamespaceMetadata(teamId, namespace, (error, data, response) => {
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
 **namespace** | **String**| The metadata namespace. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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

let apiInstance = new NBoldApi.MetadataApi();
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


## queryMetadata

> [MetadataQueryResult] queryMetadata(namespace, body)

Query metadata

Query metadata for a specific namespace. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MetadataApi();
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {key: null}; // Object | Supply a JSON representation of your query.
apiInstance.queryMetadata(namespace, body, (error, data, response) => {
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
 **namespace** | **String**| The metadata namespace. | 
 **body** | **Object**| Supply a JSON representation of your query. | 

### Return type

[**[MetadataQueryResult]**](MetadataQueryResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
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

let apiInstance = new NBoldApi.MetadataApi();
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

let apiInstance = new NBoldApi.MetadataApi();
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


## setTeamNamespaceMetadata

> Object setTeamNamespaceMetadata(teamId, namespace, body)

Set team metadata

Set team metadata for a specific namespace. N.B Using the PUT method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MetadataApi();
let teamId = "teamId_example"; // String | The team ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {key: null}; // Object | Supply a JSON representation of your metadata.
apiInstance.setTeamNamespaceMetadata(teamId, namespace, body, (error, data, response) => {
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

let apiInstance = new NBoldApi.MetadataApi();
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

let apiInstance = new NBoldApi.MetadataApi();
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


## updateTeamNamespaceMetadata

> Object updateTeamNamespaceMetadata(teamId, namespace, body)

Update a team metadata

Update a team metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MetadataApi();
let teamId = "teamId_example"; // String | The team ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {key: null}; // Object | Supply a JSON representation of your metadata.
apiInstance.updateTeamNamespaceMetadata(teamId, namespace, body, (error, data, response) => {
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
 **namespace** | **String**| The metadata namespace. | 
 **body** | **Object**| Supply a JSON representation of your metadata. | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

