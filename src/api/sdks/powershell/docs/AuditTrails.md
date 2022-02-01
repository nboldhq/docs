# AuditTrails
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | Odata context | [optional] 
**OdataCount** | **Int32** | Number of audit trails in the collection | [optional] 
**Value** | [**AuditTrail[]**](AuditTrail.md) | Array of audit trails | [optional] 

## Examples

- Prepare the resource
```powershell
$AuditTrails = Initialize-PSOpenAPIToolsAuditTrails  -OdataContext null `
 -OdataCount null `
 -Value null
```

- Convert the resource to JSON
```powershell
$AuditTrails | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

