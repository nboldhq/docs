# TeamMembershipPayload
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | [**User1**](User1.md) |  | [optional] 
**Role** | **String** | Team Membership Role (member/owner) | 

## Examples

- Prepare the resource
```powershell
$TeamMembershipPayload = Initialize-PSOpenAPIToolsTeamMembershipPayload  -User null `
 -Role null
```

- Convert the resource to JSON
```powershell
$TeamMembershipPayload | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

