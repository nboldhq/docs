# CatalogTemplateNewTeam
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NamingConventionWithTags** | **String** | Defines the naming convention for the new team name (With the tags HTML representation). | [optional] 
**EmailConventionWithTags** | **String** | Defines the naming convention for the email associated with the underlying group of the new team name (With the tags HTML representation). | [optional] 
**DescriptionConventionWithTags** | **String** | Defines the naming convention for the new team description (With the tags HTML representation). | [optional] 
**WelcomeMessageConventionWithTags** | **String** | Defines the naming convention for the new team welcome message (With the tags HTML representation). | [optional] 
**NamingConvention** | **String** | Defines the naming convention for the new team name (Without the tags HTML representation). | [optional] 
**EmailConvention** | **String** | Defines the naming convention for the email associated with the underlying group of the new team name (Without the tags HTML representation). | [optional] 
**DescriptionConvention** | **String** | Defines the naming convention for the new team description (Without the tags HTML representation). | [optional] 
**WelcomeMessageConvention** | **String** | Defines the naming convention for the new team welcome message (Without the tags HTML representation). | [optional] 
**DefaultName** | **String** | Defines the default team name presented to end-users in the new team provisioning form. | [optional] 
**DefaultDescription** | **String** | Defines the default team description presented to end-users in the new team provisioning form. | [optional] 
**DefaultWelcomeMessage** | **String** | Defines the default team welcome message presented to end-users in the new team provisioning form. | [optional] 
**TeamPrivacy** | **String** | Defines the new team privacy level. | [optional] 
**AddRequesterAsTeamOwner** | **String** | Defines if the requester of the new team should be invited as a team owner or just as a team member. | [optional] 

## Examples

- Prepare the resource
```powershell
$CatalogTemplateNewTeam = Initialize-PSOpenAPIToolsCatalogTemplateNewTeam  -NamingConventionWithTags null `
 -EmailConventionWithTags null `
 -DescriptionConventionWithTags null `
 -WelcomeMessageConventionWithTags null `
 -NamingConvention null `
 -EmailConvention null `
 -DescriptionConvention null `
 -WelcomeMessageConvention null `
 -DefaultName null `
 -DefaultDescription null `
 -DefaultWelcomeMessage null `
 -TeamPrivacy null `
 -AddRequesterAsTeamOwner null
```

- Convert the resource to JSON
```powershell
$CatalogTemplateNewTeam | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

