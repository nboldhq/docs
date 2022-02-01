# CatalogTemplateTemplateConfigurationApproval
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequireApproval** | **String** | Defines if the template requires an approval or not. | [optional] 
**ApprovalTeam** | [**ApprovalTeamMember[]**](ApprovalTeamMember.md) | Members of an approval team, as an array of ApprovalTeamMember. See [https://developers.salestim.com/api/reference/Models/ApprovalTeamMember](https://developers.salestim.com/api/reference/Models/ApprovalTeamMember) for more information. | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplateTemplateConfigurationApproval = Initialize-PSOpenAPIToolsCatalogTemplateTemplateConfigurationApproval  -RequireApproval null `
 -ApprovalTeam null
```

- Convert the resource to JSON
```powershell
$CatalogTemplateTemplateConfigurationApproval | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

