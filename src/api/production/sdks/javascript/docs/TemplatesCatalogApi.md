# NBoldApi.TemplatesCatalogApi

All URIs are relative to *https://api.nbold.co/production*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogTemplates**](TemplatesCatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get teams templates
[**getMyCatalogTemplates**](TemplatesCatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates



## getCatalogTemplates

> CatalogTemplates getCatalogTemplates(opts)

Get teams templates

Get all the teams templates accessible in your organization. TIER 2️⃣ | ROLES - AUTHORIZED_APP, CATALOG_MANAGER, INTEGRATION_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let opts = {
  'language': "language_example" // String | Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'.
};
apiInstance.getCatalogTemplates(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] 

### Return type

[**CatalogTemplates**](CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMyCatalogTemplates

> CatalogTemplates getMyCatalogTemplates(opts)

Get my teams templates

Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let opts = {
  'language': "language_example" // String | Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'.
};
apiInstance.getMyCatalogTemplates(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] 

### Return type

[**CatalogTemplates**](CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

