# HookSignatureRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secret** | **String** | Webhook secret | 
**Payload** | [**SystemCollectionsHashtable**](.md) | Webhook payload | 

## Examples

- Prepare the resource
```powershell
$HookSignatureRequest = Initialize-PSOpenAPIToolsHookSignatureRequest  -Secret null `
 -Payload null
```

- Convert the resource to JSON
```powershell
$HookSignatureRequest | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

