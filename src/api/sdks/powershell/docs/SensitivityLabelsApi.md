# PSOpenAPITools.PSOpenAPITools/Api.SensitivityLabelsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-MyLabels**](SensitivityLabelsApi.md#Get-MyLabels) | **GET** /me/labels | Get my sensitivity labels


<a name="Get-MyLabels"></a>
# **Get-MyLabels**
> Labels Get-MyLabels<br>

Get my sensitivity labels

Get my Microsoft 365 sensitivity labels. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


# Get my sensitivity labels
try {
     $Result = Get-MyLabels
} catch {
    Write-Host ("Exception occured when calling Get-MyLabels: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**Labels**](Labels.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

