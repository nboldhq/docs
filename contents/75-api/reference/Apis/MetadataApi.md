# MetadataApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**queryMetadata**](MetadataApi.md#queryMetadata) | **POST** /metadata/{namespace}/query | Query metadata |


<a name="queryMetadata"></a>
# **queryMetadata**
> List queryMetadata(namespace, body)

Query metadata

    Query metadata for a specific namespace. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **namespace** | **String**| The metadata namespace. | [default to null] |
| **body** | **Object**| Supply a JSON representation of your query. | |

### Return type

[**List**](../Models/MetadataQueryResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

