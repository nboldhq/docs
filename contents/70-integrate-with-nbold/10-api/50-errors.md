# Errors

While your application should handle all error responses (in the 400 and 500 ranges), pay special attention to certain expected errors and responses, listed in the following table.

| Topic | HTTP code | Best practice|
|:------|:----------------|:-------------|
| User does not have access | 403 | If your application is up and running, it could encounter this error even if it has been granted the necessary permissions. In this case, it's most likely that the signed-in user or virtual app does not have privileges to access the resource requested. Your application should provide a generic "Access denied" error back to the signed-in user. |
|Not found| 404 | In certain cases, a requested resource might not be found. For example a resource might not exist, because it has not yet been provisioned or because it has been deleted. |
|Throttling|429|APIs might throttle at any time for a variety of reasons, so your application must **always** be prepared to handle 429 responses. This error response includes the `Retry-After` field in the HTTP response header. Backing off requests using the `Retry-After` delay is the fastest way to recover from throttling. For more information, see the [Rate-limit](https://docs.nbold.co/api#tag/Rate-limits) article.|
|Service unavailable| 503 | This is likely because the services is busy. You should employ a back-off strategy similar to 429. Additionally, you should **always** make new retry requests over a new HTTP connection.|

## Reliability and support
To ensure reliability and facilitate support for your application, generate a unique GUID and send it on each nBold API REST request. This will help nBold investigate any errors more easily if you need to report an issue with nBold API.
To do so, on every request to nBold API, generate a unique GUID, send it in the `client-request-id` HTTP request header, and also log it in your application's logs.
