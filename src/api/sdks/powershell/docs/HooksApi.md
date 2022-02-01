# PSOpenAPITools.PSOpenAPITools/Api.HooksApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-Hook**](HooksApi.md#New-Hook) | **POST** /hooks | Create a new webhook
[**Invoke-DeleteHook**](HooksApi.md#Invoke-DeleteHook) | **DELETE** /hooks/{hookId} | Delete a webhook
[**New-HookSignature**](HooksApi.md#New-HookSignature) | **POST** /hooks/signature | Generate a signature from a secret and a webhook payload
[**Get-HooksEvents**](HooksApi.md#Get-HooksEvents) | **GET** /hooks/events | Get webhooks events


<a name="New-Hook"></a>
# **New-Hook**
> Hook New-Hook<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-HookPayload] <PSCustomObject><br>

Create a new webhook

Create a new webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$HookPayload = (Initialize-HookPayload -Name "Name_example" -Description "Description_example" -Events @("Events_example") -Config (Initialize-Hook_config -Verb "Verb_example" -Url "Url_example" -ContentType "ContentType_example" -Secret "Secret_example")) # HookPayload | A HookPayload object.

# Create a new webhook
try {
     $Result = New-Hook -HookPayload $HookPayload
} catch {
    Write-Host ("Exception occured when calling New-Hook: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HookPayload** | [**HookPayload**](HookPayload.md)| A HookPayload object. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**Hook**](Hook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-DeleteHook"></a>
# **Invoke-DeleteHook**
> Hook Invoke-DeleteHook<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-HookId] <String><br>

Delete a webhook

Delete a webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$HookId = "HookId_example" # String | ID of the webhook to be deleted.

# Delete a webhook
try {
     $Result = Invoke-DeleteHook -HookId $HookId
} catch {
    Write-Host ("Exception occured when calling Invoke-DeleteHook: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HookId** | **String**| ID of the webhook to be deleted. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**Hook**](Hook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="New-HookSignature"></a>
# **New-HookSignature**
> HookSignature New-HookSignature<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-HookSignatureRequest] <PSCustomObject><br>

Generate a signature from a secret and a webhook payload

Generate a signature from a secret and a webhook payload. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$HookSignatureRequest = (Initialize-HookSignatureRequest -Secret "Secret_example" -Payload "Payload_example") # HookSignatureRequest | A HookSignatureRequest object comprised of the secret and payload.

# Generate a signature from a secret and a webhook payload
try {
     $Result = New-HookSignature -HookSignatureRequest $HookSignatureRequest
} catch {
    Write-Host ("Exception occured when calling New-HookSignature: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HookSignatureRequest** | [**HookSignatureRequest**](HookSignatureRequest.md)| A HookSignatureRequest object comprised of the secret and payload. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**HookSignature**](HookSignature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-HooksEvents"></a>
# **Get-HooksEvents**
> HooksEvents Get-HooksEvents<br>

Get webhooks events

Get webhooks events. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


# Get webhooks events
try {
     $Result = Get-HooksEvents
} catch {
    Write-Host ("Exception occured when calling Get-HooksEvents: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**HooksEvents**](HooksEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

