# ApprovalsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveTeamCreation**](ApprovalsApi.md#approveTeamCreation) | **POST** /approvals/{approvalRequestId}/approve | Approve a team creation request
[**rejectTeamCreation**](ApprovalsApi.md#rejectTeamCreation) | **POST** /approvals/{approvalRequestId}/reject | Reject a team creation request


<a name="approveTeamCreation"></a>
# **approveTeamCreation**
> approveTeamCreation(approvalRequestId, ApprovedApprovalResponsePayload)

Approve a team creation request

    Approve a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalRequestId** | **String**| The approval request ID. | [default to null]
 **ApprovedApprovalResponsePayload** | [**ApprovedApprovalResponsePayload**](../Models/ApprovedApprovalResponsePayload.md)| An ApprovedApprovalResponsePayload object. | [optional]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="rejectTeamCreation"></a>
# **rejectTeamCreation**
> rejectTeamCreation(approvalRequestId, RejectedApprovalResponsePayload)

Reject a team creation request

    Reject a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalRequestId** | **String**| The approval request ID. | [default to null]
 **RejectedApprovalResponsePayload** | [**RejectedApprovalResponsePayload**](../Models/RejectedApprovalResponsePayload.md)| An RejectedApprovalResponsePayload object. | [optional]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

