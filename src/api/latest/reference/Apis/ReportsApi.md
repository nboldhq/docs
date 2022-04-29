# ReportsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReportUrl**](ReportsApi.md#getReportUrl) | **GET** /reports/{resource_type}/{resource_id} | Get report secure URL
[**getReports**](ReportsApi.md#getReports) | **GET** /reports | Get reports
[**getReportsCategories**](ReportsApi.md#getReportsCategories) | **GET** /reports/categories | Get reports categories


<a name="getReportUrl"></a>
# **getReportUrl**
> ReportUrl getReportUrl(resource\_type, resource\_id)

Get report secure URL

    Get report secure URL

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource\_type** | **String**| The resource type (dashboard / question). | [default to null]
 **resource\_id** | **String**| The resource id. | [default to null]

### Return type

[**ReportUrl**](../Models/ReportUrl.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReports"></a>
# **getReports**
> List getReports()

Get reports

    Get reports

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Report.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReportsCategories"></a>
# **getReportsCategories**
> List getReportsCategories()

Get reports categories

    Get reports categories

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/ReportsCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

