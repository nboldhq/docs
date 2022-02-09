# NBoldApi.ApprovalsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveTeamCreation**](ApprovalsApi.md#approveTeamCreation) | **POST** /approvals/{approvalRequestId}/approve | Approve a team creation request
[**rejectTeamCreation**](ApprovalsApi.md#rejectTeamCreation) | **POST** /approvals/{approvalRequestId}/reject | Reject a team creation request



## approveTeamCreation

> approveTeamCreation(approvalRequestId, opts)

Approve a team creation request

Approve a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.ApprovalsApi();
let approvalRequestId = "approvalRequestId_example"; // String | The approval request ID.
let opts = {
  'approvedApprovalResponsePayload': new NBoldApi.ApprovedApprovalResponsePayload() // ApprovedApprovalResponsePayload | An ApprovedApprovalResponsePayload object.
};
apiInstance.approveTeamCreation(approvalRequestId, opts, (error, data, response) => {
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
 **approvalRequestId** | **String**| The approval request ID. | 
 **approvedApprovalResponsePayload** | [**ApprovedApprovalResponsePayload**](ApprovedApprovalResponsePayload.md)| An ApprovedApprovalResponsePayload object. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rejectTeamCreation

> rejectTeamCreation(approvalRequestId, opts)

Reject a team creation request

Reject a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.ApprovalsApi();
let approvalRequestId = "approvalRequestId_example"; // String | The approval request ID.
let opts = {
  'rejectedApprovalResponsePayload': new NBoldApi.RejectedApprovalResponsePayload() // RejectedApprovalResponsePayload | An RejectedApprovalResponsePayload object.
};
apiInstance.rejectTeamCreation(approvalRequestId, opts, (error, data, response) => {
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
 **approvalRequestId** | **String**| The approval request ID. | 
 **rejectedApprovalResponsePayload** | [**RejectedApprovalResponsePayload**](RejectedApprovalResponsePayload.md)| An RejectedApprovalResponsePayload object. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

