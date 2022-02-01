# TeamProvisioningRequestTeamMembership
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Members** | [**MemberUserIdentifier[]**](MemberUserIdentifier.md) | An array of UserIdentifier. See [https://developers.salestim.com/api/reference/Models/UserIdentifier](https://developers.salestim.com/api/reference/Models/UserIdentifier) for more information. | [optional] 
**Owners** | [**OwnerUserIdentifier[]**](OwnerUserIdentifier.md) | An array of UserIdentifier. See [https://developers.salestim.com/api/reference/Models/UserIdentifier](https://developers.salestim.com/api/reference/Models/UserIdentifier) for more information. | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamProvisioningRequestTeamMembership = Initialize-PSOpenAPIToolsTeamProvisioningRequestTeamMembership  -Members null `
 -Owners null
```

- Convert the resource to JSON
```powershell
$TeamProvisioningRequestTeamMembership | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

