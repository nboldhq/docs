# TeamProvisioningRequestTeam
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Requested team name | 
**Description** | **String** | Requested team description | [optional] 
**WelcomeMessage** | **String** | Requested team welcome message | [optional] 
**Membership** | [**TeamProvisioningRequestTeamMembership**](TeamProvisioningRequestTeamMembership.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamProvisioningRequestTeam = Initialize-PSOpenAPIToolsTeamProvisioningRequestTeam  -Name null `
 -Description null `
 -WelcomeMessage null `
 -Membership null
```

- Convert the resource to JSON
```powershell
$TeamProvisioningRequestTeam | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

