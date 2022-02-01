# CatalogTemplates
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | Odata context | [optional] 
**OdataCount** | **Int32** | Number of templates in the collection | [optional] 
**Value** | [**CatalogTemplate[]**](CatalogTemplate.md) | Array of catalog templates | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplates = Initialize-PSOpenAPIToolsCatalogTemplates  -OdataContext null `
 -OdataCount null `
 -Value null
```

- Convert the resource to JSON
```powershell
$CatalogTemplates | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

