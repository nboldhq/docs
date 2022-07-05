# Environment Variables
📆 *Generated: Tue, 05 Jul 2022 07:03:47 GMT*

Here is a formal `.env` file, referencing all the available options, configured with default values, that you can use with any infrastructure-as-code solution.
For more details about these environment variables, please refer to our [configuration reference](./configuration_reference).

```sh
---
# Application and Services
# Application and services configuration
---

# Application execution context
# Defines the application execution context

# (string) Arbitrary string to identify the current application deploy, such as `uat`, `qa`, `production`. Defaults to `""`.
APP_DEPLOY=
# (string) Defines the services that will be executed by the app. Could be `standalone` (in that case, all the services will be executed in parallel), `web`, `api`, `jobs`, `scheduler`. WARNING: The `standalone` role is NOT suitable for production environments. Defaults to `standalone`.
APP_ROLE=standalone
# (number) Application server port. Defaults to the `PORT` environment variable if defined, or to `3000`.
APP_PORT=3000

# Web Service
# Web service (Web application UI)

# (string) Web server public URL. Defaults `http://localhost`.
WEB_PUBLICURL=http://localhost
# (string) Public URL of the CDN used by the web service to serve static assets. Defaults to `""` (means that the web server is serving the static assets itself).
WEB_CDN_PUBLICURL=
# (string) Secret string used to encrypt session data. Defaults to an UUID v4 string generated at runtime.
WEB_SESSION_SECRET=63012ae0-8093-4792-b066-06da7136b879
# (string) Web server requests timeout. Can be a string accepted by the ms (https://www.npmjs.com/package/ms) module. Defaults to `5s`.
WEB_TIMEOUT=5s

# API Service
# API service (REST API)

# (string) API server public URL. Defaults to `http://localhost/api/v1.0`.
API_PUBLICURL=http://localhost/api/v1.0
# (string) API server requests timeout. Can be a string accepted by the ms (https://www.npmjs.com/package/ms) module. Defaults to `5s`.
API_TIMEOUT=5s

# Scheduler Service
# Scheduler service (Manages execution plans for scheduled jobs)

# (boolean) Enable the `RENEW_SERVICE_ACCOUNT_TOKENS` scheduled job. Defaults to `true`
SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `0 6 * * 0` (At 06:00 on every Sunday).
SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_SCHEDULE=0 6 * * 0
# (boolean) Enable the `PERMANENT_MEMBERSHIP_POLICY` scheduled job. Defaults to `true`
SCHEDULER_MICROSOFT_TEAMS_PERMANENT_MEMBERSHIP_POLICY_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `*/15 * * * *` (At every 15th minute).
SCHEDULER_MICROSOFT_TEAMS_PERMANENT_MEMBERSHIP_POLICY_SCHEDULE=*/15 * * * *
# (boolean) Enable the `QUEUES_RETENTION` scheduled job. Defaults to `true`
SCHEDULER_QUEUES_RETENTION_POLICY_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `*0 1 * * *` (Every day at 01:00).
SCHEDULER_QUEUES_RETENTION_POLICY_SCHEDULE=0 1 * * *
# (boolean) Enable the `GRAPH_SUBSCRIPTIONS_MANAGER` scheduled job. Defaults to `true`
SCHEDULER_MICROSOFT_GRAPH_SUBSCRIPTIONS_MANAGER_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to `*0 2 * * *` (Every day at 02:00).
SCHEDULER_MICROSOFT_GRAPH_SUBSCRIPTIONS_MANAGER_SCHEDULE=0 2 * * *

# Jobs Service
# Jobs service (Scheduled and on-demand background tasks)

# (boolean / number) If true, removes the job when it successfully completes. A number specified the amount of jobs to keep. Defaults to "false".
JOBS_POLICY_REMOVE_ON_COMPLETE=false
# (boolean / number) If true, removes the job when it fails after all attempts. A number specified the amount of jobs to keep. Defaults to "false".
JOBS_POLICY_REMOVE_ON_FAIL=false
# (number) Grace retention period for all jobs, defined in ms. Default to "2419200000" (28 days).
JOBS_POLICY_RETENTION_GRACE_PERIOD=2419200000
# (string) Status of the jobs to delete after the grace period. Accepts "null" / "completed" / "failed". Defaults to "null"
JOBS_POLICY_RETENTION_STATUS=null
# (number) Maximum amount of jobs to clean per call to the jobs retention process. If not provided will clean all matching jobs. Defaults to "null"
JOBS_POLICY_RETENTION_LIMIT=null

---
# Required Backing Services
# Mandatory backend infrastructure
---

# Redis
# Redis service used for caching, distributed state and message queuing

# (string) Redis server host. Defaults to `localhost`.
REDIS_HOST=localhost
# (number) Redis server port. Defaults to `6379`.
REDIS_PORT=6379
# (number) Redis server database index. Defaults to `0`.
REDIS_DATABASE_INDEX=0
# (boolean) Defines if the application must use `TLS` to connect to the redis server. Defaults to `false`.
REDIS_TLS=false
# (number) Redis connection timeout in `ms`. Defaults to `30000`.
REDIS_TIMEOUT=30000
# (string) Password used to connect to Redis server. Defaults to `""`.
REDIS_PASSWORD=
# (string) Namespace prefix for all redis keys managed by the application. Defaults to `st:`.
REDIS_KEYS_PREFIX=st:

# Application Database
# Application data storage

# (string) Database engine client among `mysql` / `mariadb` / `postgres` / `mssql` (Currently only `postgres` is officially supported). Defaults to `postgres`.
DB_APPLICATION_CLIENT=postgres
# (string) Database engine specific dialect options as a stringified json. Defaults to `{"ssl": false}`.
DB_APPLICATION_DIALECT_OPTIONS={"ssl": false}
# (string) Database server host. Defaults to `localhost`.
DB_APPLICATION_HOST=localhost
# (number) Database server port. Defaults to `5432`.
DB_APPLICATION_PORT=5432
# (string) Database name. Defaults to `st_application_db`.
DB_APPLICATION_DATABASE_NAME=st_application_db
# (string) Database user name. Defaults to `st_application_db_user`.
DB_APPLICATION_USER=st_application_db_user
# (string) Database password. Defaults to `st_application_db_password`.
DB_APPLICATION_PASSWORD=st_application_db_password
# (boolean) Enable database advanced logging. Defaults to `false`.
DB_APPLICATION_LOGGING=false

# Microsoft Cosmos DB
# Nosql database used to manage user and organization data.

# (string) Microsoft Cosmos DB URL. Defaults to `https://localhost:8081`.
MICROSOFT_COSMOSDB_ENDPOINT=https://localhost:8081
# (string) Secret key used to connect to Microsoft Cosmos DB. Defaults to the default Cosmos DB emulator secret key.
MICROSOFT_COSMOSDB_SECRET=C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==
# (string) Name of the Microsoft Cosmos DB database (Has to be include four collections named: `users`, `customers`, `requests` and `apps`). Defaults to `st_application_cosmosdb`.
MICROSOFT_COSMOSDB_DATABASE=st_application_cosmosdb
# (string) Property acting as a partition key in each collection. Defaults to `/tenantId`.
MICROSOFT_COSMOSDB_CONTAINER_PARTITION_KEY=/tenantId
# (number) Maximum number of retries in the case where the request fails because the Azure Cosmos DB service has applied rate limiting on the client. Defaults to `9`.
MICROSOFT_COSMOSDB_MAXRETRYATTEMPTSONTHROTTLEDREQUESTS=9
# (number) Maximum retry time in `seconds` for the Azure Cosmos DB service. Defaults to `60`.
MICROSOFT_COSMOSDB_MAXRETRYWAITTIMEINSECONDS=60
# (boolean) Disable SSL verification when connecting to Cosmos DB. WARNING: This option should NOT be set to `true` in production. Defaults to `false`.
MICROSOFT_COSMOSDB_DISABLE_SSL_VERIFICATION=false

# Microsoft Azure Storage
# Blob storage used for storing images (templates pictures).

# (string) Microsoft Azure Storage connection string. Defaults to the default Azure Storage emulator connection string.
MICROSOFT_AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://localhost:10000/devstoreaccount1
# (string) Name of the container that hosts catalog templates pictures. Defaults to `st_templatespictures_container`.
MICROSOFT_AZURE_STORAGE_TEMPLATES_PICTURES_CONTAINER=st_templatespictures_container

# Microsoft Identity Platform
# Microsoft Identity Platform

# (string) Base URL of the Microsoft identity platform (May vary in non global environments such as GCC / DOD, or when using a proxy such as GraphShield). Defaults to `https://login.microsoftonline.com`.
MICROSOFT_IDENTITY_PLATFORM_URL=https://login.microsoftonline.com

# Microsoft Azure AD
# Microsoft Azure AD

# (string) Microsoft Azure AD app registration client ID. No defaults.
MICROSOFT_AZURE_AD_APP_CLIENT_ID={PLACEHOLDER}
# (string) Microsoft Azure AD app registration client secret. No defaults.
MICROSOFT_AZURE_AD_APP_CLIENT_SECRET={PLACEHOLDER}

# Microsoft Graph
# Microsoft Graph

# (string) Base URL of the Microsoft Graph service (May vary in non global environments such as GCC / DOD, or when using a proxy such as GraphShield). Defaults to `https://graph.microsoft.com`.
MICROSOFT_GRAPH_URL=https://graph.microsoft.com
# (string) Default requested scope during authentication to the Microsoft Graph service in client credential authentication mode. Defaults to `https://graph.microsoft.com/.default`.
MICROSOFT_GRAPH_DEFAULT_SCOPE=https://graph.microsoft.com/.default

---
# Optional Backing Services
# Optional backend infrastructure
---

# Mail
# When you want to send approval and other notifications emails from your own tenant using the Microsoft Graph instead of our own mailing service: https://docs.nbold.co/nocode/approval.html#approval-email-sent-by-your-organization

# (boolean) Enable integration with an email service for notifications. Defaults to "false".
MAIL_INTEGRATION_ENABLED=false
# (string) Mailer service (As of today, only "sendgrid" is supported). Defaults to "sendgrid".
MAIL_PROVIDER=sendgrid
# (string) Secret key used to authenticate against the mailer service. Defaults to "".
MAIL_SECRET=
# (string) Default email sender (FROM:). Defaults to "notifications@salestim.io".
MAIL_SENDER=notifications@salestim.io
# (string) Message originator used to enable outlook actionalbe messages (as used by the team creation request approval process). See https://docs.nbold.co/nocode/approval.html#approval-email-sent-by-your-organization. Defaults to "".
MAIL_ACTION_MSG_ORIGINATOR=

# Connected Apps Service
# Connected apps service

# (boolean) Enable integration with our connected apps platform. Defaults to "true".
CONNECTEDAPPS_SERVICE_INTEGRATION_ENABLED=true
# (string) Connected apps server root URL. Defaults to "https://connected-apps.nbold.io/connected-apps".
CONNECTEDAPPS_SERVICE_URL=https://connected-apps.nbold.io/connected-apps

# Auditing Service
# Auditing service

# (boolean) Enable integration with the auditing service. Defaults to `false`.
AUDITING_SERVICE_INTEGRATION_ENABLED=false
# (string) Events collector root URL. Defaults to `http://localhost:8001`.
AUDITING_SERVICE_URL=http://localhost:8001
# (string) HTTP header used to pass the authentication token to the events collector service. Defaults to `X-Auth-Token`.
AUDITING_SERVICE_AUTH_HEADER=X-Auth-Token
# (string) Token used to authenticate from clients against the events collector service for tracking operations. Defaults to `""`.
AUDITING_SERVICE_AUTH_CLIENT_TOKEN=
# (string) Token used to authenticate from servers (s2s) against the events collector service for tracking operations. Defaults to `""`.
AUDITING_SERVICE_AUTH_SERVER_TOKEN=
# (string) Token used to authenticate from servers (s2s) against the events collector service for administration operations. Defaults to `""`.
AUDITING_SERVICE_AUTH_ADMIN_TOKEN=
# (string) Tracking endpoint of the events collector service. Defaults to `/api/v1/s2s/event`.
AUDITING_SERVICE_TRACK_ENDPOINT=/api/v1/s2s/event
# (string) HTTP verb used to post events. Defaults to `POST`.
AUDITING_SERVICE_TRACK_METHOD=POST
# (string) Database engine client among `mysql` / `mariadb` / `postgres` / `mssql` (Currently only `postgres` is officially supported). Defaults to `postgres`.
AUDITING_SERVICE_DB_AUDIT_CLIENT=postgres
# (string) Database engine specific dialect options as a stringified json. Defaults to `{"ssl": false}`.
AUDITING_SERVICE_DB_AUDIT_DIALECT_OPTIONS={"ssl": false}
# (string) Database server host. Defaults to `localhost`.
AUDITING_SERVICE_DB_AUDIT_HOST=localhost
# (number) Database server port. Defaults to `5432`.
AUDITING_SERVICE_DB_AUDIT_PORT=5432
# (string) Database name. Defaults to `st_audit_db`.
AUDITING_SERVICE_DB_AUDIT_DATABASE_NAME=st_audit_db
# (string) Database user name. Defaults to `st_audit_db_user`.
AUDITING_SERVICE_DB_AUDIT_USER=st_audit_db_user
# (string) Database password. Defaults to `st_audit_db_password`.
AUDITING_SERVICE_DB_AUDIT_PASSWORD=st_audit_db_password
# (boolean) Enable database advanced logging. Defaults to `false`.
AUDITING_SERVICE_DB_AUDIT_LOGGING=false

# Reporting service
# Reporting service

# (boolean) Enable integration with the reporting service. Defaults to `true`.
REPORTING_SERVICE_INTEGRATION_ENABLED=true
# (string) Reporting service URL. Defaults to `http://localhost:5001`.
REPORTING_SERVICE_URL=http://localhost:5001
# (string) Token used secure access to embedded reports. Defaults to `""`.
REPORTING_SERVICE_SERVER_SECRET=

# Intercom Service
# Intercom service

# (boolean) Enable integration with Intercom for in-app end-users chat and support. Defaults to `false`.
INTERCOM_SERVICE_INTEGRATION_ENABLED=false
# (string) Secret key used to generate hmac digest to secure connectivity between the client ans the Intercom service. Defaults to `""`.
INTERCOM_SERVICE_CRYPTO_SECRET=
# (string) Intercom application ID used for authentication against the Intercom service. Defaults to `""`.
INTERCOM_SERVICE_APP_ID=
# (string) Intercom access token used for server-side authentication against the Intercom service. Defaults to `""`.
INTERCOM_SERVICE_ACCESS_TOKEN=

# Microsoft Marketplace
# Service used by the SAAS environment to enable the "Purchase from Microsoft Teams" scenarios integrated with the [Microsoft Commercial Marketplace](https://docs.microsoft.com/en-us/azure/marketplace/).

# (boolean) Enable integration with the Microsoft Marketplace. Defaults to "false".
MICROSOFT_MARKETPLACE_INTEGRATION_ENABLED=false
# (string) URL of the Microsoft Marketplace landing page. Defaults to `http://localhost/microsoft-marketplace/order`.
MICROSOFT_MARKETPLACE_LANDING_PAGE_URL=http://localhost/microsoft-marketplace/order
# (string) URL of the Microsoft Marketplace webhook URL. Defaults to `http://localhost/api/v1.0/microsoft_marketplace/notifications_handler`.
MICROSOFT_MARKETPLACE_CONNECTION_WEBHOOK_URL=http://localhost/api/v1.0/microsoft_marketplace/notifications_handler
# (string) Tenant ID used for authentication to the Microsoft Marketplace landing page. Defaults to `""`.
MICROSOFT_MARKETPLACE_TENANT_ID=
# (string) Microsoft Azure client ID used for authentication to the Microsoft Marketplace landing page. Defaults to `""`.
MICROSOFT_MARKETPLACE_FRONTEND_APP_ID=
# (string) Microsoft Azure client ID used for interactions with the Microsoft Marketplace API. Defaults to `""`.
MICROSOFT_MARKETPLACE_BACKEND_APP_ID=
# (string) Publisher ID from the Microsoft Marketplace registration. Defaults to `""`.
MICROSOFT_MARKETPLACE_PUBLISHER_ID=
# (string) Offer ID from the Microsoft Marketplace registration. Defaults to `""`.
MICROSOFT_MARKETPLACE_OFFER_ID=

---
# Business Rules
# Business rules
---

# Microsoft Teams Team Templates Business Rules
# Business rules for Microsoft Teams team templates

# (number) Maximum number of users that could be defined as approvers in a template. Defaults to `10`.
BR_MICROSOFT_TEAMS_TEAM_TEMPLATES_APPROVERS_MAX=10
# (number) Maximum number of users that could be defined as permanent owners in a template. Defaults to `20`.
BR_MICROSOFT_TEAMS_TEAM_TEMPLATES_PERMANENTOWNERS_MAX=20
# (number) Maximum number of users that could be defined as permanent members in a template. Defaults to `20`.
BR_MICROSOFT_TEAMS_TEAM_TEMPLATES_PERMANENTMEMBERS_MAX=20

# Mirosoft Teams Team Creation Requests Business Rules
# Business rules for Microsoft Teams team creation requests

# (number) Maximum number of users that could be invited as owners as part of a new team creation request. Defaults to `20`.
BR_MICROSOFT_TEAMS_TEAM_CREATION_RESUESTS_REQUESTEDOWNERS_MAX=20
# (number) Maximum number of users that could be invited as members as part of a new team creation request. Defaults to `20`.
BR_MICROSOFT_TEAMS_TEAM_CREATION_RESUESTS_REQUESTEDMEMBERS_MAX=20

---
# Instrumentation
# Instrumentation
---

# Logging
# Logging

# (string) Logging level. Uses the `npm` logging levels `error` / `warn` / `info` / `http` / `verbose` / `debug` / `silly` (highest to lowest). Defaults to `info`.
LOG_LEVEL=info
# (boolean) Enable logs persistency as files in the directory defined by `LOG_PERSISTENCY_DIRECTORY`. Defaults to `false`.
LOG_PERSISTENCY_ENABLED=false
# (string) Defines logs persistency directory location. Defaults to `/logs`.
LOG_PERSISTENCY_DIRECTORY=/logs

# Prometheus
# Metrics exporter for Prometheus 

# (boolean) Enable the `/monitoring/metrics` endpoint to expose platform's key metrics and be polled by a Prometheus server. Defaults to `false`.
PROMETHEUS_INTEGRATION_ENABLED=false
# (string) Token used to authenticate against the Prometheus exporter endpoint `/monitoring/metrics` through the `X-Auth-Token` HTTP header or the `token` url parameter (for instance: `/monitoring/metrics?token=YOUR_AUTH_TOKEN`). Defaults to `""`.
PROMETHEUS_EXPORTER_AUTH_TOKEN=
# (boolean) Collect and expose all the default node.js metrics to Prometheus. Defaults to `true`.
PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS=true
# (boolean) Collect and expose node.js garbage collector metrics to Prometheus. Defaults to `false`.
PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS=false

# Microsoft Application Insights
# Microsoft Application Insights

# (boolean) Enable integration with Azure Application Insights service. Defaults to `false`.
MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED=false
# (boolean) Enable collection and push of live metrics to the Azure Application Insights service. Defaults to `false`.
MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED=false
# (string) Secret instrumentation key used server-side to authenticate against the Azure Application Insights service. Defaults to `""`.
MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET=
# (string) Connection string used client-side to connect to the Azure Application Insights service . Defaults to `""`.
MICROSOFT_APPINSIGHTS_CONNECTION_STRING=

---
# Advanced Tuning
# Advanced Tuning
---

# Webhooks
# Webhooks configuration

# (string) HTTP user agent passed as a header with each request. Defaults to `nBold-Webhook/v4.24.50`.
WEBHOOKS_USER_AGENT=nBold-Webhook/v4.24.50
# (number) Interval in `ms` between two attempts. Defaults to `10000`.
WEBHOOKS_RETRY_INTERVAL=10000
# (number) Maximum number of retry before failing. Namely if it is set to 2, the module will try 3 times before failing. Defaults to `2`.
WEBHOOKS_MAX_RETRY=2
# (number) Timeout in `ms` before aborting the request if the server is unresponsive. Defaults to `5000`.
WEBHOOKS_TIMEOUT=5000

# Microsoft Graph Rate Limiter
# Microsoft Graph rate limiter configuration

# (number) How many jobs can be executing at the same time. Consider setting a value instead of leaving it null, it can help your application's performance, especially if you think the limiter's queue might get very long. Defaults to `null` (unlimited)
MICROSOFT_GRAPH_LIMITER_MAXCONCURRENT=null
# (number) How long to wait in `ms` after launching a job before launching another one. Defaults to `50`.
MICROSOFT_GRAPH_LIMITER_MINTIME=50
# (number) How long can the queue be? When the queue length exceeds that value, the selected strategy is executed to shed the load. Defaults to `null` (unlimited).
MICROSOFT_GRAPH_LIMITER_HIGHWATER=null
# (number) Which strategy to use when the queue gets longer than the high water mark (See https://www.npmjs.com/package/bottleneck#strategies). Strategies are never executed if highWater is null. Defaults to `1` (leak).
MICROSOFT_GRAPH_LIMITER_STRATEGY=1
# (number) The penalty value in `ms` used by the BLOCK strategy. Defaults to `5000`.
MICROSOFT_GRAPH_LIMITER_PENALTY=5000
# (number) How many jobs can be executed before the limiter stops executing jobs. If reservoir reaches 0, no jobs will be executed until it is no longer 0. New jobs will still be queued up. Defaults to `null` (unlimited).
MICROSOFT_GRAPH_LIMITER_RESERVOIR=null
# (number) Every `reservoirRefreshInterval` milliseconds, the reservoir value will be automatically updated to the value of `reservoirRefreshAmount`. The `reservoirRefreshInterval` value should be a multiple of 250. Defaults to `null` (unlimited).
MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHINTERVAL=null
# (number) The value to set `reservoir` to when `reservoirRefreshInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHAMOUNT=null
# (number) Every `reservoirIncreaseInterval` milliseconds, the `reservoir` value will be automatically incremented by `reservoirIncreaseAmount`. The `reservoirIncreaseInterval` value should be a multiple of 250. Defaults to `null` (disabled)
MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEINTERVAL=null
# (number) The increment applied to `reservoir` when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEAMOUNT=null
# (number) The maximum value that `reservoir` can reach when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEMAXIMUM=null

# Microsoft Planner Rate Limiter
# Microsoft Planner rate limiter configuration

# (number) How many jobs can be executing at the same time. Consider setting a value instead of leaving it null, it can help your application's performance, especially if you think the limiter's queue might get very long. Defaults to `null` (unlimited)
MICROSOFT_PLANNER_LIMITER_MAXCONCURRENT=null
# (number) How long to wait in `ms` after launching a job before launching another one. Defaults to `50`.
MICROSOFT_PLANNER_LIMITER_MINTIME=400
# (number) How long can the queue be? When the queue length exceeds that value, the selected strategy is executed to shed the load. Defaults to `null` (unlimited).
MICROSOFT_PLANNER_LIMITER_HIGHWATER=null
# (number) Which strategy to use when the queue gets longer than the high water mark (See https://www.npmjs.com/package/bottleneck#strategies). Strategies are never executed if highWater is null. Defaults to `1` (leak).
MICROSOFT_PLANNER_LIMITER_STRATEGY=1
# (number) The penalty value in `ms` used by the BLOCK strategy. Defaults to `5000`.
MICROSOFT_PLANNER_LIMITER_PENALTY=5000
# (number) How many jobs can be executed before the limiter stops executing jobs. If reservoir reaches 0, no jobs will be executed until it is no longer 0. New jobs will still be queued up. Defaults to `null` (unlimited).
MICROSOFT_PLANNER_LIMITER_RESERVOIR=null
# (number) Every `reservoirRefreshInterval` milliseconds, the reservoir value will be automatically updated to the value of `reservoirRefreshAmount`. The `reservoirRefreshInterval` value should be a multiple of 250. Defaults to `null` (unlimited).
MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHINTERVAL=null
# (number) The value to set `reservoir` to when `reservoirRefreshInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHAMOUNT=null
# (number) Every `reservoirIncreaseInterval` milliseconds, the `reservoir` value will be automatically incremented by `reservoirIncreaseAmount`. The `reservoirIncreaseInterval` value should be a multiple of 250. Defaults to `null` (disabled)
MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEINTERVAL=null
# (number) The increment applied to `reservoir` when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEAMOUNT=null
# (number) The maximum value that `reservoir` can reach when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEMAXIMUM=null

# Microsoft Cosmos DB Rate Limiter
# Microsoft Cosmos DB rate limiter configuration

# (number) How many jobs can be executing at the same time. Consider setting a value instead of leaving it null, it can help your application's performance, especially if you think the limiter's queue might get very long. Defaults to `null` (unlimited)
MICROSOFT_COSMOSDB_LIMITER_MAXCONCURRENT=null
# (number) How long to wait in `ms` after launching a job before launching another one. Defaults to `50`.
MICROSOFT_COSMOSDB_LIMITER_MINTIME=200
# (number) How long can the queue be? When the queue length exceeds that value, the selected strategy is executed to shed the load. Defaults to `null` (unlimited).
MICROSOFT_COSMOSDB_LIMITER_HIGHWATER=null
# (number) Which strategy to use when the queue gets longer than the high water mark (See https://www.npmjs.com/package/bottleneck#strategies). Strategies are never executed if highWater is null. Defaults to `1` (leak).
MICROSOFT_COSMOSDB_LIMITER_STRATEGY=1
# (number) The penalty value in `ms` used by the BLOCK strategy. Defaults to `5000`.
MICROSOFT_COSMOSDB_LIMITER_PENALTY=5000
# (number) How many jobs can be executed before the limiter stops executing jobs. If reservoir reaches 0, no jobs will be executed until it is no longer 0. New jobs will still be queued up. Defaults to `null` (unlimited).
MICROSOFT_COSMOSDB_LIMITER_RESERVOIR=null
# (number) Every `reservoirRefreshInterval` milliseconds, the reservoir value will be automatically updated to the value of `reservoirRefreshAmount`. The `reservoirRefreshInterval` value should be a multiple of 250. Defaults to `null` (unlimited).
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHINTERVAL=null
# (number) The value to set `reservoir` to when `reservoirRefreshInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHAMOUNT=null
# (number) Every `reservoirIncreaseInterval` milliseconds, the `reservoir` value will be automatically incremented by `reservoirIncreaseAmount`. The `reservoirIncreaseInterval` value should be a multiple of 250. Defaults to `null` (disabled)
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEINTERVAL=null
# (number) The increment applied to `reservoir` when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEAMOUNT=null
# (number) The maximum value that `reservoir` can reach when `reservoirIncreaseInterval` is in use. Defaults to `null` (disabled).
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEMAXIMUM=null
```sh