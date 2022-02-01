# ApprovedApprovalResponsePayload
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Approval response message | [optional] 
**Approver** | [**ApprovedApprovalResponsePayloadApprover**](ApprovedApprovalResponsePayloadApprover.md) |  | [optional] 
**Updates** | [**ApprovedApprovalResponsePayloadUpdates**](ApprovedApprovalResponsePayloadUpdates.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovedApprovalResponsePayload = Initialize-PSOpenAPIToolsApprovedApprovalResponsePayload  -Message null `
 -Approver null `
 -Updates null
```

- Convert the resource to JSON
```powershell
$ApprovedApprovalResponsePayload | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

