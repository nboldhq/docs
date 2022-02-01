# Team
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | OData Context | [optional] 
**Id** | **String** | Team ID | [optional] 
**CreatedDateTime** | **String** | Team Created Date Time | [optional] 
**DisplayName** | **String** | Team Display Name | [optional] 
**Description** | **String** | Team Description | [optional] 
**InternalId** | **String** | Team Internal ID | [optional] 
**Classification** | **String** | Team Classification | [optional] 
**Specialization** | **String** | Team Specialization | [optional] 
**Visibility** | **String** | Team Visibility | [optional] 
**WebUrl** | **String** | Team Web URL | [optional] 
**IsArchived** | **Boolean** | Team Is Archived | [optional] 
**IsMembershipLimitedToOwners** | **Boolean** | Team Is Membership Limited To Owners | [optional] 
**DiscoverySettings** | [**TeamDiscoverySettings**](TeamDiscoverySettings.md) |  | [optional] 
**MemberSettings** | [**TeamMemberSettings**](TeamMemberSettings.md) |  | [optional] 
**GuestSettings** | [**TeamGuestSettings**](TeamGuestSettings.md) |  | [optional] 
**MessagingSettings** | [**TeamMessagingSettings**](TeamMessagingSettings.md) |  | [optional] 
**FunSettings** | [**TeamFunSettings**](TeamFunSettings.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Team = Initialize-PSOpenAPIToolsTeam  -OdataContext null `
 -Id null `
 -CreatedDateTime null `
 -DisplayName null `
 -Description null `
 -InternalId null `
 -Classification null `
 -Specialization null `
 -Visibility null `
 -WebUrl null `
 -IsArchived null `
 -IsMembershipLimitedToOwners null `
 -DiscoverySettings null `
 -MemberSettings null `
 -GuestSettings null `
 -MessagingSettings null `
 -FunSettings null
```

- Convert the resource to JSON
```powershell
$Team | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

