# HooksEvents
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | Odata context | [optional] 
**OdataCount** | **Int32** | Number of events in the collection | [optional] 
**Value** | [**HookEvent[]**](HookEvent.md) | Array of HookEvent | [optional] 

## Examples

- Prepare the resource
```powershell
$HooksEvents = Initialize-PSOpenAPIToolsHooksEvents  -OdataContext null `
 -OdataCount null `
 -Value null
```

- Convert the resource to JSON
```powershell
$HooksEvents | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

