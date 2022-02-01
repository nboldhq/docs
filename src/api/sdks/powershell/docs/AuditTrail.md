# AuditTrail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **String** | Audit trail code | [optional] 
**Category** | **String** | Audit trail category | [optional] 
**Fields** | **String[]** | A collection of audit trail fields | [optional] 

## Examples

- Prepare the resource
```powershell
$AuditTrail = Initialize-PSOpenAPIToolsAuditTrail  -Code null `
 -Category null `
 -Fields null
```

- Convert the resource to JSON
```powershell
$AuditTrail | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

