# TeamChannelTabTeamsApp
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Team Channel Tab Teams App ID | [optional] 
**ExternalId** | **String** | Team Channel Tab Teams App External ID | [optional] 
**DisplayName** | **String** | Team Channel Tab Teams App Display Name | [optional] 
**DistributionMethod** | **String** | Team Channel Tab Teams App Distribution Method | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamChannelTabTeamsApp = Initialize-PSOpenAPIToolsTeamChannelTabTeamsApp  -Id null `
 -ExternalId null `
 -DisplayName null `
 -DistributionMethod null
```

- Convert the resource to JSON
```powershell
$TeamChannelTabTeamsApp | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

