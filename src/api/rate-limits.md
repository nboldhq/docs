---
status: published
author: Guillaume Meyer
tags:
- api
- rate
- limits
position: 7

---
# Rate Limits

**ABSTRACT**  
nBold API allows you to access data and to perform operations on multiple services. These services impose their own rate limits that affect applications that use nBold API to access them.

---

**TABLE OF CONTENTS**  
[[toc]]

---

## Overview of rate limit tiers
Rate limits are defined as "tiers" applied on a "per user (or app) per tenant" basis.

::: warning Note
The specific limits described here are subject to change.
:::

| Feature/API | Limit | Notes |
|-------------|-------|-------|
| <Badge text="Tier 1" type="error" vertical="middle"/> | 6 per minute | Access tier 1 methods infrequently. A small amount of burst behavior is tolerated. |
| <Badge text="Tier 2" type="warning" vertical="middle"/> | 20 per minute | Access tier 2 methods on a regular basis. Allowed for occasional bursts of more requests. |
| <Badge text="Tier 3" type="tip" vertical="middle"/> | 60 per minute | Tier 3 methods allow a larger number of requests and are typically attached to methods with paginating collections of resources. Sporadic bursts are welcome. |

## What happens when your is exceeding a limit?

When a threshold is exceeded, nBold API limits any further requests from that client for a period of time. When throttling occurs, nBold API returns HTTP status code 429 (Too many requests), and the requests fail.

See the [Throttling Guidance](/api/throttling) article to understand how to properly handle throttled requests.

