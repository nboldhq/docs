# CatalogTemplate
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateConfiguration** | [**CatalogTemplateTemplateConfiguration**](CatalogTemplateTemplateConfiguration.md) |  | [optional] 
**ClonedTeam** | [**CatalogTemplateClonedTeam**](CatalogTemplateClonedTeam.md) |  | [optional] 
**NewTeam** | [**CatalogTemplateNewTeam**](CatalogTemplateNewTeam.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplate = Initialize-PSOpenAPIToolsCatalogTemplate  -TemplateConfiguration null `
 -ClonedTeam null `
 -NewTeam null
```

- Convert the resource to JSON
```powershell
$CatalogTemplate | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

