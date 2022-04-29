# NBoldApi.MicrosoftTeamsTeamsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeamNamespaceMetadata**](MicrosoftTeamsTeamsApi.md#getTeamNamespaceMetadata) | **GET** /teams/{teamId}/metadata/{namespace} | Get a team metadata
[**setTeamNamespaceMetadata**](MicrosoftTeamsTeamsApi.md#setTeamNamespaceMetadata) | **PUT** /teams/{teamId}/metadata/{namespace} | Set team metadata
[**updateTeamNamespaceMetadata**](MicrosoftTeamsTeamsApi.md#updateTeamNamespaceMetadata) | **PATCH** /teams/{teamId}/metadata/{namespace} | Update a team metadata



## getTeamNamespaceMetadata

> Object getTeamNamespaceMetadata(teamId, namespace)

Get a team metadata

Get metadata for a team for a specific namespace.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsTeamsApi();
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


## setTeamNamespaceMetadata

> Object setTeamNamespaceMetadata(teamId, namespace, body)

Set team metadata

Set team metadata for a specific namespace. N.B Using the PUT method will replace all pre-existing metadata.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsTeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {"crm_opportunity_id":123}; // Object | Supply a JSON representation of your metadata.
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


## updateTeamNamespaceMetadata

> Object updateTeamNamespaceMetadata(teamId, namespace, body)

Update a team metadata

Update a team metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.MicrosoftTeamsTeamsApi();
let teamId = "teamId_example"; // String | The team ID.
let namespace = "namespace_example"; // String | The metadata namespace.
let body = {"crm_opportunity_id":123}; // Object | Supply a JSON representation of your metadata.
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

