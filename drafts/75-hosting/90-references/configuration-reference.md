# Configuration Reference
📆 *Generated: Fri, 10 Feb 2023 12:29:37 GMT*

This document lists all the configuration options supported by the platform.

Options are grouped by category, then by domain, and each option is specified with:
- **Environment Variable**: The corresponging environment variable to be set.
- **Status**: Defines if the option is required or optional.
- **Description**: Description of the option mentionning its type and default value



## Application and Services
*Application and services configuration*

### Application execution context
*Defines the application execution context*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `APP_DEPLOY` | Optional ☑️ | (string) Arbitrary string to identify the current application deploy, such as `uat`, `qa`, `production`. Defaults to `""`. |
| `APP_ROLE` | Optional ☑️ | (string) Defines the services that will be executed by the app. Could be `standalone` (in that case, all the services will be executed in parallel), `web`, `api`, `jobs`, `scheduler`. WARNING: The `standalone` role is NOT suitable for production environments. Defaults to `standalone`. |
| `APP_PORT` | Optional ☑️ | (number) Application server port. Defaults to the `PORT` environment variable if defined, or to `3000`. |



### Web Service
*Web service (Web application UI)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `WEB_PUBLICURL` | Optional ☑️ | (string) Web server public URL. Defaults `http://localhost`. |
| `WEB_CDN_PUBLICURL` | Optional ☑️ | (string) Public URL of the CDN used by the web service to serve static assets. Defaults to `""` (means that the web server is serving the static assets itself). |
| `WEB_SESSION_SECRET` | Optional ☑️ | (string) Secret string used to encrypt session data. Defaults to an UUID v4 string generated at runtime. |
| `WEB_TIMEOUT` | Optional ☑️ | (string) Web server requests timeout. Can be a string accepted by the ms (https://www.npmjs.com/package/ms) module. Defaults to `5s`. |



### API Service
*API service (REST API)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `API_PUBLICURL` | Optional ☑️ | (string) API server public URL. Defaults to `http://localhost/api/v1.0`. |
| `API_TIMEOUT` | Optional ☑️ | (string) API server requests timeout. Can be a string accepted by the ms (https://www.npmjs.com/package/ms) module. Defaults to `5s`. |



### Scheduler Service
*Scheduler service (Manages execution plans for scheduled jobs)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `SCHEDULER_TIMEZONE` | Optional ☑️ | (string) Timezone used for scheduling. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for valid values. Defaults to `CET` |
| `SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_ENABLED` | Optional ☑️ | (boolean) Enable the `RENEW_SERVICE_ACCOUNT_TOKENS` scheduled job. Defaults to `true` |
| `SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `0 6 * * 0` (At 06:00 on every Sunday). |
| `SCHEDULER_MICROSOFT_TEAMS_PERMANENT_MEMBERSHIP_POLICY_ENABLED` | Optional ☑️ | (boolean) Enable the `PERMANENT_MEMBERSHIP_POLICY` scheduled job. Defaults to `true` |
| `SCHEDULER_MICROSOFT_TEAMS_PERMANENT_MEMBERSHIP_POLICY_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `*/15 * * * *` (At every 15th minute). |
| `SCHEDULER_MICROSOFT_TEAMS_LIFECYCLE_POLICY_ENABLED` | Optional ☑️ | (boolean) Enable the `LIFECYCLE_POLICY` scheduled job. Defaults to `true` |
| `SCHEDULER_MICROSOFT_TEAMS_LIFECYCLE_POLICY_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `0 9 * * 0` (At 09:00 on every Sunday). |
| `SCHEDULER_QUEUES_RETENTION_POLICY_ENABLED` | Optional ☑️ | (boolean) Enable the `QUEUES_RETENTION` scheduled job. Defaults to `true` |
| `SCHEDULER_QUEUES_RETENTION_POLICY_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `*0 1 * * *` (Every day at 01:00). |
| `SCHEDULER_MICROSOFT_GRAPH_SUBSCRIPTIONS_MANAGER_ENABLED` | Optional ☑️ | (boolean) Enable the `GRAPH_SUBSCRIPTIONS_MANAGER` scheduled job. Defaults to `true` |
| `SCHEDULER_MICROSOFT_GRAPH_SUBSCRIPTIONS_MANAGER_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `*0 2 * * *` (Every day at 02:00). |



### Jobs Service
*Jobs service (Scheduled and on-demand background tasks)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `JOBS_POLICY_RETENTION_GRACE_PERIOD` | Optional ☑️ | (number) Grace retention period for all jobs, defined in ms. Default to "2419200000" (28 days). |



## Required Backing Services
*Mandatory backend infrastructure*

### Redis
*Redis service used for caching, distributed state and message queuing*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `REDIS_HOST` | Optional ☑️ | (string) Redis server host. Defaults to `localhost`. |
| `REDIS_PORT` | Optional ☑️ | (number) Redis server port. Defaults to `6379`. |
| `REDIS_DATABASE_INDEX` | Optional ☑️ | (number) Redis server database index. Defaults to `0`. |
| `REDIS_TLS` | Optional ☑️ | (boolean) Defines if the application must use `TLS` to connect to the redis server. Defaults to `false`. |
| `REDIS_TIMEOUT` | Optional ☑️ | (number) Redis connection timeout in `ms`. Defaults to `30000`. |
| `REDIS_PASSWORD` | Optional ☑️ | (string) Password used to connect to Redis server. Defaults to `""`. |
| `REDIS_KEYS_PREFIX` | Optional ☑️ | (string) Namespace prefix for all redis keys managed by the application. Defaults to `st:`. |



### Application Database
*Application data storage*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `DB_APPLICATION_CLIENT` | Optional ☑️ | (string) Database engine client among `mysql` / `mariadb` / `postgres` / `mssql` (Currently only `postgres` is officially supported). Defaults to `postgres`. |
| `DB_APPLICATION_DIALECT_OPTIONS` | Optional ☑️ | (string) Database engine specific dialect options as a stringified json. Defaults to `{"ssl": false}`. |
| `DB_APPLICATION_HOST` | Optional ☑️ | (string) Database server host. Defaults to `localhost`. |
| `DB_APPLICATION_PORT` | Optional ☑️ | (number) Database server port. Defaults to `5432`. |
| `DB_APPLICATION_DATABASE_NAME` | Optional ☑️ | (string) Database name. Defaults to `st_application_db`. |
| `DB_APPLICATION_USER` | Optional ☑️ | (string) Database user name. Defaults to `st_application_db_user`. |
| `DB_APPLICATION_PASSWORD` | Optional ☑️ | (string) Database password. Defaults to `st_application_db_password`. |
| `DB_APPLICATION_LOGGING` | Optional ☑️ | (boolean) Enable database advanced logging. Defaults to `false`. |



### Microsoft Cosmos DB
*Nosql database used to manage user and organization data.*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_COSMOSDB_ENDPOINT` | Optional ☑️ | (string) Microsoft Cosmos DB URL. Defaults to `https://localhost:8081`. |
| `MICROSOFT_COSMOSDB_SECRET` | Optional ☑️ | (string) Secret key used to connect to Microsoft Cosmos DB. Defaults to the default Cosmos DB emulator secret key. |
| `MICROSOFT_COSMOSDB_DATABASE` | Optional ☑️ | (string) Name of the Microsoft Cosmos DB database (Has to be include four collections named: `users`, `customers`, `requests` and `apps`). Defaults to `st_application_cosmosdb`. |
| `MICROSOFT_COSMOSDB_CONTAINER_PARTITION_KEY` | Optional ☑️ | (string) Property acting as a partition key in each collection. Defaults to `/tenantId`. |
| `MICROSOFT_COSMOSDB_MAXRETRYATTEMPTSONTHROTTLEDREQUESTS` | Optional ☑️ | (number) Maximum number of retries in the case where the request fails because the Azure Cosmos DB service has applied rate limiting on the client. Defaults to `9`. |
| `MICROSOFT_COSMOSDB_MAXRETRYWAITTIMEINSECONDS` | Optional ☑️ | (number) Maximum retry time in `seconds` for the Azure Cosmos DB service. Defaults to `60`. |
| `MICROSOFT_COSMOSDB_DISABLE_SSL_VERIFICATION` | Optional ☑️ | (boolean) Disable SSL verification when connecting to Cosmos DB. WARNING: This option should NOT be set to `true` in production. Defaults to `false`. |



### Microsoft Azure Storage
*Blob storage used for storing images (templates pictures).*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_AZURE_STORAGE_CONNECTION_STRING` | Optional ☑️ | (string) Microsoft Azure Storage connection string. Defaults to the default Azure Storage emulator connection string. |
| `MICROSOFT_AZURE_STORAGE_TEMPLATES_PICTURES_CONTAINER` | Optional ☑️ | (string) Name of the container that hosts catalog templates pictures. Defaults to `st_templatespictures_container`. |



### Microsoft Identity Platform
*Microsoft Identity Platform*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_IDENTITY_PLATFORM_URL` | Optional ☑️ | (string) Base URL of the Microsoft identity platform (May vary in non global environments such as GCC / DOD, or when using a proxy such as GraphShield). Defaults to `https://login.microsoftonline.com`. |



### Microsoft Azure AD
*Microsoft Azure AD*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_AZURE_AD_APP_CLIENT_ID` | Required ✅ | (string) Microsoft Azure AD app registration client ID. No defaults. |
| `MICROSOFT_AZURE_AD_APP_CLIENT_SECRET` | Required ✅ | (string) Microsoft Azure AD app registration client secret. No defaults. |
| `MICROSOFT_AZURE_AD_APP_LEGACY_CLIENT_ID` | Required ✅ | (string) Legacy Microsoft Azure AD app registration client ID. No defaults. |
| `MICROSOFT_AZURE_AD_APP_LEGACY_CLIENT_SECRET` | Required ✅ | (string) Legact Microsoft Azure AD app registration client secret. No defaults. |



### Microsoft Graph
*Microsoft Graph*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_GRAPH_URL` | Optional ☑️ | (string) Base URL of the Microsoft Graph service (May vary in non global environments such as GCC / DOD, or when using a proxy such as GraphShield). Defaults to `https://graph.microsoft.com`. |
| `MICROSOFT_GRAPH_DEFAULT_SCOPE` | Optional ☑️ | (string) Default requested scope during authentication to the Microsoft Graph service in client credential authentication mode. Defaults to `https://graph.microsoft.com/.default`. |



## Optional Backing Services
*Optional backend infrastructure*

### Mail
*When you want to send approval and other notifications emails from your own tenant using the Microsoft Graph instead of our own mailing service.*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MAIL_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with an email service for notifications. Defaults to "false". |
| `MAIL_PROVIDER` | Optional ☑️ | (string) Mailer service (As of today, only "sendgrid" is supported). Defaults to "sendgrid". |
| `MAIL_SECRET` | Optional ☑️ | (string) Secret key used to authenticate against the mailer service. Defaults to "". |
| `MAIL_SENDER` | Optional ☑️ | (string) Default email sender (FROM:). Defaults to "notifications@salestim.io". |
| `MAIL_ACTION_MSG_ORIGINATOR` | Optional ☑️ | (string) Message originator used to enable outlook actionalbe messages (as used by the team creation request approval process). Defaults to "". |



### Connected Apps Service
*Connected apps service*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `CONNECTEDAPPS_SERVICE_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with our connected apps platform. Defaults to "true". |
| `CONNECTEDAPPS_SERVICE_URL` | Optional ☑️ | (string) Connected apps server root URL. Defaults to "https://connected-apps.nbold.io/connected-apps". |
| `CONNECTEDAPPS_TRAY_URL` | Optional ☑️ | (string) Connected apps tray embedded root URL. Defaults to "https://tray.io/graphql". |
| `CONNECTEDAPPS_TRAY_TOKEN` | Optional ☑️ | (string) Connected apps tray embedded master token |



### Auditing Service
*Auditing service*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `AUDITING_SERVICE_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with the auditing service. Defaults to `false`. |
| `AUDITING_SERVICE_URL` | Optional ☑️ | (string) Events collector root URL. Defaults to `http://localhost:8001`. |
| `AUDITING_SERVICE_AUTH_HEADER` | Optional ☑️ | (string) HTTP header used to pass the authentication token to the events collector service. Defaults to `X-Auth-Token`. |
| `AUDITING_SERVICE_AUTH_CLIENT_TOKEN` | Optional ☑️ | (string) Token used to authenticate from clients against the events collector service for tracking operations. Defaults to `""`. |
| `AUDITING_SERVICE_AUTH_SERVER_TOKEN` | Optional ☑️ | (string) Token used to authenticate from servers (s2s) against the events collector service for tracking operations. Defaults to `""`. |
| `AUDITING_SERVICE_AUTH_ADMIN_TOKEN` | Optional ☑️ | (string) Token used to authenticate from servers (s2s) against the events collector service for administration operations. Defaults to `""`. |
| `AUDITING_SERVICE_TRACK_ENDPOINT` | Optional ☑️ | (string) Tracking endpoint of the events collector service. Defaults to `/api/v1/s2s/event`. |
| `AUDITING_SERVICE_TRACK_METHOD` | Optional ☑️ | (string) HTTP verb used to post events. Defaults to `POST`. |
| `AUDITING_SERVICE_DB_AUDIT_CLIENT` | Optional ☑️ | (string) Database engine client among `mysql` / `mariadb` / `postgres` / `mssql` (Currently only `postgres` is officially supported). Defaults to `postgres`. |
| `AUDITING_SERVICE_DB_AUDIT_DIALECT_OPTIONS` | Optional ☑️ | (string) Database engine specific dialect options as a stringified json. Defaults to `{"ssl": false}`. |
| `AUDITING_SERVICE_DB_AUDIT_HOST` | Optional ☑️ | (string) Database server host. Defaults to `localhost`. |
| `AUDITING_SERVICE_DB_AUDIT_PORT` | Optional ☑️ | (number) Database server port. Defaults to `5432`. |
| `AUDITING_SERVICE_DB_AUDIT_SSL_MODE` | Optional ☑️ | (string) Specify ssl policy. Defaults to `require`. |
| `AUDITING_SERVICE_DB_AUDIT_DATABASE_NAME` | Optional ☑️ | (string) Database name. Defaults to `st_audit_db`. |
| `AUDITING_SERVICE_DB_AUDIT_USER` | Optional ☑️ | (string) Database user name. Defaults to `st_audit_db_user`. |
| `AUDITING_SERVICE_DB_AUDIT_PASSWORD` | Optional ☑️ | (string) Database password. Defaults to `st_audit_db_password`. |
| `AUDITING_SERVICE_DB_AUDIT_LOGGING` | Optional ☑️ | (boolean) Enable database advanced logging. Defaults to `false`. |



### Reporting service
*Reporting service*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `ANALYTICS_SERVICE_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with the analytics service. Defaults to `true`. |
| `ANALYTICS_SERVICE_URL` | Optional ☑️ | (string) analytics service URL. Defaults to `http://localhost:5001`. |
| `ANALYTICS_SERVICE_PORTAL` | Optional ☑️ | (string) URL of the analytics portal. Defaults to `http://localhost:3000/analytics`. |
| `ANALYTICS_SETUP_TOKEN` | Optional ☑️ | (string) An UUID token used to signify that an instance has permissions to create the initial User. This is created upon the first launch of Metabase, by the first instance; once used, it is cleared out, never to be used again. Defaults to ``. |
| `ANALYTICS_ENCRYPTION_SECRET` | Optional ☑️ | (string) When set, this will encrypt database credentials stored in the application database. Requirement: minimum 16 characters base64-encoded string. Defaults to ``. |
| `ANALYTICS_EMBEDDING_SECRET_KEY` | Optional ☑️ | (string) analytics service server secret used to sign embedded reports JWT tokens. Defaults to ``. |
| `ANALYTICS_SERVICE_USER` | Optional ☑️ | (string) Login of the user used to access the list of available analytics. Defaults to ``. |
| `ANALYTICS_SERVICE_PASSWORD` | Optional ☑️ | (string) Password of the user used to access the list of available analytics. Defaults to ``. |
| `ANALYTICS_SERVICE_INTERNAL_ROOT_COLLECTION_NAME` | Optional ☑️ | (string) Name of the collection owning the available analytics for internal use (accessible from the back-office). Defaults to `internal`. |
| `ANALYTICS_SERVICE_EXTERNAL_ROOT_COLLECTION_NAME` | Optional ☑️ | (string) Name of the collection owning the available analytics for external use (accessible by end-users). Defaults to `external`. |



### Search service
*Search service*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `SEARCH_SERVICE_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with the search service. Defaults to `false`. |
| `SEARCH_SERVICE_URL` | Optional ☑️ | (string) Search service URL. Defaults to `http://localhost:20001`. |
| `SEARCH_SERVICE_MASTER_KEY` | Optional ☑️ | (string) Master key used to perform admin operations on the search service. Defaults to `""`. |



### Intercom Service
*Intercom service*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `INTERCOM_SERVICE_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with Intercom for in-app end-users chat and support. Defaults to `false`. |
| `INTERCOM_SERVICE_CRYPTO_SECRET` | Optional ☑️ | (string) Secret key used to generate hmac digest to secure connectivity between the client ans the Intercom service. Defaults to `""`. |
| `INTERCOM_SERVICE_APP_ID` | Optional ☑️ | (string) Intercom application ID used for authentication against the Intercom service. Defaults to `""`. |
| `INTERCOM_SERVICE_ACCESS_TOKEN` | Optional ☑️ | (string) Intercom access token used for server-side authentication against the Intercom service. Defaults to `""`. |



### Microsoft Marketplace
*Service used by the SAAS environment to enable the "Purchase from Microsoft Teams" scenarios integrated with the [Microsoft Commercial Marketplace](https://docs.microsoft.com/en-us/azure/marketplace/).*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_MARKETPLACE_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with the Microsoft Marketplace. Defaults to "false". |
| `MICROSOFT_MARKETPLACE_LANDING_PAGE_URL` | Optional ☑️ | (string) URL of the Microsoft Marketplace landing page. Defaults to `http://localhost/microsoft-marketplace/order`. |
| `MICROSOFT_MARKETPLACE_CONNECTION_WEBHOOK_URL` | Optional ☑️ | (string) URL of the Microsoft Marketplace webhook URL. Defaults to `http://localhost/api/v1.0/microsoft_marketplace/notifications_handler`. |
| `MICROSOFT_MARKETPLACE_TENANT_ID` | Optional ☑️ | (string) Tenant ID used for authentication to the Microsoft Marketplace landing page. Defaults to `""`. |
| `MICROSOFT_MARKETPLACE_FRONTEND_APP_ID` | Optional ☑️ | (string) Microsoft Azure client ID used for authentication to the Microsoft Marketplace landing page. Defaults to `""`. |
| `MICROSOFT_MARKETPLACE_BACKEND_APP_ID` | Optional ☑️ | (string) Microsoft Azure client ID used for interactions with the Microsoft Marketplace API. Defaults to `""`. |
| `MICROSOFT_MARKETPLACE_PUBLISHER_ID` | Optional ☑️ | (string) Publisher ID from the Microsoft Marketplace registration. Defaults to `""`. |
| `MICROSOFT_MARKETPLACE_OFFER_ID` | Optional ☑️ | (string) Offer ID from the Microsoft Marketplace registration. Defaults to `""`. |



## Business Rules
*Business rules*

### Microsoft Teams Team Templates Business Rules
*Business rules for Microsoft Teams team templates*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `BR_MICROSOFT_TEAMS_TEAM_TEMPLATES_APPROVERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be defined as approvers in a template. Defaults to `10`. |
| `BR_MICROSOFT_TEAMS_TEAM_TEMPLATES_PERMANENTOWNERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be defined as permanent owners in a template. Defaults to `20`. |
| `BR_MICROSOFT_TEAMS_TEAM_TEMPLATES_PERMANENTMEMBERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be defined as permanent members in a template. Defaults to `20`. |



### Microsoft Teams Team Creation Requests Business Rules
*Business rules for Microsoft Teams team creation requests*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `BR_MICROSOFT_TEAMS_TEAM_CREATION_RESUESTS_REQUESTEDOWNERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be invited as owners as part of a new team creation request. Defaults to `20`. |
| `BR_MICROSOFT_TEAMS_TEAM_CREATION_RESUESTS_REQUESTEDMEMBERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be invited as members as part of a new team creation request. Defaults to `20`. |



## Instrumentation
*Instrumentation*

### Logging
*Logging*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `LOG_LEVEL` | Optional ☑️ | (string) Logging level. Uses the `npm` logging levels `error` / `warn` / `info` / `http` / `verbose` / `debug` / `silly` (highest to lowest). Defaults to `info`. |
| `LOG_PERSISTENCY_ENABLED` | Optional ☑️ | (boolean) Enable logs persistency as files in the directory defined by `LOG_PERSISTENCY_DIRECTORY`. Defaults to `false`. |
| `LOG_PERSISTENCY_DIRECTORY` | Optional ☑️ | (string) Defines logs persistency directory location. Defaults to `/logs`. |



### Prometheus
*Metrics exporter for Prometheus *

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `PROMETHEUS_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable the `/monitoring/metrics` endpoint to expose platform's key metrics and be polled by a Prometheus server. Defaults to `false`. |
| `PROMETHEUS_EXPORTER_AUTH_TOKEN` | Optional ☑️ | (string) Token used to authenticate against the Prometheus exporter endpoint `/monitoring/metrics` through the `X-Auth-Token` HTTP header or the `token` url parameter (for instance: `/monitoring/metrics?token=YOUR_AUTH_TOKEN`). Defaults to `""`. |
| `PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS` | Optional ☑️ | (boolean) Collect and expose all the default node.js metrics to Prometheus. Defaults to `true`. |
| `PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS` | Optional ☑️ | (boolean) Collect and expose node.js garbage collector metrics to Prometheus. Defaults to `false`. |



### Microsoft Application Insights
*Microsoft Application Insights*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with Azure Application Insights service. Defaults to `false`. |
| `MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED` | Optional ☑️ | (boolean) Enable collection and push of live metrics to the Azure Application Insights service. Defaults to `false`. |
| `MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET` | Optional ☑️ | (string) Secret instrumentation key used server-side to authenticate against the Azure Application Insights service. Defaults to `""`. |
| `MICROSOFT_APPINSIGHTS_CONNECTION_STRING` | Optional ☑️ | (string) Connection string used client-side to connect to the Azure Application Insights service . Defaults to `""`. |



## Advanced Tuning
*Advanced Tuning*

### Webhooks
*Webhooks configuration*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `WEBHOOKS_USER_AGENT` | Optional ☑️ | (string) HTTP user agent passed as a header with each request. Defaults to `nBold-Webhook/v5.2.0`. |
| `WEBHOOKS_RETRY_INTERVAL` | Optional ☑️ | (number) Interval in `ms` between two attempts. Defaults to `10000`. |
| `WEBHOOKS_MAX_RETRY` | Optional ☑️ | (number) Maximum number of retry before failing. Namely if it is set to 2, the module will try 3 times before failing. Defaults to `2`. |
| `WEBHOOKS_TIMEOUT` | Optional ☑️ | (number) Timeout in `ms` before aborting the request if the server is unresponsive. Defaults to `5000`. |



### Microsoft Graph Rate Limiter
*Microsoft Graph rate limiter configuration*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_GRAPH_LIMITER_MAXCONCURRENT` | Optional ☑️ | (number) How many jobs can be executing at the same time. Consider setting a value instead of leaving it null, it can help your application's performance, especially if you think the limiter's queue might get very long. Defaults to `null` (unlimited) |
| `MICROSOFT_GRAPH_LIMITER_MINTIME` | Optional ☑️ | (number) How long to wait in `ms` after launching a job before launching another one. Defaults to `50`. |
| `MICROSOFT_GRAPH_LIMITER_HIGHWATER` | Optional ☑️ | (number) How long can the queue be? When the queue length exceeds that value, the selected strategy is executed to shed the load. Defaults to `null` (unlimited). |
| `MICROSOFT_GRAPH_LIMITER_STRATEGY` | Optional ☑️ | (number) Which strategy to use when the queue gets longer than the high water mark (See https://www.npmjs.com/package/bottleneck#strategies). Strategies are never executed if highWater is null. Defaults to `1` (leak). |
| `MICROSOFT_GRAPH_LIMITER_PENALTY` | Optional ☑️ | (number) The penalty value in `ms` used by the BLOCK strategy. Defaults to `5000`. |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIR` | Optional ☑️ | (number) How many jobs can be executed before the limiter stops executing jobs. If reservoir reaches 0, no jobs will be executed until it is no longer 0. New jobs will still be queued up. Defaults to `null` (unlimited). |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHINTERVAL` | Optional ☑️ | (number) Every `reservoirRefreshInterval` milliseconds, the reservoir value will be automatically updated to the value of `reservoirRefreshAmount`. The `reservoirRefreshInterval` value should be a multiple of 250. Defaults to `null` (unlimited). |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHAMOUNT` | Optional ☑️ | (number) The value to set `reservoir` to when `reservoirRefreshInterval` is in use. Defaults to `null` (disabled). |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEINTERVAL` | Optional ☑️ | (number) Every `reservoirIncreaseInterval` milliseconds, the `reservoir` value will be automatically incremented by `reservoirIncreaseAmount`. The `reservoirIncreaseInterval` value should be a multiple of 250. Defaults to `null` (disabled) |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEAMOUNT` | Optional ☑️ | (number) The increment applied to `reservoir` when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled). |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEMAXIMUM` | Optional ☑️ | (number) The maximum value that `reservoir` can reach when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled). |



### Microsoft Planner Rate Limiter
*Microsoft Planner rate limiter configuration*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_PLANNER_LIMITER_MAXCONCURRENT` | Optional ☑️ | (number) How many jobs can be executing at the same time. Consider setting a value instead of leaving it null, it can help your application's performance, especially if you think the limiter's queue might get very long. Defaults to `null` (unlimited) |
| `MICROSOFT_PLANNER_LIMITER_MINTIME` | Optional ☑️ | (number) How long to wait in `ms` after launching a job before launching another one. Defaults to `50`. |
| `MICROSOFT_PLANNER_LIMITER_HIGHWATER` | Optional ☑️ | (number) How long can the queue be? When the queue length exceeds that value, the selected strategy is executed to shed the load. Defaults to `null` (unlimited). |
| `MICROSOFT_PLANNER_LIMITER_STRATEGY` | Optional ☑️ | (number) Which strategy to use when the queue gets longer than the high water mark (See https://www.npmjs.com/package/bottleneck#strategies). Strategies are never executed if highWater is null. Defaults to `1` (leak). |
| `MICROSOFT_PLANNER_LIMITER_PENALTY` | Optional ☑️ | (number) The penalty value in `ms` used by the BLOCK strategy. Defaults to `5000`. |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIR` | Optional ☑️ | (number) How many jobs can be executed before the limiter stops executing jobs. If reservoir reaches 0, no jobs will be executed until it is no longer 0. New jobs will still be queued up. Defaults to `null` (unlimited). |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHINTERVAL` | Optional ☑️ | (number) Every `reservoirRefreshInterval` milliseconds, the reservoir value will be automatically updated to the value of `reservoirRefreshAmount`. The `reservoirRefreshInterval` value should be a multiple of 250. Defaults to `null` (unlimited). |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHAMOUNT` | Optional ☑️ | (number) The value to set `reservoir` to when `reservoirRefreshInterval` is in use. Defaults to `null` (disabled). |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEINTERVAL` | Optional ☑️ | (number) Every `reservoirIncreaseInterval` milliseconds, the `reservoir` value will be automatically incremented by `reservoirIncreaseAmount`. The `reservoirIncreaseInterval` value should be a multiple of 250. Defaults to `null` (disabled) |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEAMOUNT` | Optional ☑️ | (number) The increment applied to `reservoir` when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled). |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEMAXIMUM` | Optional ☑️ | (number) The maximum value that `reservoir` can reach when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled). |



### Microsoft Cosmos DB Rate Limiter
*Microsoft Cosmos DB rate limiter configuration*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_COSMOSDB_LIMITER_MAXCONCURRENT` | Optional ☑️ | (number) How many jobs can be executing at the same time. Consider setting a value instead of leaving it null, it can help your application's performance, especially if you think the limiter's queue might get very long. Defaults to `null` (unlimited) |
| `MICROSOFT_COSMOSDB_LIMITER_MINTIME` | Optional ☑️ | (number) How long to wait in `ms` after launching a job before launching another one. Defaults to `50`. |
| `MICROSOFT_COSMOSDB_LIMITER_HIGHWATER` | Optional ☑️ | (number) How long can the queue be? When the queue length exceeds that value, the selected strategy is executed to shed the load. Defaults to `null` (unlimited). |
| `MICROSOFT_COSMOSDB_LIMITER_STRATEGY` | Optional ☑️ | (number) Which strategy to use when the queue gets longer than the high water mark (See https://www.npmjs.com/package/bottleneck#strategies). Strategies are never executed if highWater is null. Defaults to `1` (leak). |
| `MICROSOFT_COSMOSDB_LIMITER_PENALTY` | Optional ☑️ | (number) The penalty value in `ms` used by the BLOCK strategy. Defaults to `5000`. |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIR` | Optional ☑️ | (number) How many jobs can be executed before the limiter stops executing jobs. If reservoir reaches 0, no jobs will be executed until it is no longer 0. New jobs will still be queued up. Defaults to `null` (unlimited). |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHINTERVAL` | Optional ☑️ | (number) Every `reservoirRefreshInterval` milliseconds, the reservoir value will be automatically updated to the value of `reservoirRefreshAmount`. The `reservoirRefreshInterval` value should be a multiple of 250. Defaults to `null` (unlimited). |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHAMOUNT` | Optional ☑️ | (number) The value to set `reservoir` to when `reservoirRefreshInterval` is in use. Defaults to `null` (disabled). |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEINTERVAL` | Optional ☑️ | (number) Every `reservoirIncreaseInterval` milliseconds, the `reservoir` value will be automatically incremented by `reservoirIncreaseAmount`. The `reservoirIncreaseInterval` value should be a multiple of 250. Defaults to `null` (disabled) |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEAMOUNT` | Optional ☑️ | (number) The increment applied to `reservoir` when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled). |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEMAXIMUM` | Optional ☑️ | (number) The maximum value that `reservoir` can reach when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled). |



## Tests
*Unit and integration tests configuration*

### Integration tests
*Integration tests configuration*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `SCHEDULER_INTEGRATION_TESTS_ENABLED` | Optional ☑️ | (boolean) Enable the `integration_tests_triggered` scheduled job. Defaults to `false` |
| `SCHEDULER_INTEGRATION_TESTS_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `0 6 * * 0` (At 06:00 on every Sunday). |


