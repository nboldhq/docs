# TeamChannelTabConfiguration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityId** | **String** | Team Channel Tab Configuration Entity ID | [optional] 
**ContentUrl** | **String** | Team Channel Tab Configuration Content URL | [optional] 
**WebsiteUrl** | **String** | Team Channel Tab Configuration Website URL | [optional] 
**RemoveUrl** | **String** | Team Channel Tab Configuration Remove URL | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamChannelTabConfiguration = Initialize-PSOpenAPIToolsTeamChannelTabConfiguration  -EntityId null `
 -ContentUrl null `
 -WebsiteUrl null `
 -RemoveUrl null
```

- Convert the resource to JSON
```powershell
$TeamChannelTabConfiguration | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

