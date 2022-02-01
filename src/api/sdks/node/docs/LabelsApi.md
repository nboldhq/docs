# SalesTimApi.LabelsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMyLabels**](LabelsApi.md#getMyLabels) | **GET** /me/labels | Get my sensitivity labels



## getMyLabels

> Labels getMyLabels()

Get my sensitivity labels

Get my Microsoft 365 sensitivity labels. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import SalesTimApi from 'sales_tim_api';
let defaultClient = SalesTimApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SalesTimApi.LabelsApi();
apiInstance.getMyLabels((error, data, response) => {
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

[**Labels**](Labels.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

