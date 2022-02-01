# CatalogTemplateTemplateConfigurationAudienceTargeting
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **String** | Defines if the template should be restricted to specific audiences or not. | [optional] 
**RulesWithTags** | **String** | Defines the audience targeting rules (With the tags HTML representation). | [optional] 
**Rules** | **String** | Defines the audience targeting rules (Without the tags HTML representation). | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplateTemplateConfigurationAudienceTargeting = Initialize-PSOpenAPIToolsCatalogTemplateTemplateConfigurationAudienceTargeting  -Enabled null `
 -RulesWithTags null `
 -Rules null
```

- Convert the resource to JSON
```powershell
$CatalogTemplateTemplateConfigurationAudienceTargeting | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

