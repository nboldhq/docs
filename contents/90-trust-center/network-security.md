---
position: "4"
status: published
tags: []
author: Guillaume Meyer

---
# Network Security

We understand how important the concept of compliance and security is and   
we also understand that our customers need to be confident that they are communicating with nBold in a secure environment. This document outlines the key aspects of our network security.

## Communication security

### Traffic encryption

All the traffic from and to the nBold platform is encrypted (and HTTPS protocol enforced), using [TLS v1.2](https://github.com/ssllabs/research/wiki/SSL-and-TLS-Deployment-Best-Practices), ensuring secure communication between our customers and our platform. To do so, we’re using Azure Front Door as the only entry point to the app (web apps and API).

You can review online our latest [Certificate Report](https://assets.nbold.io/audits/certificates/certificate_report_application_domain.log)

:::tip Online SSL Test
You can see a detailed report of our SSL certificate using this free online service that performs a deep analysis of the configuration of our SSL:  
[Launch Qualys SSL Server Test](https://www.ssllabs.com/ssltest/analyze.html?d=app.salestim.io)
:::

### DDoS prevention

While we've prevented rogue traffic from accessing our servers and network, it’s still possible for external services to block anyone else from using our service by creating a distributed, denial-of-service attack.  
To prevent this, we're using Azure Traffic Manager as a first level of protection.  
Learn more about [Azure Traffic Manager](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview)

## Trusted domains

Domains allow list is one of the most effective methods of ensuring this and prevents any internet traffic intended for nBold from being hijacked or rerouted to a rogue website.

Our complete portfolio of domains is outlined below to help our customers configure their corporate network security components.

:::caution Note
This information is subject to change and we recommend that you check back quarterly for the addition of new domains.
:::

### nBold App and API

* Domains/Hosts: ***.salestim.io**
* Justification/Purpose: nBold main web application for Microsoft Teams

### nBold Documentation

* Domains/Hosts: ***.nbold.co**
* Justification/Purpose: nBold documentation embedded into the Microsoft Teams app

### Microsoft Azure Application Insight

* Domains/Hosts:
  * **az416426.vo.msecnd.net**
  * **dc.services.visualstudio.com**
* Justification/Purpose: Azure service used by nBold to collect anonymous performance metrics, telemetry and application logs/traces. [More infos](https://docs.microsoft.com/en-us/azure/azure-monitor/app/ip-addresses)

### Microsoft Azure Blob Storage

* Domains/Hosts: **stappsaprd.blob.core.windows.net**
* Justification/Purpose: Storage used by nBold to store templates pictures/icons

### Microsoft Graph API

* Domains/Hosts: **graph.microsoft.com**
* Justification/Purpose: API used by nBold to interact with Microsoft 365 services

### Intercom

* Domains/Hosts:
  * ***.intercom.com**
  * ***.intercom.io**
  * ***.intercomassets.com**
  * ***.intercomcdn.com**
* Justification/Purpose: Used by nBold to bring an embedded support system into the app, and connect end-users and administrators with our support team.

## IP ranges allow list

IP ranges allow list is one of the most effective methods of ensuring this and prevents any internet traffic intended for nBold from being hijacked or rerouted to a rogue website.

Our public app and API services are exposed and protected by Microsoft Azure Front Door. Therefore our public IP ranges are publicly documented by Microsoft.

:::caution Note
This information is subject to change and we recommend that you check back quarterly for the addition or update of IP ranges.
:::

### Manual download

To retrieve them:

* Download the [Azure IP Ranges and Service Tags](https://www.microsoft.com/en-us/download/details.aspx?id=56519) `json` file.
* Locate the `AzureFrontDoor.Frontend` entry
* Get IP ranges from the `addressPrefixes` property.

You can also automate the extraction of these IP ranges, using one of these three options.

### Automate via REST interface

``` sh
curl https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/serviceTags?api-version=2020-07-01
```

### Automate via Powershell

``` powershell
Get-AzNetworkServiceTag -Location <String>
```

### Automate via az cli

``` sh
az network list-service-tags --location [--subscription]
```