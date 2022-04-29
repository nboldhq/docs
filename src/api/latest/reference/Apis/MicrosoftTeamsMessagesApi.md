# MicrosoftTeamsMessagesApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMicrosoftTeamsMessageNamespaceMetadata**](MicrosoftTeamsMessagesApi.md#getMicrosoftTeamsMessageNamespaceMetadata) | **GET** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Get a message metadata
[**setMicrosoftTeamsMessageNamespaceMetadata**](MicrosoftTeamsMessagesApi.md#setMicrosoftTeamsMessageNamespaceMetadata) | **POST** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Set message metadata
[**updateMicrosoftTeamsMessageNamespaceMetadata**](MicrosoftTeamsMessagesApi.md#updateMicrosoftTeamsMessageNamespaceMetadata) | **PATCH** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Update a message metadata


<a name="getMicrosoftTeamsMessageNamespaceMetadata"></a>
# **getMicrosoftTeamsMessageNamespaceMetadata**
> Object getMicrosoftTeamsMessageNamespaceMetadata(team\_id, channel\_id, message\_id, namespace)

Get a message metadata

    Get metadata for a message for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team\_id** | **String**| The team ID. | [default to null]
 **channel\_id** | **String**| The channel ID. | [default to null]
 **message\_id** | **String**| The message ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="setMicrosoftTeamsMessageNamespaceMetadata"></a>
# **setMicrosoftTeamsMessageNamespaceMetadata**
> Object setMicrosoftTeamsMessageNamespaceMetadata(team\_id, channel\_id, message\_id, namespace, body)

Set message metadata

    Set message metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team\_id** | **String**| The team ID. | [default to null]
 **channel\_id** | **String**| The channel ID. | [default to null]
 **message\_id** | **String**| The message ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]
 **body** | **Object**| Supply a JSON representation of your metadata. |

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateMicrosoftTeamsMessageNamespaceMetadata"></a>
# **updateMicrosoftTeamsMessageNamespaceMetadata**
> Object updateMicrosoftTeamsMessageNamespaceMetadata(team\_id, channel\_id, message\_id, namespace, body)

Update a message metadata

    Update a message metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team\_id** | **String**| The team ID. | [default to null]
 **channel\_id** | **String**| The channel ID. | [default to null]
 **message\_id** | **String**| The message ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]
 **body** | **Object**| Supply a JSON representation of your metadata. |

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

