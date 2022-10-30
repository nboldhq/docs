# TemplatesCatalogApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCatalogTemplates**](TemplatesCatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get teams templates |
| [**getMicrosoftTeamsTeamTemplate**](TemplatesCatalogApi.md#getMicrosoftTeamsTeamTemplate) | **GET** /catalog/templates/{template_id} | Get a Microsoft Teams team template |
| [**getMicrosoftTeamsTeamTemplatePermanentMembership**](TemplatesCatalogApi.md#getMicrosoftTeamsTeamTemplatePermanentMembership) | **GET** /catalog/templates/{template_id}/permanent_membership | Get permanent members and owners of a Microsoft Teams team template |
| [**getMicrosoftTeamsTeamTemplatePermanentMembershipByRole**](TemplatesCatalogApi.md#getMicrosoftTeamsTeamTemplatePermanentMembershipByRole) | **GET** /catalog/templates/{template_id}/permanent_membership/{role} | Get permanent members and owners of a Microsoft Teams team template |
| [**getMyCatalogTemplates**](TemplatesCatalogApi.md#getMyCatalogTemplates) | **GET** /me/catalog/templates | Get my teams templates |
| [**setMicrosoftTeamsTeamTemplate**](TemplatesCatalogApi.md#setMicrosoftTeamsTeamTemplate) | **PUT** /catalog/templates/{template_id} | Set a Microsoft Teams team template |
| [**setMicrosoftTeamsTeamTemplatePermanentMembership**](TemplatesCatalogApi.md#setMicrosoftTeamsTeamTemplatePermanentMembership) | **PUT** /catalog/templates/{template_id}/permanent_membership | Set permanent members and owners of a Microsoft Teams team template |
| [**setMicrosoftTeamsTeamTemplatePermanentMembershipByRole**](TemplatesCatalogApi.md#setMicrosoftTeamsTeamTemplatePermanentMembershipByRole) | **PUT** /catalog/templates/{template_id}/permanent_membership/{role} | Set permanent members and owners of a Microsoft Teams team template |


<a name="getCatalogTemplates"></a>
# **getCatalogTemplates**
> CatalogTemplates getCatalogTemplates()

Get teams templates

    Get all the teams templates accessible in your organization. TIER 2️⃣ | ROLES - AUTHORIZED_APP, CATALOG_MANAGER, INTEGRATION_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CatalogTemplates**](../Models/CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMicrosoftTeamsTeamTemplate"></a>
# **getMicrosoftTeamsTeamTemplate**
> CatalogTemplate getMicrosoftTeamsTeamTemplate(template\_id)

Get a Microsoft Teams team template

    Get a Microsoft Teams team template by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **template\_id** | **String**| The Microsoft Teams team template ID | [default to null] |

### Return type

[**CatalogTemplate**](../Models/CatalogTemplate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMicrosoftTeamsTeamTemplatePermanentMembership"></a>
# **getMicrosoftTeamsTeamTemplatePermanentMembership**
> PermanentMembership getMicrosoftTeamsTeamTemplatePermanentMembership(template\_id)

Get permanent members and owners of a Microsoft Teams team template

    Get permanent members and owners of a Microsoft Teams team template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **template\_id** | **String**| The Microsoft Teams team template ID | [default to null] |

### Return type

[**PermanentMembership**](../Models/PermanentMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMicrosoftTeamsTeamTemplatePermanentMembershipByRole"></a>
# **getMicrosoftTeamsTeamTemplatePermanentMembershipByRole**
> List getMicrosoftTeamsTeamTemplatePermanentMembershipByRole(template\_id, role)

Get permanent members and owners of a Microsoft Teams team template

    Get permanent members or owners of a Microsoft Teams team template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **template\_id** | **String**| The Microsoft Teams team template ID | [default to null] |
| **role** | **String**| The Microsoft Teams ownership role (owners / members) | [default to null] |

### Return type

[**List**](../Models/PermanentMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMyCatalogTemplates"></a>
# **getMyCatalogTemplates**
> CatalogTemplates getMyCatalogTemplates()

Get my teams templates

    Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CatalogTemplates**](../Models/CatalogTemplates.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="setMicrosoftTeamsTeamTemplate"></a>
# **setMicrosoftTeamsTeamTemplate**
> CatalogTemplate setMicrosoftTeamsTeamTemplate(template\_id, CatalogTemplate)

Set a Microsoft Teams team template

    Set a Microsoft Teams team template by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **template\_id** | **String**| The Microsoft Teams team template ID | [default to null] |
| **CatalogTemplate** | [**CatalogTemplate**](../Models/CatalogTemplate.md)| A JSON representation of a Microsoft Teams team template. | |

### Return type

[**CatalogTemplate**](../Models/CatalogTemplate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="setMicrosoftTeamsTeamTemplatePermanentMembership"></a>
# **setMicrosoftTeamsTeamTemplatePermanentMembership**
> PermanentMembership setMicrosoftTeamsTeamTemplatePermanentMembership(template\_id, PermanentMembership)

Set permanent members and owners of a Microsoft Teams team template

    Set permanent members and owners of a Microsoft Teams team template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **template\_id** | **String**| The Microsoft Teams team template ID | [default to null] |
| **PermanentMembership** | [**PermanentMembership**](../Models/PermanentMembership.md)| A JSON representation of a Microsoft Teams team template permanent membership settings. | |

### Return type

[**PermanentMembership**](../Models/PermanentMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="setMicrosoftTeamsTeamTemplatePermanentMembershipByRole"></a>
# **setMicrosoftTeamsTeamTemplatePermanentMembershipByRole**
> List setMicrosoftTeamsTeamTemplatePermanentMembershipByRole(template\_id, role, PermanentMember)

Set permanent members and owners of a Microsoft Teams team template

    Set permanent members or owners of a Microsoft Teams team template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **template\_id** | **String**| The Microsoft Teams team template ID | [default to null] |
| **role** | **String**| The Microsoft Teams ownership role (owners / members) | [default to null] |
| **PermanentMember** | [**List**](../Models/PermanentMember.md)| A JSON representation of a Microsoft Teams team template permanent members. | |

### Return type

[**List**](../Models/PermanentMember.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

