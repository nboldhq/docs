# Labels
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | Odata context | [optional] 
**OdataCount** | **Int32** | Number of labels in the collection | [optional] 
**Value** | [**Label[]**](Label.md) | Array of labels | [optional] 

## Examples

- Prepare the resource
```powershell
$Labels = Initialize-PSOpenAPIToolsLabels  -OdataContext null `
 -OdataCount null `
 -Value null
```

- Convert the resource to JSON
```powershell
$Labels | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

