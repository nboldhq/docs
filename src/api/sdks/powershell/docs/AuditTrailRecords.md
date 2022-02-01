# AuditTrailRecords
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | Odata context | [optional] 
**OdataCount** | **Int32** | Number of audit trails records in the collection | [optional] 
**Value** | [**SystemCollectionsHashtable[]**](SystemCollectionsHashtable.md) | Array of audit trails records | [optional] 

## Examples

- Prepare the resource
```powershell
$AuditTrailRecords = Initialize-PSOpenAPIToolsAuditTrailRecords  -OdataContext null `
 -OdataCount null `
 -Value null
```

- Convert the resource to JSON
```powershell
$AuditTrailRecords | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

