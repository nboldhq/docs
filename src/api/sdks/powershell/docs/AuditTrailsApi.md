# PSOpenAPITools.PSOpenAPITools/Api.AuditTrailsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-AuditTrailRecords**](AuditTrailsApi.md#Get-AuditTrailRecords) | **GET** /audittrails/{code}/records | Get all the records from an audit trail
[**Get-AuditTrails**](AuditTrailsApi.md#Get-AuditTrails) | **GET** /audittrails | Get audit trails


<a name="Get-AuditTrailRecords"></a>
# **Get-AuditTrailRecords**
> AuditTrailRecords Get-AuditTrailRecords<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Code] <String><br>

Get all the records from an audit trail

Get all the records from an audit trail. TIER 2 | ROLES - AUTHORIZED_APP, COMPLIANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Code = "Code_example" # String | The audit trail code.

# Get all the records from an audit trail
try {
     $Result = Get-AuditTrailRecords -Code $Code
} catch {
    Write-Host ("Exception occured when calling Get-AuditTrailRecords: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Code** | **String**| The audit trail code. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**AuditTrailRecords**](AuditTrailRecords.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-AuditTrails"></a>
# **Get-AuditTrails**
> AuditTrails Get-AuditTrails<br>

Get audit trails

Get all the audit trails accessible in your organization. TIER 3 | ROLES - AUTHORIZED_APP, COMPLIANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


# Get audit trails
try {
     $Result = Get-AuditTrails
} catch {
    Write-Host ("Exception occured when calling Get-AuditTrails: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**AuditTrails**](AuditTrails.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

