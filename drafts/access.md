---
status: published
author: Guillaume Meyer
tags:
- api
- authentication
- token
position: 2
---

# Communication & Network Security

## Network diagram
In order to prepare your organization's network for nBold, here is an overview of the the different network flows involved:

<img src="/img/platform/networkDiagram.png" style="width: 800px;">

This diagram is comprised of three forms of traffic.  

### Regular Microsoft Teams flows (Purple lines)

The Microsoft Teams client has two main flows, one for authentication against your Azure AD and one for Microsoft API.  
**The flows are not impacted by nBold.**

### nBold's internal flows (Orange lines)

**These flows are entirely internal to nBold and have no impact on your network infrastructure.**

### Flows between your organization's network and the nBold platform (Green lines)

**All the traffic from and to the nBold platform uses HTTPS protocol on port 443.**  
Here is a short description of each flow:
1. *.salestim.io for the main app, *.nbold.co for online help contents
2. *.msecnd.net and *..visualstudio.com for performance metrics analysis
3. *.windows.net for blob cache storage
4. *.microsoft.com for Microsoft Graph API access

## Traffic encryption

All the traffic from and to the nBold platform is encrypted (and HTTPS protocol enforced), using [TLS v1.2](https://github.com/ssllabs/research/wiki/SSL-and-TLS-Deployment-Best-Practices), ensuring secure communication between our customers and our platform. To do so, we’re using Azure Front Door as the only entry point to the app (web apps and API).

You can review online our latest [Certificate Report](https://dist.salestim.io/audits/certificates/certificate_report_product_domain.log)

::: tip Online SSL Test
You can see a detailed report of our SSL certificate using this free online service that performs a deep analysis of the configuration of our SSL:  
[Launch Qualys SSL Server Test](https://www.ssllabs.com/ssltest/analyze.html?d=app.salestim.io)
:::

## DDoS prevention

While we've prevented rogue traffic from accessing our servers and network, it’s still possible for external services to block anyone else from using our service by creating a distributed, denial-of-service attack.  
To prevent this, we're using Azure Traffic Manager as a first level of protection.  
Learn more about [Azure Traffic Manager](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview)
