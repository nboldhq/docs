# PSOpenAPITools.PSOpenAPITools/Api.UsersApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-Users**](UsersApi.md#Get-Users) | **GET** /users | Retreive users from your Microsoft 365 environment


<a name="Get-Users"></a>
# **Get-Users**
> Users Get-Users<br>

Retreive users from your Microsoft 365 environment

Retreive users from your Microsoft 365 environment. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


# Retreive users from your Microsoft 365 environment
try {
     $Result = Get-Users
} catch {
    Write-Host ("Exception occured when calling Get-Users: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**Users**](Users.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

