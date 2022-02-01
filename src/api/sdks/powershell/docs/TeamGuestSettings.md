# TeamGuestSettings
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowCreateUpdateChannels** | **Boolean** | Allow create/update channels by guests | [optional] 
**AllowDeleteChannels** | **Boolean** | Allow delete channels by guests | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamGuestSettings = Initialize-PSOpenAPIToolsTeamGuestSettings  -AllowCreateUpdateChannels null `
 -AllowDeleteChannels null
```

- Convert the resource to JSON
```powershell
$TeamGuestSettings | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

