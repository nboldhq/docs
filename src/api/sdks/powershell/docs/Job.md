# Job
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The job ID, auto-generated at creation | [optional] 
**Log** | **String[]** | A collection of JobLogsEntry. See [https://developers.salestim.com/api/reference/Models/JobLogs](https://developers.salestim.com/api/reference/Models/JobLogs) for more information. | [optional] 
**Type** | **String** | The job type (for instance &#x60;ProvisioningRequest&#x60;) | [optional] 
**Status** | **String** | The job current status | [optional] 
**Progress** | **Int32** | The job current progress | [optional] 
**VarData** | [**SystemCollectionsHashtable**](.md) | The job data (for instance a &#x60;ProvisioningRequest&#x60; object) | [optional] 

## Examples

- Prepare the resource
```powershell
$Job = Initialize-PSOpenAPIToolsJob  -Id null `
 -Log null `
 -Type null `
 -Status null `
 -Progress null `
 -VarData null
```

- Convert the resource to JSON
```powershell
$Job | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

