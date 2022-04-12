# MicrosoftTeamsChannelsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeamsChannelNamespaceMetadata**](MicrosoftTeamsChannelsApi.md#getTeamsChannelNamespaceMetadata) | **GET** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Get a channel metadata
[**setMicrosoftTeamsChannelNamespaceMetadata**](MicrosoftTeamsChannelsApi.md#setMicrosoftTeamsChannelNamespaceMetadata) | **POST** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Set channel metadata
[**updateMicrosoftTeamsChannelNamespaceMetadata**](MicrosoftTeamsChannelsApi.md#updateMicrosoftTeamsChannelNamespaceMetadata) | **PATCH** /teams/{teamId}/channels/{channelId}/metadata/{namespace} | Update a channel metadata


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

