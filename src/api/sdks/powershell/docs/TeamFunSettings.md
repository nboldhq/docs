# TeamFunSettings
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowGiphy** | **Boolean** | Allow Giphy | [optional] 
**GiphyContentRating** | **String** | Giphy content rating level | [optional] 
**AllowStickersAndMemes** | **Boolean** | Allow stickers and memes | [optional] 
**AllowCustomMemes** | **Boolean** | Allow custom memes | [optional] 

## Examples

- Prepare the resource
```powershell
$TeamFunSettings = Initialize-PSOpenAPIToolsTeamFunSettings  -AllowGiphy null `
 -GiphyContentRating null `
 -AllowStickersAndMemes null `
 -AllowCustomMemes null
```

- Convert the resource to JSON
```powershell
$TeamFunSettings | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

