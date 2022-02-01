# Users
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | Odata context | [optional] 
**OdataCount** | **Int32** | Number of uisers in the collection | [optional] 
**Value** | [**SystemCollectionsHashtable[]**](SystemCollectionsHashtable.md) | Array of users | [optional] 

## Examples

- Prepare the resource
```powershell
$Users = Initialize-PSOpenAPIToolsUsers  -OdataContext null `
 -OdataCount null `
 -Value null
```

- Convert the resource to JSON
```powershell
$Users | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

