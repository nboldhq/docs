# NBoldApi.MetadataApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryMetadata**](MetadataApi.md#queryMetadata) | **POST** /metadata/{namespace}/query | Query metadata



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
let body = {"crm_opportunity_id":123}; // Object | Supply a JSON representation of your query.
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

