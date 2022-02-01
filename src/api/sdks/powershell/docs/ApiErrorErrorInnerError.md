# ApiErrorErrorInnerError
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **System.DateTime** | Inner error date | [optional] 
**RequestId** | **String** | Server-side generated unique request identifier | [optional] 

## Examples

- Prepare the resource
```powershell
$ApiErrorErrorInnerError = Initialize-PSOpenAPIToolsApiErrorErrorInnerError  -Date null `
 -RequestId null
```

- Convert the resource to JSON
```powershell
$ApiErrorErrorInnerError | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

