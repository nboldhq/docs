# TeamMessagingSettings
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowUserEditMessages** | **Boolean** | Allow users to edit messages | [optional] 
**AllowUserDeleteMessages** | **Boolean** | Allow users to delete their own messages | [optional] 
**AllowOwnerDeleteMessages** | **Boolean** | Allow owners to delete messages | [optional] 
**AllowTeamMentions** | **Boolean** | Allow team mentions | [optional] 
**AllowChannelMentions** | **Boolean** | Allow channel mentions | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamMessagingSettings = Initialize-PSOpenAPIToolsTeamMessagingSettings  -AllowUserEditMessages null `
 -AllowUserDeleteMessages null `
 -AllowOwnerDeleteMessages null `
 -AllowTeamMentions null `
 -AllowChannelMentions null
```

- Convert the resource to JSON
```powershell
$TeamMessagingSettings | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

