# HookSignature
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | Odata context | [optional] 
**Signature** | **String** | Calculated hook signature | [optional] 

## Examples

- Prepare the resource
```powershell
$HookSignature = Initialize-PSOpenAPIToolsHookSignature  -OdataContext null `
 -Signature null
```

- Convert the resource to JSON
```powershell
$HookSignature | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

