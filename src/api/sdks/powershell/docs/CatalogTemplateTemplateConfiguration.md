# CatalogTemplateTemplateConfiguration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Template ID. | [optional] 
**Name** | **String** | Template Name. | [optional] 
**Description** | **String** | Template Description. | [optional] 
**PictureUrl** | **String** | Template Picture URL. | [optional] 
**Language** | **String** | Template Language (e.g. &#39;en-US&#39;). | [optional] 
**Enabled** | **String** | Defines if the template is enabled or not, and therefore available for end-users or not. | [optional] 
**System** | **String** | Defines if the template should be considered as &#39;system&#39;, and therefore could not be deleted, exported... | [optional] 
**Singleton** | **String** | Defines if the template should restrict the number of associated teams created from itself to one. | [optional] 
**DomId** | **String** | Unique identifier that could be used safely client-side to identify an HTML tag. | [optional] 
**Approval** | [**CatalogTemplateTemplateConfigurationApproval**](CatalogTemplateTemplateConfigurationApproval.md) |  | [optional] 
**PermanentMembership** | [**CatalogTemplateTemplateConfigurationPermanentMembership**](CatalogTemplateTemplateConfigurationPermanentMembership.md) |  | [optional] 
**AudienceTargeting** | [**CatalogTemplateTemplateConfigurationAudienceTargeting**](CatalogTemplateTemplateConfigurationAudienceTargeting.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplateTemplateConfiguration = Initialize-PSOpenAPIToolsCatalogTemplateTemplateConfiguration  -Id null `
 -Name null `
 -Description null `
 -PictureUrl null `
 -Language null `
 -Enabled null `
 -System null `
 -Singleton null `
 -DomId null `
 -Approval null `
 -PermanentMembership null `
 -AudienceTargeting null
```

- Convert the resource to JSON
```powershell
$CatalogTemplateTemplateConfiguration | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

