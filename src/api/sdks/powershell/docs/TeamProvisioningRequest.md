# TeamProvisioningRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Template** | [**TeamProvisioningRequestTemplate**](TeamProvisioningRequestTemplate.md) |  | [optional] 
**Team** | [**TeamProvisioningRequestTeam**](TeamProvisioningRequestTeam.md) |  | [optional] 
**Metadata** | [**SystemCollectionsHashtable**](.md) | Metadata from the app client as a JSON object. See [https://developers.salestim.com/api/reference/Models/AppMetadata](https://developers.salestim.com/api/reference/Models/VirtualAppMetadata) for more information. | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamProvisioningRequest = Initialize-PSOpenAPIToolsTeamProvisioningRequest  -Template null `
 -Team null `
 -Metadata null
```

- Convert the resource to JSON
```powershell
$TeamProvisioningRequest | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

