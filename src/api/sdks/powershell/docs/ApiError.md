# ApiError
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OdataContext** | **String** | oData context of the request | [optional] 
**VarError** | [**ApiErrorError**](ApiErrorError.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApiError = Initialize-PSOpenAPIToolsApiError  -OdataContext null `
 -VarError null
```

- Convert the resource to JSON
```powershell
$ApiError | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

