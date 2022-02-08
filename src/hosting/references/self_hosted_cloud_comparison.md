# ⚔️ nBold Cloud vs Self-Hosted

> What’s the difference between nBold Cloud and Self-Hosted?

**There is only ONE version of nBold.**

Both our `nBold Cloud` and our `nBold Self-Hosted` products are completely equal. There’s NO version with a better or more complete feature set.

You get the same app, same compliance, same metrics and same commitment to respecting your privacy, security and compliance with both.

**Key differences**

Here are the key differences between `nBold Cloud` and `nBold Self-Hosted`:

| | Cloud | Self-hosted |
|---|---|---|
| **Hosting** | Easy and convenient. We manage everything for you so you don’t have to worry about anything. We take care of the installation, upgrades, containers, security, maintenance, uptime, stability, consistency, loading time and so on. | You do it all yourself. You need to get servers / containers and you need to install, maintain and manage nBold on servers / containers. You are responsible for installation, maintenance, upgrades, capacity, uptime, backup and so on. |
| **Storage** | We keep your data on Microsoft Azure in multiple isolated regions for both resiliency and compliance. | You have full control and can host nBold on any servers / containers in any country that you wish. Host it on servers / containers on-premises or host it with any cloud provider wherever you want.|
| **Raw data** | You can access all your data from our intuitive dashboard. N.B: You can only see the stats aggregated in the dashboard. | Hosting nBold yourself gives you the option to take the data directly from the database and import it to a data analysis tool of your choice. |
| **Network** | Everything is operated online and you only need an Internet access to access our secured cloud environment. | There is ZERO data transmitted between your environment (typically your own Azure tenant) and the nBold Cloud environment (nor with its subservice providers).<br>Your environment is self-contained, isolated, and only exposed through a reverse proxy such as Nginx, Azure Front Door or Azure Application Gateway.<br>As a matter of fact, you can even disable all outgoing access to the Internet, except for traffic between your environment and the Microsoft Identity Service and Microsoft Graph API endpoints. |
| **Costs** | We rely on a subscription based model. See our [pricing and plans](https://www.nbold.co/plans/). | Our subscription model applies equally to self-hosted instances.|
| **Releases** | Continuously developed and improved with new features and frequent updates. See our [changelog](https://dist.salestim.io/CHANGELOG) | Latest features won't be immediately available (as opposed to security fixes) as they're battled-tested in the cloud before released to self-hosted environments, but you can expect a new release at least every month.|
