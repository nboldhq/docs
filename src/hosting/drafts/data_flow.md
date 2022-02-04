# SalesTim Data Flow

| **Flow** | **Data** | **In transit** | **At rest** |
| --- | --- | --- | --- |
| **Teams Clients (Desktop, web, mobile) <br> Web tier** | User metadata (through SSO), Teams metadata, Teams templates | HTTPS communication enforced by Azure Front Door | N/A |
| **Third-party apps <br> Api tier** | User metadata (through SSO), Teams metadata, Teams templates | HTTPS communication enforced by Azure Front Door | N/A |
| **Web tier <br> Event collector** | Audit trails | The event collector tier is hosted in Azure App Service with HTTPS enforced with TLS v1.2 minimum | N/A |
| **API tier <br> Event collector** | Audit trails | The event collector tier is hosted in Azure App Service with HTTPS enforced with TLS v1.2 minimum | N/A |
| **Jobs tier <br> Event collector** | Audit trails | The event collector tier is hosted in Azure App Service with HTTPS enforced with TLS v1.2 minimum | N/A |
| **Scheduler <br> Event collector** | Audit trails | The event collector tier is hosted in Azure App Service with HTTPS enforced with TLS v1.2 minimum | N/A |
| **Event collector <br> PostgreSQL** | Audit trails | HTTPS is enforced for all connections to PostgreSQL | Audit trails are stored in PostgreSQL, managed by Azure and encrypted at rest. |
| **Web tier <br> Redis** | Session data, User profile cache | HTTPS is enforced for all connections to Redis | Session data are cached in Redis, managed by Azure and encrypted at rest. |
| **Api tier <br> Redis** | Microsoft Graph requests cache | HTTPS is enforced for all connections to Redis | Microsoft Graph requests are cached in Redis, managed by Azure and encrypted at rest. |
| **Jobs tier <br> Redis** | Jobs queues cache information | HTTPS is enforced for all connections to Redis | Jobs data are cached in Redis, managed by Azure and encrypted at rest. |
| **Scheduler <br> Redis** | Jobs queues cache information | HTTPS is enforced for all connections to Redis | Jobs data are cached in Redis, managed by Azure and encrypted at rest. |
| **Web tier <br> PostgreSQL** | Configuration data (such as team templates) | HTTPS is enforced for all connections to PostgreSQL | Configuration data are stored in PostgreSQL, managed by Azure and encrypted at rest. |
| **Api tier <br> PostgreSQL** | Configuration data (such as team templates) | HTTPS is enforced for all connections to PostgreSQL | Configuration data are stored in PostgreSQL, managed by Azure and encrypted at rest. |
| **Jobs tier <br> PostgreSQL** | Configuration data (such as team templates) | HTTPS is enforced for all connections to PostgreSQL | Configuration data are stored in PostgreSQL, managed by Azure and encrypted at rest. |
| **Scheduler <br> PostgreSQL** | Configuration data (such as team templates) | HTTPS is enforced for all connections to PostgreSQL | Configuration data are stored in PostgreSQL, managed by Azure and encrypted at rest. |
| **Web tier <br> Blob storage** | Team templates pictures | HTTPS is enforced at the storage account level | Team templates pictures are stores in a blob storage account and encrypted at rest |
| **Web tier <br> CosmosDB** | Users and organizations data | HTTPS is enforced for all connections to Cosmos DB | Users and organizations data are stored in Cosmos DB and encrypted at rest. |
| **Api tier <br> CosmosDB** | Users and organizations data | HTTPS is enforced for all connections to Cosmos DB | Users and organizations data are stored in Cosmos DB and encrypted at rest. |
| **Jobs tier <br> CosmosDB** | Users and organizations data | HTTPS is enforced for all connections to Cosmos DB | Users and organizations data are stored in Cosmos DB and encrypted at rest. |
