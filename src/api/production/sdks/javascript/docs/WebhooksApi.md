# NBoldApi.WebhooksApi

All URIs are relative to *https://api.nbold.co/production*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHook**](WebhooksApi.md#createHook) | **POST** /hooks | Create a new webhook
[**deleteHook**](WebhooksApi.md#deleteHook) | **DELETE** /hooks/{hookId} | Delete a webhook
[**generateHookSignature**](WebhooksApi.md#generateHookSignature) | **POST** /hooks/signature | Generate a signature from a secret and a webhook payload
[**getHooksEvents**](WebhooksApi.md#getHooksEvents) | **GET** /hooks/events | Get webhooks events



## createHook

> Hook createHook(hookPayload)

Create a new webhook

Create a new webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.WebhooksApi();
let hookPayload = new NBoldApi.HookPayload(); // HookPayload | A HookPayload object.
apiInstance.createHook(hookPayload, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookPayload** | [**HookPayload**](HookPayload.md)| A HookPayload object. | 

### Return type

[**Hook**](Hook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteHook

> Hook deleteHook(hookId)

Delete a webhook

Delete a webhook. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.WebhooksApi();
let hookId = "hookId_example"; // String | ID of the webhook to be deleted.
apiInstance.deleteHook(hookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookId** | **String**| ID of the webhook to be deleted. | 

### Return type

[**Hook**](Hook.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateHookSignature

> HookSignature generateHookSignature(hookSignatureRequest)

Generate a signature from a secret and a webhook payload

Generate a signature from a secret and a webhook payload. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.WebhooksApi();
let hookSignatureRequest = new NBoldApi.HookSignatureRequest(); // HookSignatureRequest | A HookSignatureRequest object comprised of the secret and payload.
apiInstance.generateHookSignature(hookSignatureRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookSignatureRequest** | [**HookSignatureRequest**](HookSignatureRequest.md)| A HookSignatureRequest object comprised of the secret and payload. | 

### Return type

[**HookSignature**](HookSignature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHooksEvents

> HooksEvents getHooksEvents()

Get webhooks events

Get webhooks events. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example

```javascript
import NBoldApi from 'n_bold_api';
let defaultClient = NBoldApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NBoldApi.WebhooksApi();
apiInstance.getHooksEvents((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**HooksEvents**](HooksEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

