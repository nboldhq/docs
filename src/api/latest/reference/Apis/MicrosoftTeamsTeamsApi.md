# MicrosoftTeamsTeamsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeamNamespaceMetadata**](MicrosoftTeamsTeamsApi.md#getTeamNamespaceMetadata) | **GET** /teams/{teamId}/metadata/{namespace} | Get a team metadata
[**setTeamNamespaceMetadata**](MicrosoftTeamsTeamsApi.md#setTeamNamespaceMetadata) | **POST** /teams/{teamId}/metadata/{namespace} | Set team metadata
[**updateTeamNamespaceMetadata**](MicrosoftTeamsTeamsApi.md#updateTeamNamespaceMetadata) | **PATCH** /teams/{teamId}/metadata/{namespace} | Update a team metadata


<a name="getTeamNamespaceMetadata"></a>
# **getTeamNamespaceMetadata**
> Object getTeamNamespaceMetadata(teamId, namespace)

Get a team metadata

    Get metadata for a team for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="setTeamNamespaceMetadata"></a>
# **setTeamNamespaceMetadata**
> Object setTeamNamespaceMetadata(teamId, namespace, body)

Set team metadata

    Set team metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]
 **body** | **Object**| Supply a JSON representation of your metadata. |

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateTeamNamespaceMetadata"></a>
# **updateTeamNamespaceMetadata**
> Object updateTeamNamespaceMetadata(teamId, namespace, body)

Update a team metadata

    Update a team metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]
 **body** | **Object**| Supply a JSON representation of your metadata. |

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

