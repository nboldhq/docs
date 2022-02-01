# TeamChannel
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Team Channel ID | [optional] 
**CreatedDateTime** | **String** | Team Channel Created Date Time | [optional] 
**DisplayName** | **String** | Team Channel Display Name | [optional] 
**Description** | **String** | Team Channel Description | [optional] 
**MembershipType** | **String** | Team Channel Membership Type | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamChannel = Initialize-PSOpenAPIToolsTeamChannel  -Id null `
 -CreatedDateTime null `
 -DisplayName null `
 -Description null `
 -MembershipType null
```

- Convert the resource to JSON
```powershell
$TeamChannel | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

