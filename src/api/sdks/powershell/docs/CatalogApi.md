# PSOpenAPITools.PSOpenAPITools/Api.CatalogApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-CatalogTemplates**](CatalogApi.md#Get-CatalogTemplates) | **GET** /catalog/templates | Get teams templates
[**Get-MyCatalogTemplates**](CatalogApi.md#Get-MyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates


<a name="Get-CatalogTemplates"></a>
# **Get-CatalogTemplates**
> CatalogTemplates Get-CatalogTemplates<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Language] <String><br>

Get teams templates

Get all the teams templates accessible in your organization. TIER 2️⃣ | ROLES - AUTHORIZED_APP, CATALOG_MANAGER, INTEGRATION_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Language = "Language_example" # String | Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'. (optional)

# Get teams templates
try {
     $Result = Get-CatalogTemplates -Language $Language
} catch {
    Write-Host ("Exception occured when calling Get-CatalogTemplates: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**CatalogTemplates**](CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-MyCatalogTemplates"></a>
# **Get-MyCatalogTemplates**
> CatalogTemplates Get-MyCatalogTemplates<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Language] <String><br>

Get my teams templates

Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Language = "Language_example" # String | Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'. (optional)

# Get my teams templates
try {
     $Result = Get-MyCatalogTemplates -Language $Language
} catch {
    Write-Host ("Exception occured when calling Get-MyCatalogTemplates: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**CatalogTemplates**](CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

