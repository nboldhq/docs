# Rate limits

The nBold API allows you to access data and to perform operations on multiple services. These services impose their own rate limits that affect applications that use nBold API to access them.

## Overview of rate limit tiers
Rate limits are defined as "tiers" applied on a "per user (or app) per tenant" basis.

⚠️ The specific limits described here are subject to change.

| Tier | Code | Limit | Window |
|------|------|-------|--------|
| Tier 1 | `tier-1` | 6 | 1 minute |
| Tier 2 | `tier-2` |  20 | 1 minute |
| Tier 3 | `tier-3` |  60 | 1 minute |
| Fair Use | `fair-use` | 600 | 1 minute |

Each operation in this documentation specifies its rate limits as a tier through the `x-nbold-rate-limit` extension.

## What happens when your is exceeding a limit?

When a threshold is exceeded, nBold API limits any further requests from that client for a period of time. When throttling occurs, nBold API returns HTTP status code 429 (Too many requests), and the requests fail.

Throttling limits the number of concurrent calls to a service to prevent overuse of resources. nBold API is designed to handle a high volume of requests. If an overwhelming number of requests occurs, throttling helps maintain optimal performance and reliability of the nBold API service.

Throttling limits vary based on the scenario. For example, if you are performing a large volume of writes, the possibility for throttling is higher than if you are only performing reads.

nBold API is conforming to the [IETF ratelimit standardization proposal](https://tools.ietf.org/id/draft-polli-ratelimit-headers-01.html).

💡 Note:
Throttling behavior can depend on the type and number of requests. For example, if you have a high volume of requests, all requests types are throttled. Threshold limits vary based on the request type. Therefore, you could encounter a scenario where writes are throttled but reads are still permitted.

## Common throttling scenarios

The most common causes of throttling of clients include:
- A large number of requests across all applications in a our environments.
- A large number of requests from a particular application across all environments.

## Best practices to avoid throttling

Programming patterns like continuously polling a resource to check for updates and regularly scanning resource collections to check for new or deleted resources are more likely to lead to applications being throttled and degrade overall performances.

Before any throttling, nBold API provides two useful headers included in every responses so that you can monitor your own activity level:
- `X-RateLimit-Limit`: The limit of requests in a perdiod of time (aka "window")
- `X-RateLimit-Remaining`: The current number of requests that could be made during the current window.

## Best practices to handle throttling

The following are best practices for handling throttling:

- Reduce the number of operations per request.
- Reduce the frequency of calls.
- Avoid immediate retries, because all requests accrue against your usage limits.

When you implement error handling, use the HTTP error code 429 to detect throttling. The failed response includes the `Retry-After` response header. Backing off requests using the `Retry-After` delay is the fastest way to recover from throttling because nBold API continues to log resource usage while a client is being throttled.

1. Wait the number of seconds specified in the `Retry-After` header.
2. Retry the request.
3. If the request fails again with a 429 error code, you are still being throttled. Continue to use the recommended `Retry-After` delay and retry the request until it succeeds.

💡 Note:
If no `Retry-After` header is provided by the response, we recommend implementing an exponential backoff retry policy.

In addition to the `Retry-After` header, nBold API includes `X-RateLimit-Limit` and `X-RateLimit-Remaining` infos in the body of the throttled response:
```yaml
{
  message: 'Too many requests, please try again later...',
  rateLimitExceeded: {
    tier: 'tier-1', # Tier code
    rateLimitWindow: 60000, # In ms
    rateLimitMax: 6 # In # of requests
  }
}
```
