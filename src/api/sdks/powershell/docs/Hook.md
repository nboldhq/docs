# Hook
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Webhook ID | [optional] 
**Name** | **String** | Webhook name | [optional] 
**Description** | **String** | Webhook description | [optional] 
**Active** | **Boolean** | Is the webhook active | [optional] 
**Events** | **String[]** | Webhook events | [optional] 
**Config** | [**HookConfig**](HookConfig.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Hook = Initialize-PSOpenAPIToolsHook  -Id null `
 -Name null `
 -Description null `
 -Active null `
 -Events null `
 -Config null
```

- Convert the resource to JSON
```powershell
$Hook | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

