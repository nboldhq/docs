# HookPayload
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Webhook name | [optional] 
**Description** | **String** | Webhook description | [optional] 
**Events** | **String[]** | Webhook events | [optional] 
**Config** | [**HookConfig**](HookConfig.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$HookPayload = Initialize-PSOpenAPIToolsHookPayload  -Name null `
 -Description null `
 -Events null `
 -Config null
```

- Convert the resource to JSON
```powershell
$HookPayload | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

