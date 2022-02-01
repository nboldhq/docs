# TeamChannelTab
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Team Channel Tab ID | [optional] 
**DisplayName** | **String** | Team Channel Tab Display Name | [optional] 
**Configuration** | [**TeamChannelTabConfiguration**](TeamChannelTabConfiguration.md) |  | [optional] 
**TeamsApp** | [**TeamChannelTabTeamsApp**](TeamChannelTabTeamsApp.md) |  | [optional] 
**SortOrderIndex** | **String** | Team Channel Tab Sort Order Index | [optional] 
**WebUrl** | **String** | Team Channel Tab Web URL | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamChannelTab = Initialize-PSOpenAPIToolsTeamChannelTab  -Id null `
 -DisplayName null `
 -Configuration null `
 -TeamsApp null `
 -SortOrderIndex null `
 -WebUrl null
```

- Convert the resource to JSON
```powershell
$TeamChannelTab | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

