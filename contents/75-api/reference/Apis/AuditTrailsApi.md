# AuditTrailsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAuditTrailRecords**](AuditTrailsApi.md#getAuditTrailRecords) | **GET** /audit_trails/{code}/records | Get all the records from an audit trail |
| [**getAuditTrails**](AuditTrailsApi.md#getAuditTrails) | **GET** /audit_trails/events | Get audit trails |


<a name="getAuditTrailRecords"></a>
# **getAuditTrailRecords**
> AuditTrailRecords getAuditTrailRecords(code)

Get all the records from an audit trail

    Get all the records from an audit trail. TIER 2 | ROLES - AUTHORIZED_APP, COMPLIANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | **String**| The audit trail code. | [default to null] |

### Return type

[**AuditTrailRecords**](../Models/AuditTrailRecords.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAuditTrails"></a>
# **getAuditTrails**
> AuditTrails getAuditTrails()

Get audit trails

    Get all the audit trails accessible in your organization. TIER 3 | ROLES - AUTHORIZED_APP, COMPLIANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuditTrails**](../Models/AuditTrails.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

