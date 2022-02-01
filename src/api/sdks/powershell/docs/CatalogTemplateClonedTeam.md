# CatalogTemplateClonedTeam
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TeamId** | **String** | Source team ID. | [optional] 
**TeamName** | **String** | Source team name. | [optional] 
**IncludeApps** | **String** | Defines if apps should be cloned from the source team. | [optional] 
**IncludeTabs** | **String** | Defines if tabs should be cloned from the source team. | [optional] 
**IncludeSettings** | **String** | Defines if the team settings should be cloned from the source team. | [optional] 
**IncludeChannels** | **String** | Defines if channels should be cloned from the source team. | [optional] 
**IncludeMembers** | **String** | Defines if membership (members and owners) should be cloned from the source team. | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplateClonedTeam = Initialize-PSOpenAPIToolsCatalogTemplateClonedTeam  -TeamId null `
 -TeamName null `
 -IncludeApps null `
 -IncludeTabs null `
 -IncludeSettings null `
 -IncludeChannels null `
 -IncludeMembers null
```

- Convert the resource to JSON
```powershell
$CatalogTemplateClonedTeam | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

