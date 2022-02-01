# PSOpenAPITools.PSOpenAPITools/Api.JobsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-Job**](JobsApi.md#Get-Job) | **GET** /jobs/{jobId} | Get information about a job


<a name="Get-Job"></a>
# **Get-Job**
> Job Get-Job<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-JobId] <String><br>

Get information about a job

Get detailed information about a job, including its status, progress, logs... TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$JobId = "JobId_example" # String | The job ID.

# Get information about a job
try {
     $Result = Get-Job -JobId $JobId
} catch {
    Write-Host ("Exception occured when calling Get-Job: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JobId** | **String**| The job ID. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

