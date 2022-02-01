# PSOpenAPITools.PSOpenAPITools/Api.ApprovalsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-TeamCreation**](ApprovalsApi.md#Approve-TeamCreation) | **POST** /approvals/{approvalRequestId}/approve | Approve a team creation request
[**Deny-TeamCreation**](ApprovalsApi.md#Deny-TeamCreation) | **POST** /approvals/{approvalRequestId}/reject | Reject a team creation request


<a name="Approve-TeamCreation"></a>
# **Approve-TeamCreation**
> void Approve-TeamCreation<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ApprovalRequestId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ApprovedApprovalResponsePayload] <PSCustomObject><br>

Approve a team creation request

Approve a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ApprovalRequestId = "ApprovalRequestId_example" # String | The approval request ID.
$ApprovedApprovalResponsePayload = (Initialize-ApprovedApprovalResponsePayload -Message "Message_example" -Approver (Initialize-ApprovedApprovalResponsePayload_approver -Id "Id_example") -Updates (Initialize-ApprovedApprovalResponsePayload_updates -Name "Name_example" -Description "Description_example" -WelcomeMessage "WelcomeMessage_example")) # ApprovedApprovalResponsePayload | An ApprovedApprovalResponsePayload object. (optional)

# Approve a team creation request
try {
     $Result = Approve-TeamCreation -ApprovalRequestId $ApprovalRequestId -ApprovedApprovalResponsePayload $ApprovedApprovalResponsePayload
} catch {
    Write-Host ("Exception occured when calling Approve-TeamCreation: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ApprovalRequestId** | **String**| The approval request ID. | 
 **ApprovedApprovalResponsePayload** | [**ApprovedApprovalResponsePayload**](ApprovedApprovalResponsePayload.md)| An ApprovedApprovalResponsePayload object. | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Deny-TeamCreation"></a>
# **Deny-TeamCreation**
> void Deny-TeamCreation<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ApprovalRequestId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-RejectedApprovalResponsePayload] <PSCustomObject><br>

Reject a team creation request

Reject a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ApprovalRequestId = "ApprovalRequestId_example" # String | The approval request ID.
$RejectedApprovalResponsePayload = (Initialize-RejectedApprovalResponsePayload -Message "Message_example" -Approver (Initialize-ApprovedApprovalResponsePayload_approver -Id "Id_example")) # RejectedApprovalResponsePayload | An RejectedApprovalResponsePayload object. (optional)

# Reject a team creation request
try {
     $Result = Deny-TeamCreation -ApprovalRequestId $ApprovalRequestId -RejectedApprovalResponsePayload $RejectedApprovalResponsePayload
} catch {
    Write-Host ("Exception occured when calling Deny-TeamCreation: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ApprovalRequestId** | **String**| The approval request ID. | 
 **RejectedApprovalResponsePayload** | [**RejectedApprovalResponsePayload**](RejectedApprovalResponsePayload.md)| An RejectedApprovalResponsePayload object. | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

