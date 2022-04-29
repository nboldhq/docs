# MetadataApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMicrosoftTeamsMessageNamespaceMetadata**](MetadataApi.md#getMicrosoftTeamsMessageNamespaceMetadata) | **GET** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Get a message metadata
[**getTeamNamespaceMetadata**](MetadataApi.md#getTeamNamespaceMetadata) | **GET** /teams/{teamId}/metadata/{namespace} | Get a team metadata
[**getTeamsChannelNamespaceMetadata**](MetadataApi.md#getTeamsChannelNamespaceMetadata) | **GET** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Get a channel metadata
[**queryMetadata**](MetadataApi.md#queryMetadata) | **POST** /metadata/{namespace}/query | Query metadata
[**setMicrosoftTeamsChannelNamespaceMetadata**](MetadataApi.md#setMicrosoftTeamsChannelNamespaceMetadata) | **POST** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Set channel metadata
[**setMicrosoftTeamsMessageNamespaceMetadata**](MetadataApi.md#setMicrosoftTeamsMessageNamespaceMetadata) | **POST** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Set message metadata
[**setTeamNamespaceMetadata**](MetadataApi.md#setTeamNamespaceMetadata) | **PUT** /teams/{teamId}/metadata/{namespace} | Set team metadata
[**updateMicrosoftTeamsChannelNamespaceMetadata**](MetadataApi.md#updateMicrosoftTeamsChannelNamespaceMetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Update a channel metadata
[**updateMicrosoftTeamsMessageNamespaceMetadata**](MetadataApi.md#updateMicrosoftTeamsMessageNamespaceMetadata) | **PATCH** /teams/{team_id}/channels/{channel_id}/messages/{message_id}/metadata/{namespace} | Update a message metadata
[**updateTeamNamespaceMetadata**](MetadataApi.md#updateTeamNamespaceMetadata) | **PATCH** /teams/{teamId}/metadata/{namespace} | Update a team metadata


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

<a name="getTeamsChannelNamespaceMetadata"></a>
# **getTeamsChannelNamespaceMetadata**
> Object getTeamsChannelNamespaceMetadata(teamId, channelId, namespace)

Get a channel metadata

    Get metadata for a channel for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **channelId** | **String**| The channel ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="queryMetadata"></a>
# **queryMetadata**
> List queryMetadata(namespace, body)

Query metadata

    Query metadata for a specific namespace. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| The metadata namespace. | [default to null]
 **body** | **Object**| Supply a JSON representation of your query. |

### Return type

[**List**](../Models/MetadataQueryResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="setMicrosoftTeamsChannelNamespaceMetadata"></a>
# **setMicrosoftTeamsChannelNamespaceMetadata**
> Object setMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body)

Set channel metadata

    Set channel metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **channelId** | **String**| The channel ID. | [default to null]
 **namespace** | **String**| The metadata namespace. | [default to null]
 **body** | **Object**| Supply a JSON representation of your metadata. |

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
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

<a name="setTeamNamespaceMetadata"></a>
# **setTeamNamespaceMetadata**
> Object setTeamNamespaceMetadata(teamId, namespace, body)

Set team metadata

    Set team metadata for a specific namespace. N.B Using the PUT method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

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

<a name="updateMicrosoftTeamsChannelNamespaceMetadata"></a>
# **updateMicrosoftTeamsChannelNamespaceMetadata**
> Object updateMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body)

Update a channel metadata

    Update a channel metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **channelId** | **String**| The channel ID. | [default to null]
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

