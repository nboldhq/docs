# WebhooksApi

All URIs are relative to *https://api.nbold.co/production*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHook**](WebhooksApi.md#createHook) | **POST** /hooks | Create a new webhook
[**deleteHook**](WebhooksApi.md#deleteHook) | **DELETE** /hooks/{hookId} | Delete a webhook
[**generateHookSignature**](WebhooksApi.md#generateHookSignature) | **POST** /hooks/signature | Generate a signature from a secret and a webhook payload
[**getHooksEvents**](WebhooksApi.md#getHooksEvents) | **GET** /hooks/events | Get webhooks events


<a name="createHook"></a>
# **createHook**
> Hook createHook(HookPayload)

Create a new webhook

    Create a new webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HookPayload** | [**HookPayload**](../Models/HookPayload.md)| A HookPayload object. |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteHook"></a>
# **deleteHook**
> Hook deleteHook(hookId)

Delete a webhook

    Delete a webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookId** | **String**| ID of the webhook to be deleted. | [default to null]

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="generateHookSignature"></a>
# **generateHookSignature**
> HookSignature generateHookSignature(HookSignatureRequest)

Generate a signature from a secret and a webhook payload

    Generate a signature from a secret and a webhook payload. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HookSignatureRequest** | [**HookSignatureRequest**](../Models/HookSignatureRequest.md)| A HookSignatureRequest object comprised of the secret and payload. |

### Return type

[**HookSignature**](../Models/HookSignature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getHooksEvents"></a>
# **getHooksEvents**
> HooksEvents getHooksEvents()

Get webhooks events

    Get webhooks events. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters
This endpoint does not need any parameter.

### Return type

[**HooksEvents**](../Models/HooksEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

