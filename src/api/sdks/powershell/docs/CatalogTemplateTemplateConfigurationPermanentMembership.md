# CatalogTemplateTemplateConfigurationPermanentMembership
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Members** | [**PermanentMember[]**](PermanentMember.md) | Members of a permanent membership team, as an array of PermanentMember. See [https://developers.salestim.com/api/reference/Models/PermanentMember](https://developers.salestim.com/api/reference/Models/PermanentMember) for more information. | [optional] 
**Owners** | [**PermanentMember[]**](PermanentMember.md) | Members of a permanent membership team, as an array of PermanentMember. See [https://developers.salestim.com/api/reference/Models/PermanentMember](https://developers.salestim.com/api/reference/Models/PermanentMember) for more information. | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplateTemplateConfigurationPermanentMembership = Initialize-PSOpenAPIToolsCatalogTemplateTemplateConfigurationPermanentMembership  -Members null `
 -Owners null
```

- Convert the resource to JSON
```powershell
$CatalogTemplateTemplateConfigurationPermanentMembership | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

