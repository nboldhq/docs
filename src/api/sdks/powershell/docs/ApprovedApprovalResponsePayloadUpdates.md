# ApprovedApprovalResponsePayloadUpdates
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Updated team name | [optional] 
**Description** | **String** | Updated team description | [optional] 
**WelcomeMessage** | **String** | Updated welcome message | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovedApprovalResponsePayloadUpdates = Initialize-PSOpenAPIToolsApprovedApprovalResponsePayloadUpdates  -Name null `
 -Description null `
 -WelcomeMessage null
```

- Convert the resource to JSON
```powershell
$ApprovedApprovalResponsePayloadUpdates | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

