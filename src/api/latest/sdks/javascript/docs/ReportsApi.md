# NBoldApi.ReportsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReportUrl**](ReportsApi.md#getReportUrl) | **GET** /reports/{resource_type}/{resource_id} | Get report secure URL
[**getReports**](ReportsApi.md#getReports) | **GET** /reports | Get reports
[**getReportsCategories**](ReportsApi.md#getReportsCategories) | **GET** /reports/categories | Get reports categories



## getReportUrl

> ReportUrl getReportUrl(resourceType, resourceId)

Get report secure URL

Get report secure URL

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.ReportsApi();
let resourceType = "resourceType_example"; // String | The resource type (dashboard / question).
let resourceId = "resourceId_example"; // String | The resource id.
apiInstance.getReportUrl(resourceType, resourceId, (error, data, response) => {
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
 **resourceType** | **String**| The resource type (dashboard / question). | 
 **resourceId** | **String**| The resource id. | 

### Return type

[**ReportUrl**](ReportUrl.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReports

> [Report] getReports()

Get reports

Get reports

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.ReportsApi();
apiInstance.getReports((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Report]**](Report.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportsCategories

> [ReportsCategory] getReportsCategories()

Get reports categories

Get reports categories

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.ReportsApi();
apiInstance.getReportsCategories((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ReportsCategory]**](ReportsCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

