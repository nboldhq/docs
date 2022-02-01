# TeamMemberSettings
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowCreateUpdateChannels** | **Boolean** | Allow create update channels | [optional] 
**AllowCreatePrivateChannels** | **Boolean** | Allow create private channels | [optional] 
**AllowDeleteChannels** | **Boolean** | Allow delete channels | [optional] 
**AllowAddRemoveApps** | **Boolean** | Allow add/remove apps | [optional] 
**AllowCreateUpdateRemoveTabs** | **Boolean** | Allow create/remove tabs | [optional] 
**AllowCreateUpdateRemoveConnectors** | **Boolean** | Allow create/remove connectors | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamMemberSettings = Initialize-PSOpenAPIToolsTeamMemberSettings  -AllowCreateUpdateChannels null `
 -AllowCreatePrivateChannels null `
 -AllowDeleteChannels null `
 -AllowAddRemoveApps null `
 -AllowCreateUpdateRemoveTabs null `
 -AllowCreateUpdateRemoveConnectors null
```

- Convert the resource to JSON
```powershell
$TeamMemberSettings | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

