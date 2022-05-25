# NBoldApi.TemplatesCatalogApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogTemplates**](TemplatesCatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get teams templates
[**getMicrosoftTeamsTeamTemplate**](TemplatesCatalogApi.md#getMicrosoftTeamsTeamTemplate) | **GET** /catalog/templates/{template_id} | Get a Microsoft Teams team template
[**getMicrosoftTeamsTeamTemplatePermanentMembership**](TemplatesCatalogApi.md#getMicrosoftTeamsTeamTemplatePermanentMembership) | **GET** /catalog/templates/{template_id}/permanent_membership | Get permanent members and owners of a Microsoft Teams team template
[**getMicrosoftTeamsTeamTemplatePermanentMembershipByRole**](TemplatesCatalogApi.md#getMicrosoftTeamsTeamTemplatePermanentMembershipByRole) | **GET** /catalog/templates/{template_id}/permanent_membership/{role} | Get permanent members and owners of a Microsoft Teams team template
[**getMyCatalogTemplates**](TemplatesCatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates
[**setMicrosoftTeamsTeamTemplate**](TemplatesCatalogApi.md#setMicrosoftTeamsTeamTemplate) | **PUT** /catalog/templates/{template_id} | Set a Microsoft Teams team template
[**setMicrosoftTeamsTeamTemplatePermanentMembership**](TemplatesCatalogApi.md#setMicrosoftTeamsTeamTemplatePermanentMembership) | **PUT** /catalog/templates/{template_id}/permanent_membership | Set permanent members and owners of a Microsoft Teams team template
[**setMicrosoftTeamsTeamTemplatePermanentMembershipByRole**](TemplatesCatalogApi.md#setMicrosoftTeamsTeamTemplatePermanentMembershipByRole) | **PUT** /catalog/templates/{template_id}/permanent_membership/{role} | Set permanent members and owners of a Microsoft Teams team template



## getCatalogTemplates

> CatalogTemplates getCatalogTemplates()

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
apiInstance.getCatalogTemplates((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CatalogTemplates**](CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMicrosoftTeamsTeamTemplate

> CatalogTemplate getMicrosoftTeamsTeamTemplate(templateId)

Get a Microsoft Teams team template

Get a Microsoft Teams team template by its ID

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let templateId = "templateId_example"; // String | The Microsoft Teams team template ID
apiInstance.getMicrosoftTeamsTeamTemplate(templateId, (error, data, response) => {
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
 **templateId** | **String**| The Microsoft Teams team template ID | 

### Return type

[**CatalogTemplate**](CatalogTemplate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMicrosoftTeamsTeamTemplatePermanentMembership

> PermanentMembership getMicrosoftTeamsTeamTemplatePermanentMembership(templateId)

Get permanent members and owners of a Microsoft Teams team template

Get permanent members and owners of a Microsoft Teams team template

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let templateId = "templateId_example"; // String | The Microsoft Teams team template ID
apiInstance.getMicrosoftTeamsTeamTemplatePermanentMembership(templateId, (error, data, response) => {
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
 **templateId** | **String**| The Microsoft Teams team template ID | 

### Return type

[**PermanentMembership**](PermanentMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMicrosoftTeamsTeamTemplatePermanentMembershipByRole

> [PermanentMember] getMicrosoftTeamsTeamTemplatePermanentMembershipByRole(templateId, role)

Get permanent members and owners of a Microsoft Teams team template

Get permanent members or owners of a Microsoft Teams team template

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let templateId = "templateId_example"; // String | The Microsoft Teams team template ID
let role = "role_example"; // String | The Microsoft Teams ownership role (owners / members)
apiInstance.getMicrosoftTeamsTeamTemplatePermanentMembershipByRole(templateId, role, (error, data, response) => {
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
 **templateId** | **String**| The Microsoft Teams team template ID | 
 **role** | **String**| The Microsoft Teams ownership role (owners / members) | 

### Return type

[**[PermanentMember]**](PermanentMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMyCatalogTemplates

> CatalogTemplates getMyCatalogTemplates()

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
apiInstance.getMyCatalogTemplates((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CatalogTemplates**](CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setMicrosoftTeamsTeamTemplate

> CatalogTemplate setMicrosoftTeamsTeamTemplate(templateId, catalogTemplate)

Set a Microsoft Teams team template

Set a Microsoft Teams team template by its ID

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let templateId = "templateId_example"; // String | The Microsoft Teams team template ID
let catalogTemplate = new NBoldApi.CatalogTemplate(); // CatalogTemplate | A JSON representation of a Microsoft Teams team template.
apiInstance.setMicrosoftTeamsTeamTemplate(templateId, catalogTemplate, (error, data, response) => {
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
 **templateId** | **String**| The Microsoft Teams team template ID | 
 **catalogTemplate** | [**CatalogTemplate**](CatalogTemplate.md)| A JSON representation of a Microsoft Teams team template. | 

### Return type

[**CatalogTemplate**](CatalogTemplate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setMicrosoftTeamsTeamTemplatePermanentMembership

> PermanentMembership setMicrosoftTeamsTeamTemplatePermanentMembership(templateId, permanentMembership)

Set permanent members and owners of a Microsoft Teams team template

Set permanent members and owners of a Microsoft Teams team template

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let templateId = "templateId_example"; // String | The Microsoft Teams team template ID
let permanentMembership = new NBoldApi.PermanentMembership(); // PermanentMembership | A JSON representation of a Microsoft Teams team template permanent membership settings.
apiInstance.setMicrosoftTeamsTeamTemplatePermanentMembership(templateId, permanentMembership, (error, data, response) => {
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
 **templateId** | **String**| The Microsoft Teams team template ID | 
 **permanentMembership** | [**PermanentMembership**](PermanentMembership.md)| A JSON representation of a Microsoft Teams team template permanent membership settings. | 

### Return type

[**PermanentMembership**](PermanentMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setMicrosoftTeamsTeamTemplatePermanentMembershipByRole

> [PermanentMember] setMicrosoftTeamsTeamTemplatePermanentMembershipByRole(templateId, role, permanentMember)

Set permanent members and owners of a Microsoft Teams team template

Set permanent members or owners of a Microsoft Teams team template

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.TemplatesCatalogApi();
let templateId = "templateId_example"; // String | The Microsoft Teams team template ID
let role = "role_example"; // String | The Microsoft Teams ownership role (owners / members)
let permanentMember = [new NBoldApi.PermanentMember()]; // [PermanentMember] | A JSON representation of a Microsoft Teams team template permanent members.
apiInstance.setMicrosoftTeamsTeamTemplatePermanentMembershipByRole(templateId, role, permanentMember, (error, data, response) => {
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
 **templateId** | **String**| The Microsoft Teams team template ID | 
 **role** | **String**| The Microsoft Teams ownership role (owners / members) | 
 **permanentMember** | [**[PermanentMember]**](PermanentMember.md)| A JSON representation of a Microsoft Teams team template permanent members. | 

### Return type

[**[PermanentMember]**](PermanentMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

