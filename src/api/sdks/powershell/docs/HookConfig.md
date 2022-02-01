# HookConfig
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Verb** | **String** | Webhook configuration verb | [optional] 
**Url** | **String** | Webhook configuration url | [optional] 
**ContentType** | **String** | Webhook configuration content type | [optional] 
**Secret** | **String** | Webhook configuration secret | [optional] 

## Examples

- Prepare the resource
```powershell
$HookConfig = Initialize-PSOpenAPIToolsHookConfig  -Verb null `
 -Url null `
 -ContentType null `
 -Secret null
```

- Convert the resource to JSON
```powershell
$HookConfig | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

