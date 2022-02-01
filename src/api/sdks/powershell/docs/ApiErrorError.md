# ApiErrorError
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **String** | The HTTP error code | [optional] 
**Message** | **String** | The error message | [optional] 
**InnerError** | [**ApiErrorErrorInnerError**](ApiErrorErrorInnerError.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApiErrorError = Initialize-PSOpenAPIToolsApiErrorError  -Code null `
 -Message null `
 -InnerError null
```

- Convert the resource to JSON
```powershell
$ApiErrorError | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

