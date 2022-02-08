# TemplatesCatalogApi

All URIs are relative to *https://api.nbold.co/production*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogTemplates**](TemplatesCatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get teams templates
[**getMyCatalogTemplates**](TemplatesCatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates


<a name="getCatalogTemplates"></a>
# **getCatalogTemplates**
> CatalogTemplates getCatalogTemplates(language)

Get teams templates

    Get all the teams templates accessible in your organization. TIER 2️⃣ | ROLES - AUTHORIZED_APP, CATALOG_MANAGER, INTEGRATION_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] [default to null]

### Return type

[**CatalogTemplates**](../Models/CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMyCatalogTemplates"></a>
# **getMyCatalogTemplates**
> CatalogTemplates getMyCatalogTemplates(language)

Get my teams templates

    Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Optional. Default to &#39;en&#39;. Language code to be used to filter the colection of templates, for instance &#39;en&#39; or &#39;en-uk&#39;. | [optional] [default to null]

### Return type

[**CatalogTemplates**](../Models/CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

