# Data management policy

We understand that our customers need to be confident using our application, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Application data

Through the implementation of its different features, the application access, processes and stores several kind of data:
- [User profiles](#user-profiles)
- [Organization settings](#organization-settings)
- [Templates Catalog](#templates-catalog)
- [User requests](#user-requests)
- [Teams data](#teams-data)

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Cached for 1h.<br/>Stored as long as the organization is active. |
| Organization settings | ✔ | ✔ | ✔ | Accessed and updated after each admin login.<br/>Cached for 24h.<br/>Stored as long as the organization is active. |
| Templates catalog | ✔ | 🚫 | ✔ | Accessed by the web client and during provisioning operations.<br/>Stored as long as the organization is active. |
| User requests | ✔ | 🚫 | ✔ | Accessed by the web client and during provisioning operations.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Planner tabs | ✔ | 🚫 | 🚫 | Accessed during cloning operations.<br/>No cache.<br/>No storage. |
| Other tabs | ✔ | 🚫 | 🚫 | Tabs configurations are accessed during cloning, without access to tabs contents.<br/>No cache.<br/>No storage. |

::: tip
As you can see, we're not storing (nor in cache nor in database) any team content as part of our provisioning process. Teams data are processed in memory and not persisted.
:::

### User profiles

The application stores a subset of Office 365 user profiles in our caching platform, in order to target templates through our audience targeting feature.

::: warning Email address usage
Email address are used solely to identify users and apply audience targeting rules, and never to sollicit users directly for marketing purposes.
:::

Sample:
``` javascript
{
  "id": "", // nBold internal user ID
  "userLicense": "", // nBold user licence
  "msUserId": "", // Active Directory user ID
  "msTenantId": "", // Active Directory tenant ID
  "msUPN": "", // Active Directory user UPN
  "msCompanyName": "", // Company name
  "msEmail": "", // Active Directory user email
  "msDisplayName": "", // Active Directory user display name
  "msGivenName": "", // Active Directory user first name
  "msCountry": "", // Country
  "msPreferredLanguage": "", // Office 365 Preferred language
  "msDepartment": "", // Department  
  "msCity": "", // City
  "msJobTitle": "", // // Job title
  "msSurname": "", // Active Directory user last name
  "msUsageLocation": "" // Office 365 usage location
}
```

User profiles are updated during each login, and stored as long as the organization is active.

::: tip
User profiles could be deleted upon simple request.
If you have any questions about this section or our data practices generally, please contact us at [support@nbold.co](mailto:support@nbold.co)
:::

### Organization settings

nBold stores organization's settings as part of its application data.  

Sample:
``` javascript
{
  "id": "", // nBold internal organization ID
  "customerLicense": "", // nBold organization license
  "msTenantId": "", // Active Directory tenant ID
  "msTenantInitialDomainName": "", // Office 365 initial domain name (e.g. domain.onmicrosoft.com) 
  "msTenantDefaultDomainName": "", // Office 365 default domain name
  "crmProvider": {
    "id": "", // nBold CRM provider ID
    "apiVersion": "", // nBold CRM provider API version
    "crmTenantId": "", // nBold CRM provider instance ID
  },
  "msServiceAccountId": "", // Active Directory service account ID
  "msServiceAccountName": "", // Active Directory service account name
  "msServiceAccountUpn": "" // Active Directory service account UPN
}
```

Organization settings are updated during each administrator login, and stored as long as the organization is active.

::: tip
Organization settings could be deleted upon simple request.
If you have any questions about this section or our data practices generally, please contact us at [support@nbold.co](mailto:support@nbold.co)
:::

### Templates Catalog

nBold stores organization's settings as part of its application data.  

Sample:
``` javascript
{
  "templateConfiguration": {
      "approval": {
          "requireApproval": "" // Approval settings
      },
      "audienceTargeting": { // Audience targeting settings
          "enabled": "",
          "rules": ""
      },
      "id": "", // Template ID
      "name": "",  // Template name
      "description": "", // Template description
      "pictureUrl": "",  // Template picture URL
      "language": "", // Template language
      "enabled": ""  // Template enabled/disabled
  },
  "clonedTeam": {
      "teamId": "", // Cloned team ID
      "teamName": "", // Cloned team name
      "includeApps": "", // Apps cloning settings
      "includeTabs": "", // Tabs cloning settings
      "includeSettings": "", // Settings cloning settings
      "includeChannels": "", // Channels cloning settings
      "includeMembers": "" // Members cloning settings
  },
  "newTeam": {
      "namingConvention": "", // Team naming convention
      "emailConvention": "",  // Team email convention
      "descriptionConvention": "",  // Team description convention
      "welcomeMessageConvention": "",  // Team welcome message convention
      "defaultName": "",  // Team default name
      "defaultDescription": "",  // Team default description
      "defaultWelcomeMessage": "",  // Team default welcome message
      "teamPrivacy": "", // Team privacy
      "addRequesterAsTeamOwner": "" // Set the requester as an owner
  }
}
```

Templates catalog is stored as long as the organization is active.

::: tip
Template catalog could be deleted upon simple request.
If you have any questions about this section or our data practices generally, please contact us at [support@nbold.co](mailto:support@nbold.co)
:::

### User requests

nBold stores users requests as part of its application data.  

``` javascript
{
  "team": {
      "name": "", // Requested team name
      "description": "", // Requested team  description
      "welcomeMessage": "", // Requested team welcome message
      "pictureUrl": "" // Requested team picture URL
  },
  "template": {
      "id": "", // Template ID
      "name": "", // Template name
      "description": "" // Template description
  },
  "request": {
      "requester": {
          "id": "", // Requester ID
          "name": "", // Requester name
          "email": "" // Requester email
      },
      "date": "",
      "status": {
          "code": "", // Request status code
          "label": "", // Request status label
          "messages": [ ], // Request audit trail
          "approval": {
              "date": "", // Request approval date
              "required": "", // Request approval is required or not
              "approver": {
                  "id": "", // Request aprover ID
                  "name": "", // Request approver name
                  "email": "" // Request approver email
              }
          }
      }
  }
}
```

User requests are stored as long as the organization is active.

::: tip
User requests could be deleted upon simple request.
If you have any questions about this section or our data practices generally, please contact us at [support@nbold.co](mailto:support@nbold.co)
:::

### Teams data

As part of its provisionning feature, the application may access, process or store temporarily or permanently certain metadata or data.

#### Teams conversations

The application NEVER access, process or store teams conversations.

#### Teams files

The application NEVER access, process or store teams files tabs contents (Files metadata, files contents, folders...), as the cloning process from a template to the provisionned team is effectively implemented through a standard Microsoft Graph operation, that doesn't require nBold to access files.

#### Planner tabs

The application reads plans contents (Plans, buckets, tasks, categories) from the template to clone plans contents during the provisionning process.
Plans contents are only processed IN MEMORY and NEVER stored, nor in cache nor permenently in a database.

#### Other tabs

The application reads tabs metadata (Tab name and configuration) from the template to clone tabs during the provisionning process, but doesn't access their contents.
Tabs metadata are only processed IN MEMORY and NEVER stored, nor in cache nor permenently in a database.

## Metadata Collection

In addition to core application data, the application collects metadata to help us understand how the product is being used and what kinds of errors, such as sign-in errors, have occurred. This information helps us understand usage patterns, plan new features, and troubleshoot and fix problem areas.

Collected metadata falls into these four categories:
-  [Census data](#census-data)
-  [Usage data](#usage-data)
-  [Support data](#support-data)
-  [Error reporting data](#error-reporting-data)

## Census data
Census data is acquired solely to provide, support, and improve the application. It includes environmental information such as device and operating system versions, and regional and language settings. Here are some specific examples of the census data that's collected:

| Data type | Example | Notes |
|-----------|---------|-------|
| DeviceModel | iPhone | |
| OSName | iPhoneiOS | |
| OSVersion | 8.3 | |
| UserLanguage | EN-US | |
| UserID | E296D735-4F36-4E18-7C3B-52E1A02A0164 | The application automatically generates anonymous user IDs, then populates telemetry events with these IDs as they're sent from the app. A hashing ensures the ID cannot be linked to a specific user. |
| Session ID | 5E872200-F546-4CCD-8F23-AF5F507AA2DD | The application automatically generates anonymous session IDs, then populates telemetry events with these IDs as they're sent from your app. A hashing ensures the ID cannot be linked to a specific user. |

These anonymous data are collected through the Azure Application Insights service.  
For reference, see [Usage analysis with Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/usage-overview)


In addition, we're collecting anonymous network latency measurements (aka Real User Measurements) through the Azure Traffic Manager service to apply load-balancing rules more effectively.  
For reference, see [How to send Real User Measurements to Azure Traffic Manager using web pages](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-create-rum-web-pages)

::: tip
Census data DOES NOT contain any information that identifies your organization or users.
:::

::: warning
Census data collection is on by default and cannot be turned off by admins or end users.
:::


## Usage data

Usage data includes information such as requests status, teams provisioning, approval status, frequency of features used, and stability issues.

Usage data contains information that identifies your organization, such as domain names, and your users. Here are some specific examples of the usage data that are collected:

```javascript
{
  request_created: {
    request_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD',
    team_name: 'TEAM_NAME',
    request_additionalMembers: '5',
    request_additionalOwners: '3',
    template_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD',
    template_name: 'TEMPLATE_NAME'
  },
  request_approved: {
    request_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD'
  },
  request_rejected: {
    request_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD'
  },
  request_processed: {
    request_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD'
  },
  request_error: {
    request_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD'
  },
  team_created: {
    team_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD',
    team_name: 'TEAM_NAME',
    template_id: '5E872200-F546-4CCD-8F23-AF5F507AA2DD',
    template_name: 'TEMPLATE_NAME'
  }
}
```      

::: warning
Usage data DOES contain information that identifies your organization and users.
:::

::: warning
Usage data collection is on by default and cannot be turned off by admins or end users.
:::

Usage data are processed in two ways:
* We are processing anonymous usage data to understand how our customers are using the application.
* We are processing non-anonymous usage data to create in-app usage dashboards and audit trails for our customers administrators.

## Support data

Support data includes information such as user UPN, tenant ID, app version. Access to these data is restricted to our support team, and is only used in case of a direct support request to our support team.

Support data contains information that identifies your organization, such as contoso.com, and your users. Here are some specific examples of the usage data that's collected, for three distinct kinds of profiles.

### Identified (Using the application inside Microsoft Teams, not yet logged)
Data collected at user level:
```javascript
{
  "intercomId": '', // User UPN
  "intercomEmail": '', // User UPN
  "locale": 'EN-US', // User current language
  "msTenantId": '', // Organization tenant ID
  "msUpn": '', // User UPN
  "theme": 'Dark', // Current Teams theme
  "msUserId": '', // Active Directory user ID
  "environment": 'production',
  "version": '1.2'
}
```

### Authenticated (Using the application inside Microsoft Teams, logged)
Data collected at user level:
```javascript
{
  "intercomId": '', // User UPN
  "intercomEmail": '', // User email
  "userId": '', // Application generated ID
  "customerId": '', // Application generated ID
  "msEmail": '', // User email
  // ...
  // Other user profiles infos used for audience targeting
  // ...
  "tld": 'contoso.com',
  "name": 'Alice Hawking',
  "msLocale": 'EN-US',
  "license": 'pro',
  "msIsTenantAdmin": false
}
```

Data collected at company level:
```javascript
{
  "companyId": '', // Application generated ID
  "companyName": '', // InitialDomainName
  "msTenantId": '',
  "msTenantInitialDomain": '', //InitialDomainName
  "msTenantDefaultDomain": '' // DefaultDomainName
  "license": 'enterprise'
}
```

::: warning
Usage data DOES contain information that identifies your organization and users.  
But we're not storing any [Sensitive Personal Data](https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/legal-grounds-processing-data/sensitive-data/what-personal-data-considered-sensitive_en)
:::

::: warning
Usage data collection is on by default and cannot be turned off by admins or end users.
:::

## Error reporting data

Error reporting data can include information about performance and reliability, device configuration, network connection quality, error codes, error logs, and exceptions.

### Log files lifecycle

1. Logs entries are generated from each application container.
2. Each new log entry is stored:
  - In a *.log file
  - In Azure application Insights as a new trace
3. Every hour, log files are persisted in our GitHub Ops environment for reference and further analysis.
4. Every 15 days, logs files are rotated and older log files deleted.

::: warning
Error reporting data may also contain personally identifiable information such as the user's IP address.
:::

::: warning
Error reporting data collection is on by default and cannot be turned off by admins or end users.
:::

## Data Residency

The application relies entirely on the Microsoft Azure platform.  
Here is a summary of the key architecture components and their associated data residency:

| Service | Role | Data Location |
|---------|------|---------------|
| Azure Traffic Manager | Azure Traffic Manager is a DNS-based traffic load balancer that enables us to distribute traffic optimally to services across global Azure regions. | By definition, this service is located in multiple regions globally, but doesn't store any data. |
| Azure App Service | The application is hosted as a containerized app on Linux containers, enabling vertical and horizontal scale-up based on application needs and reach high availability. | **France Central** |
| Azure Application Insights | Application Insights is an extensible Application Performance Management (APM). We're using it to monitor our live production environments, gather telemetry such as performance counters, Azure diagnostics, and diagnostic trace logs. | **France Central** |
| Azure Cache for Redis | Azure Cache for Redis is based on the popular software [Redis](https://redis.io/). It is used as a cache mechanism to improve the performance and scalability of the application, especially for back-end data store access and external APIs requests. | **France Central** |
| Azure Cosmos DB | Azure Cosmos DB is a globally distributed, multi-model database service that supports document, key-value, wide-column, and graph databases. The application relies on it as the main back-end data store. | Read Locations: **France Central**.  Write Locations: **France Central** |
| Azure Key Vault | Microsoft Azure Key Vault is a cloud-hosted management service that allows the application to encrypt keys and small secrets by using keys that are protected by hardware security modules (HSMs). The application relies on it to store securely its encryption keys. | **France Central** |
| Azure Blob Storage | Azure Blob Storage is a massively scalable object storage for unstructured data that allows the application to store securely blobs contents such as templates pictures. | **France Central** |

::: tip Reference
Learn more about [Azure Regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)
:::

