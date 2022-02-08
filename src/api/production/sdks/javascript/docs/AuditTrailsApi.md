# NBoldApi.AuditTrailsApi

All URIs are relative to *https://api.nbold.co/production*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditTrailRecords**](AuditTrailsApi.md#getAuditTrailRecords) | **GET** /audittrails/{code}/records | Get all the records from an audit trail
[**getAuditTrails**](AuditTrailsApi.md#getAuditTrails) | **GET** /audittrails | Get audit trails



## getAuditTrailRecords

> AuditTrailRecords getAuditTrailRecords(code)

Get all the records from an audit trail

Get all the records from an audit trail. TIER 2 | ROLES - AUTHORIZED_APP, COMPLIANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.AuditTrailsApi();
let code = "code_example"; // String | The audit trail code.
apiInstance.getAuditTrailRecords(code, (error, data, response) => {
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
 **code** | **String**| The audit trail code. | 

### Return type

[**AuditTrailRecords**](AuditTrailRecords.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuditTrails

> AuditTrails getAuditTrails()

Get audit trails

Get all the audit trails accessible in your organization. TIER 3 | ROLES - AUTHORIZED_APP, COMPLIANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.AuditTrailsApi();
apiInstance.getAuditTrails((error, data, response) => {
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

[**AuditTrails**](AuditTrails.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

