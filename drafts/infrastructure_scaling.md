# Advanced Deployment <Badge text="draft" type="error"/>

## Prepare to Scale

How do we prevent beeing throttled by Microsoft?

MS has many throttling rules, some documented and some not.

To forestall throttling, the first tactic is to do everything we can to avoid to reach limits. To do so, we’re using a rate limiter that supports clustering, an application component that acts as a proxy between nBold and the Microsoft Graph, that intelligently limits the number of requests to a specific rate, defined specifically for each endpoint.

Second level of prevention, the number of “Workers” could be increased, each worker using a specific app registration ID. This is from our experience, a great way to prevent throttling.​

Third level of prevention, we’re using massively the “Batch Requests” technique, that enables us to send multiple Graph requests in one batch.​

How could you scale the nBold platform?

Despite all the prevention techniques we may use, some nBold workers may be throttled for certain operations. In fact, it already happens multiple times every day at some point in our SAAS production environment, without noticeable impact for our end-users.​

First step is to properly handle the throttling responses headers from the Microsoft Graph, that clearly indicates (at least for most of the endpoints…) how long to wait before retrying the operation. For the endpoints that don’t support this mechanism (for instance, Teams endpoints that rely on Exchange or SharePoint as a back-end service, Planner APIs…), we’ve implemented our own retry policy based on our historical data.​

Of course, this tactic wouldn’t work properly without our highly resilient and distributed message queuing system.​

Lastly, as we’ve mentioned earlier, we always assume the Microsoft Graph may fail or respond with an inconsistent message. For instance, when we’re provisioning a new private channel in Teams, we’re always testing that its related drive is accessible before moving forward, to be sure that all the underlying services (in that case SharePoint) performed their own provisioning operations properly.​

These advanced consistency controls are based on our extensive experience developing production solutions for the Microsoft Graph.​
