# Label
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Label ID | [optional] 
**Name** | **String** | Label name | [optional] 
**Description** | **String** | Label description | [optional] 
**Color** | **String** | Label color | [optional] 
**Sensitivity** | **Int32** | Label sensitivity | [optional] 
**Tooltip** | **String** | Label tooltip | [optional] 
**IsActive** | **Boolean** | Is label active | [optional] 
**Parent** | **String** | Parent label | [optional] 

## Examples

- Prepare the resource
```powershell
$Label = Initialize-PSOpenAPIToolsLabel  -Id null `
 -Name null `
 -Description null `
 -Color null `
 -Sensitivity null `
 -Tooltip null `
 -IsActive null `
 -Parent null
```

- Convert the resource to JSON
```powershell
$Label | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

