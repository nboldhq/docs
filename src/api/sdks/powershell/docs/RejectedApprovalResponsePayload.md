# RejectedApprovalResponsePayload
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Approval response message | [optional] 
**Approver** | [**ApprovedApprovalResponsePayloadApprover**](ApprovedApprovalResponsePayloadApprover.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RejectedApprovalResponsePayload = Initialize-PSOpenAPIToolsRejectedApprovalResponsePayload  -Message null `
 -Approver null
```

- Convert the resource to JSON
```powershell
$RejectedApprovalResponsePayload | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

