# 🚀 Azure Resources
This is a list of all the resources, both mandatory and optional, used to deploy a full-featured nBold environment on Azure.

::: warning N.B
This documentation is automatically generated from our sample [Terraform](https://www.terraform.io/) configuration file, and is intended to be used as a reference.
You'll have to edit the variables and configuration files to specify the appropriate settings for your environment and resources.
:::

**TABLE OF CONTENTS**

[[toc]]

---

## Terraform deployment provider

::: tip Tip
In this example we're using the [Terraform provider for Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs).
A similar configuration can be used for any other provider, such as [Docker provider](https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs) for Terraform.
:::

```hcl
# Register the Terraform provider for Microsoft Azure by defining its source and version being used
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "2.58.0"
    }
  }
}
# Configure the Terraform provider for Microsoft Azure with its subscription ID
provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}
```

## Core components

### Azure resource group
In this configuration, all the Azure resources will be created in a single resource group.  
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group)
```hcl
resource "azurerm_resource_group" "rg" {
  name     = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-rg"
  location = var.resource_group.location
  tags = {
    product     = var.product.name,
    environment = var.environment,
  }
}
```

### Azure cache for Redis
[Redis](https://redis.io) is used for all the caching and queuing mechanisms in the platform.  
The following configuration creates an Azure managed Redis instance.  
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/redis_cache)
```hcl
# Create the Redis service
resource "azurerm_redis_cache" "redis" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-redis"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "backing-services"
  }
  # The size of the Redis cache to deploy. Valid values for a SKU family of C (Basic/Standard) are 0, 1, 2, 3, 4, 5, 6, and for P (Premium) family are 1, 2, 3, 4.
  capacity = 3
  # The SKU family/pricing group to use. Valid values are C (for Basic/Standard SKU family) and P (for Premium)
  family = "C"
  # The SKU of Redis to use. Possible values are Basic, Standard and Premium
  sku_name            = "Standard"
  enable_non_ssl_port = false
  minimum_tls_version = "1.2"
  redis_configuration {
    aof_backup_enabled    = false
    enable_authentication = true
  }
  patch_schedule {
    day_of_week = "Sunday"
    # N.B: The Patch Window lasts for 5 hours from the start_hour_utc.
    start_hour_utc = "02"
  }
}
```

### Azure Database for PostgreSQL
[PostgreSQL](https://www.postgresql.org) is used for storing the application configuration (templates, policies, settings...), and as an option, to store the application audit trails.  
The following configuration creates an Azure-managed PostgreSQL service, and provisions the configuration database.  
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/postgresql_database)
```hcl
# Create the PostgreSQL service
resource "azurerm_postgresql_server" "postgres" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-postgres"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "backing-services"
  }
  sku_name = "B_Gen5_2"

  storage_mb                   = 5120
  backup_retention_days        = 7
  geo_redundant_backup_enabled = false
  auto_grow_enabled            = true

  version                          = "11"
  ssl_enforcement_enabled          = true
  ssl_minimal_tls_version_enforced = "TLS1_2"

  administrator_login           = var.postgres.db_username
  administrator_login_password  = var.postgres.db_password
  public_network_access_enabled = true
}

# Create firewall rules for the PostgreSQL service
# See: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/postgresql_firewall_rule
resource "azurerm_postgresql_firewall_rule" "postgres_firewall_rule" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-postgres-allowazure-firewall-rule"
  resource_group_name = azurerm_resource_group.rg.name
  server_name         = azurerm_postgresql_server.postgres.name
  # The Azure feature Allow access to Azure services can be enabled by setting start_ip_address and end_ip_address to 0.0.0.0
  start_ip_address = "0.0.0.0"
  end_ip_address   = "0.0.0.0"
}

# Create the configuration database
resource "azurerm_postgresql_database" "config_db" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-config-database"
  resource_group_name = azurerm_resource_group.rg.name
  server_name         = azurerm_postgresql_server.postgres.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}
```

### Azure Storage Account
Azure Storage is used for storing application-generated blobs, such as the templates pictures.  
The following configuration creates an Azure Storage Account.  
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_account)
```hcl
# Create an Azure Storage Account
resource "azurerm_storage_account" "azure_storage" {
  name                     = "${var.product.prefix}${var.resource_group.location_code}${var.environment}sa"
  location                 = azurerm_resource_group.rg.location
  resource_group_name      = azurerm_resource_group.rg.name
  account_tier             = "Standard"
  account_replication_type = "LRS"
  min_tls_version          = "TLS1_2"
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "backing-services"
  }
}
```

### Azure Cosmos DB
Azure CosmosDB is used for storing application-generated objects, such as templates advanced configurations and policies.  
The following configuration creates an Azure Cosmos DB account.  
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cosmosdb_account)
```hcl
# Create an Azure Cosmos DB Account
resource "azurerm_cosmosdb_account" "cosmosdb" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-cosmosdb"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "backing-services"
  }

  offer_type = "Standard"
  kind       = "GlobalDocumentDB"

  consistency_policy {
    consistency_level       = "BoundedStaleness"
    max_interval_in_seconds = 400    # Must be > 300 when failover is enabled
    max_staleness_prefix    = 200000 # Must be > 100000 when failover is enabled
  }

  enable_automatic_failover = true

  # 0 sets the default location
  geo_location {
    location          = azurerm_resource_group.rg.location
    failover_priority = 0
  }

  geo_location {
    location          = var.cosmosdb.replication_location
    failover_priority = 1
  }

  public_network_access_enabled = false
  ip_range_filter               = "0.0.0.0"

}
```

### Azure App Service Plans
The following configuration create an Azure App Service Plan for each tier, `web`, `api` and `jobs`.  
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service_plan)
```hcl
# Create an Azure App Service Plan for the `web` tier
resource "azurerm_app_service_plan" "web" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-web-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "web"
  }

  kind     = "Linux"
  reserved = true
  sku {
    tier = "Premium"
    size = "P2V2"
  }
}

# Create an Azure App Service Plan for the `api` tier
resource "azurerm_app_service_plan" "api" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-api-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "api"
  }
  kind     = "Linux"
  reserved = true
  sku {
    tier = "Premium"
    size = "P2V2"
  }
}

# Create an Azure App Service Plan for the `jobs` tier
resource "azurerm_app_service_plan" "jobs" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-jobs-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "jobs"
  }
  kind     = "Linux"
  reserved = true
  sku {
    tier = "Premium"
    size = "P2V2"
  }
}
```

### Azure App Services
Each tier, `web`, `api` and `jobs`, could be scaled independently by using the `scaling_factors` variables.  
To list the available linux runtimes, you can use: `az webapp list-runtimes or az webapp list-runtimes --linux`.  
N.B: The scheduler service uses the Application Service Plan from the `jobs` tier.
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service)
```hcl
# Create multiple Azure App Services for the `web` tier
resource "azurerm_app_service" "web_tier" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-web-${count.index}-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.web.id
  count               = var.scaling_factors.web
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "web"
  }
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = var.site_config.linux_fx_version
    min_tls_version  = var.site_config.min_tls_version
    app_command_line = var.site_config.app_command_line
    always_on        = var.site_config.always_on
  }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"

    "DOCKER_ENABLE_CI"                = "true"
    "DOCKER_REGISTRY_SERVER_URL"      = var.container_registry.url
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.container_registry.username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.container_registry.password

    "APP_ROLE"  = "web"
    "DEPLOY"    = "self"
    "LOG_LEVEL" = "debug"

    "WEB_PUBLICURL" = "https://web-${var.resource_group.location_code}.${var.product.domain}"
    "API_PUBLICURL" = "https://api-${var.resource_group.location_code}.${var.product.domain}/api/v1.0"

    "MICROSOFT_APP_CLIENT_ID"     = "${var.microsoft_appreg.client_id}"
    "MICROSOFT_APP_CLIENT_SECRET" = "${var.microsoft_appreg.client_secret}"

    "REDIS_HOST"       = azurerm_redis_cache.redis.hostname
    "REDIS_PORT"       = azurerm_redis_cache.redis.ssl_port
    "REDIS_DB"         = 0
    "REDIS_TLS"        = "true"
    "REDIS_SECRET_KEY" = azurerm_redis_cache.redis.primary_access_key

    "DB_DATA_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_DATA_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_DATA_DATABASE_NAME"   = azurerm_postgresql_database.config_db.name
    "DB_DATA_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}" # "${var.postgres.db_username}@${azurerm_postgresql_server.postgres.name}"
    "DB_DATA_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password                                        # var.postgres.db_password

    "DB_EVENTS_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_EVENTS_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_EVENTS_DATABASE_NAME"   = azurerm_postgresql_database.audit_db.name
    "DB_EVENTS_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}"
    "DB_EVENTS_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password # var.postgres.db_password

    "MICROSOFT_AZURE_STORAGE_ACCOUNT_NAME"       = azurerm_storage_account.azure_storage.name
    "MICROSOFT_AZURE_STORAGE_ACCOUNT_SECRET_KEY" = azurerm_storage_account.azure_storage.primary_access_key
    "MICROSOFT_AZURE_STORAGE_ENDPOINT"           = azurerm_storage_account.azure_storage.primary_blob_endpoint

    "MICROSOFT_COSMOSDB_ENDPOINT"   = azurerm_cosmosdb_account.cosmosdb.endpoint
    "MICROSOFT_COSMOSDB_SECRET_KEY" = azurerm_cosmosdb_account.cosmosdb.primary_key

    "MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED"        = true
    "MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED"       = true
    "MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET_KEY" = azurerm_application_insights.app_insights.instrumentation_key
    "MICROSOFT_APPINSIGHTS_CONNECTION_STRING"          = azurerm_application_insights.app_insights.connection_string
  }
}

# Create multiple Azure App Services for the `api` tier
resource "azurerm_app_service" "api_tier" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-api-${count.index}-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.api.id
  count               = var.scaling_factors.api
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "api"
  }
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = var.site_config.linux_fx_version
    min_tls_version  = var.site_config.min_tls_version
    app_command_line = var.site_config.app_command_line
    always_on        = var.site_config.always_on
  }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"

    "DOCKER_ENABLE_CI"                = "true"
    "DOCKER_REGISTRY_SERVER_URL"      = var.container_registry.url
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.container_registry.username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.container_registry.password

    "APP_ROLE"  = "api"
    "DEPLOY"    = "self"
    "LOG_LEVEL" = "debug"

    "WEB_PUBLICURL" = "https://web-${var.resource_group.location_code}.${var.product.domain}"
    "API_PUBLICURL" = "https://api-${var.resource_group.location_code}.${var.product.domain}/api/v1.0"

    "MICROSOFT_APP_CLIENT_ID"     = "${var.microsoft_appreg.client_id}"
    "MICROSOFT_APP_CLIENT_SECRET" = "${var.microsoft_appreg.client_secret}"

    "REDIS_HOST"       = azurerm_redis_cache.redis.hostname
    "REDIS_PORT"       = azurerm_redis_cache.redis.ssl_port
    "REDIS_TLS"        = "true"
    "REDIS_SECRET_KEY" = azurerm_redis_cache.redis.primary_access_key

    "DB_DATA_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_DATA_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_DATA_DATABASE_NAME"   = azurerm_postgresql_database.config_db.name
    "DB_DATA_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}"
    "DB_DATA_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password # var.postgres.db_password

    "DB_EVENTS_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_EVENTS_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_EVENTS_DATABASE_NAME"   = azurerm_postgresql_database.audit_db.name
    "DB_EVENTS_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}"
    "DB_EVENTS_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password # var.postgres.db_password

    "MICROSOFT_AZURE_STORAGE_ACCOUNT_NAME"       = azurerm_storage_account.azure_storage.name
    "MICROSOFT_AZURE_STORAGE_ACCOUNT_SECRET_KEY" = azurerm_storage_account.azure_storage.primary_access_key
    "MICROSOFT_AZURE_STORAGE_ENDPOINT"           = azurerm_storage_account.azure_storage.primary_blob_endpoint

    "MICROSOFT_COSMOSDB_ENDPOINT"   = azurerm_cosmosdb_account.cosmosdb.endpoint
    "MICROSOFT_COSMOSDB_SECRET_KEY" = azurerm_cosmosdb_account.cosmosdb.primary_key

    "MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED"        = true
    "MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED"       = true
    "MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET_KEY" = azurerm_application_insights.app_insights.instrumentation_key
    "MICROSOFT_APPINSIGHTS_CONNECTION_STRING"          = azurerm_application_insights.app_insights.connection_string
  }
}

# Create multiple Azure App Services for the `jobs` tier
resource "azurerm_app_service" "jobs_tier" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-jobs-${count.index}-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.jobs.id
  count               = var.scaling_factors.jobs
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "jobs"
  }
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = var.site_config.linux_fx_version
    min_tls_version  = var.site_config.min_tls_version
    app_command_line = var.site_config.app_command_line
    always_on        = var.site_config.always_on
  }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"

    "DOCKER_ENABLE_CI"                = "true"
    "DOCKER_REGISTRY_SERVER_URL"      = var.container_registry.url
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.container_registry.username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.container_registry.password

    "APP_ROLE"  = "jobs"
    "DEPLOY"    = "self"
    "LOG_LEVEL" = "debug"

    "WEB_PUBLICURL" = "https://web-${var.resource_group.location_code}.${var.product.domain}"
    "API_PUBLICURL" = "https://api-${var.resource_group.location_code}.${var.product.domain}/api/v1.0"

    "MICROSOFT_APP_CLIENT_ID"     = "${var.microsoft_appreg.client_id}"
    "MICROSOFT_APP_CLIENT_SECRET" = "${var.microsoft_appreg.client_secret}"

    "REDIS_HOST"       = azurerm_redis_cache.redis.hostname
    "REDIS_PORT"       = azurerm_redis_cache.redis.ssl_port
    "REDIS_TLS"        = "true"
    "REDIS_SECRET_KEY" = azurerm_redis_cache.redis.primary_access_key

    "DB_DATA_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_DATA_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_DATA_DATABASE_NAME"   = azurerm_postgresql_database.config_db.name
    "DB_DATA_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}"
    "DB_DATA_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password # var.postgres.db_password

    "DB_EVENTS_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_EVENTS_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_EVENTS_DATABASE_NAME"   = azurerm_postgresql_database.audit_db.name
    "DB_EVENTS_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}"
    "DB_EVENTS_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password # var.postgres.db_password

    "MICROSOFT_AZURE_STORAGE_ACCOUNT_NAME"       = azurerm_storage_account.azure_storage.name
    "MICROSOFT_AZURE_STORAGE_ACCOUNT_SECRET_KEY" = azurerm_storage_account.azure_storage.primary_access_key
    "MICROSOFT_AZURE_STORAGE_ENDPOINT"           = azurerm_storage_account.azure_storage.primary_blob_endpoint

    "MICROSOFT_COSMOSDB_ENDPOINT"   = azurerm_cosmosdb_account.cosmosdb.endpoint
    "MICROSOFT_COSMOSDB_SECRET_KEY" = azurerm_cosmosdb_account.cosmosdb.primary_key

    "MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED"        = true
    "MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED"       = true
    "MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET_KEY" = azurerm_application_insights.app_insights.instrumentation_key
    "MICROSOFT_APPINSIGHTS_CONNECTION_STRING"          = azurerm_application_insights.app_insights.connection_string
  }
}

# Create an Azure App Services for the scheduler service (part of the `jobs` tier)
resource "azurerm_app_service" "scheduler" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-scheduler-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.jobs.id
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "jobs"
  }
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = var.site_config.linux_fx_version
    min_tls_version  = var.site_config.min_tls_version
    app_command_line = var.site_config.app_command_line
    always_on        = var.site_config.always_on
  }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"

    "DOCKER_ENABLE_CI"                = "true"
    "DOCKER_REGISTRY_SERVER_URL"      = var.container_registry.url
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.container_registry.username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.container_registry.password

    "APP_ROLE"  = "scheduler"
    "DEPLOY"    = "self"
    "LOG_LEVEL" = "debug"

    "WEB_PUBLICURL" = "https://web-${var.resource_group.location_code}.${var.product.domain}"
    "API_PUBLICURL" = "https://api-${var.resource_group.location_code}.${var.product.domain}/api/v1.0"

    "MICROSOFT_APP_CLIENT_ID"     = "${var.microsoft_appreg.client_id}"
    "MICROSOFT_APP_CLIENT_SECRET" = "${var.microsoft_appreg.client_secret}"

    "REDIS_HOST"       = azurerm_redis_cache.redis.hostname
    "REDIS_PORT"       = azurerm_redis_cache.redis.ssl_port
    "REDIS_TLS"        = "true"
    "REDIS_SECRET_KEY" = azurerm_redis_cache.redis.primary_access_key

    "DB_DATA_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_DATA_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_DATA_DATABASE_NAME"   = azurerm_postgresql_database.config_db.name
    "DB_DATA_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}"
    "DB_DATA_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password # var.postgres.db_password

    "DB_EVENTS_HOST"            = azurerm_postgresql_server.postgres.fqdn
    "DB_EVENTS_DIALECT_OPTIONS" = "{\"ssl\": true}"
    "DB_EVENTS_DATABASE_NAME"   = azurerm_postgresql_database.audit_db.name
    "DB_EVENTS_USERNAME"        = "${azurerm_postgresql_server.postgres.administrator_login}@${azurerm_postgresql_server.postgres.name}"
    "DB_EVENTS_PASSWORD"        = azurerm_postgresql_server.postgres.administrator_login_password # var.postgres.db_password

    "MICROSOFT_AZURE_STORAGE_ACCOUNT_NAME"       = azurerm_storage_account.azure_storage.name
    "MICROSOFT_AZURE_STORAGE_ACCOUNT_SECRET_KEY" = azurerm_storage_account.azure_storage.primary_access_key
    "MICROSOFT_AZURE_STORAGE_ENDPOINT"           = azurerm_storage_account.azure_storage.primary_blob_endpoint

    "MICROSOFT_COSMOSDB_ENDPOINT"   = azurerm_cosmosdb_account.cosmosdb.endpoint
    "MICROSOFT_COSMOSDB_SECRET_KEY" = azurerm_cosmosdb_account.cosmosdb.primary_key

    "MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED"        = true
    "MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED"       = true
    "MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET_KEY" = azurerm_application_insights.app_insights.instrumentation_key
    "MICROSOFT_APPINSIGHTS_CONNECTION_STRING"          = azurerm_application_insights.app_insights.connection_string
  }
}
```

### Azure Front Door
Azure Front Door is an all-in-one service that is used to provide the following services to the nBold platform
- HTTP load balancing
- Web Application Firewall
- SSL certificates managemnet and HTTPS enforcement
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/frontdoor)
```hcl
# Create the Azure Front Door resource
resource "azurerm_frontdoor" "afd" {
  name                                         = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-afd"
  resource_group_name                          = azurerm_resource_group.rg.name
  enforce_backend_pools_certificate_name_check = true
  load_balancer_enabled                        = true
  backend_pools_send_receive_timeout_seconds   = 60
  tags = {
    product     = var.product.name,
    environment = var.environment,
  }

  # Front door must always contain the default associated frontend endpoint
  frontend_endpoint {
    name                                    = "default-frontend-endpoint"
    host_name                               = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-afd.azurefd.net"
    session_affinity_enabled                = false
    session_affinity_ttl_seconds            = 0
    web_application_firewall_policy_link_id = ""
  }

  # Create public endpoints
  frontend_endpoint {
    name                                    = "web-frontend-endpoint"
    host_name                               = "web-${var.resource_group.location_code}.${var.product.domain}"
    session_affinity_enabled                = false
    session_affinity_ttl_seconds            = 0
    web_application_firewall_policy_link_id = ""
  }
  frontend_endpoint {
    name                                    = "api-frontend-endpoint"
    host_name                               = "api-${var.resource_group.location_code}.${var.product.domain}"
    session_affinity_enabled                = false
    session_affinity_ttl_seconds            = 0
    web_application_firewall_policy_link_id = ""
  }

  # Create a routing rule that enforces HTTPS
  routing_rule {
    name               = "http-to-https-redirect"
    frontend_endpoints = ["web-frontend-endpoint", "api-frontend-endpoint"]
    accepted_protocols = ["Http"]
    patterns_to_match  = ["/*"]
    enabled            = true
    redirect_configuration {
      redirect_protocol = "HttpsOnly"
      redirect_type     = "Moved"
    }
  }

  # Create a routing rule for each public endpoint
  routing_rule {
    name               = "web-tier-routing-rule"
    frontend_endpoints = ["web-frontend-endpoint"]
    accepted_protocols = ["Https"]
    patterns_to_match  = ["/*"]
    enabled            = true
    forwarding_configuration {
      backend_pool_name   = "web-tier-backend-pool"
      cache_enabled       = false
      forwarding_protocol = "HttpsOnly"
    }
  }
  routing_rule {
    name               = "api-tier-routing-rule"
    frontend_endpoints = ["api-frontend-endpoint"]
    accepted_protocols = ["Https"]
    patterns_to_match  = ["/*"]
    enabled            = true
    forwarding_configuration {
      backend_pool_name   = "api-tier-backend-pool"
      cache_enabled       = false
      forwarding_protocol = "HttpsOnly"
    }
  }

  # Create a backend pool for each public endpoint
  backend_pool {
    name = "web-tier-backend-pool"
    backend {
      enabled     = true
      address     = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-web-1-appservice.azurewebsites.net"
      host_header = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-web-1-appservice.azurewebsites.net"
      http_port   = 80
      https_port  = 443
      priority    = 1
      weight      = 50
    }
    backend {
      enabled     = true
      address     = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-web-2-appservice.azurewebsites.net"
      host_header = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-web-2-appservice.azurewebsites.net"
      http_port   = 80
      https_port  = 443
      priority    = 1
      weight      = 50
    }
    health_probe_name   = "backend-pool-health-probe"
    load_balancing_name = "backend-pool-load-balancing"
  }
  backend_pool {
    name = "api-tier-backend-pool"
    backend {
      enabled     = true
      address     = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-api-1-appservice.azurewebsites.net"
      host_header = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-api-1-appservice.azurewebsites.net"
      http_port   = 80
      https_port  = 443
      priority    = 1
      weight      = 50
    }
    backend {
      enabled     = true
      address     = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-api-2-appservice.azurewebsites.net"
      host_header = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-api-2-appservice.azurewebsites.net"
      http_port   = 80
      https_port  = 443
      priority    = 1
      weight      = 50
    }
    health_probe_name   = "backend-pool-health-probe"
    load_balancing_name = "backend-pool-load-balancing"
  }

  # Define common (shared by all the backend pools) health probes policy
  backend_pool_health_probe {
    name                = "backend-pool-health-probe"
    enabled             = true
    path                = "/monitoring/ping"
    protocol            = "Https"
    probe_method        = "HEAD"
    interval_in_seconds = 120
  }

  # Define common (shared by all the backend pools) load balancing policy
  backend_pool_load_balancing {
    name                            = "backend-pool-load-balancing"
    sample_size                     = 4
    successful_samples_required     = 2
    additional_latency_milliseconds = 0
  }
}

# Define HTTPS configurations for each endpoint
# See https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/frontdoor_custom_https_configuration

# Don't apply custom HTTPS configuration to the default endpoint
resource "azurerm_frontdoor_custom_https_configuration" "default_https" {
  frontend_endpoint_id              = azurerm_frontdoor.afd.frontend_endpoints["default-frontend-endpoint"]
  custom_https_provisioning_enabled = false
}
# Apply custom HTTPS configuration to the web endpoint, using an autmatically generated certificate by Azure Front Door itself.
resource "azurerm_frontdoor_custom_https_configuration" "web_https" {
  frontend_endpoint_id              = azurerm_frontdoor.afd.frontend_endpoints["web-frontend-endpoint"]
  custom_https_provisioning_enabled = true
  custom_https_configuration {
    certificate_source = "FrontDoor"
  }
}
# Apply custom HTTPS configuration to the api endpoint, using an autmatically generated certificate by Azure Front Door itself.
resource "azurerm_frontdoor_custom_https_configuration" "api_https" {
  frontend_endpoint_id              = azurerm_frontdoor.afd.frontend_endpoints["api-frontend-endpoint"]
  custom_https_provisioning_enabled = true
  custom_https_configuration {
    certificate_source = "FrontDoor"
  }
}
```

## Monitoring components

### Azure Monitoring App Service Plan
To make things easier, we'll create a single App Service Plan for the monitoring resources. In production, we recommend to create distincts App Service Plans for each monitoring service.  
[Learn more...](https://prometheus.io)
```hcl
# Create an Azure App Service Plan for the `monitoring` tier
resource "azurerm_app_service_plan" "monitoring" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-monitoring-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "monitoring"
  }

  kind     = "Linux"
  reserved = true
  sku {
    tier = "Premium"
    size = "P2V2"
  }
}
```

### Events Collector App Service
The event collector app is used to collect and distribute the [application events](./EVENTS.md) and audit trails to a storage service.  
The following configuration creates a container for the [Jitsu](https://github.com/jitsucom/jitsu) service, using the [@jitsuco/server](https://jitsu.com/docs/deployment/deploy-with-docker/jitsu-server) standalone image.  
It also creates a dedicated audit database for the events collector for isolation purposes.  
[Learn more...](https://jitsu.com/docs/deployment/deploy-with-docker)
```hcl
# Create the audit database
resource "azurerm_postgresql_database" "audit_db" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-audit-database"
  resource_group_name = azurerm_resource_group.rg.name
  server_name         = azurerm_postgresql_server.postgres.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}

# Create the events collector service
# N.B: Events collector service could be scaled by using the `scaling_factors` variables.  
resource "azurerm_app_service" "events_collector" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-eventscollector-${count.index}-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.monitoring.id
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "monitoring"
  }
  count      = var.scaling_factors.jitsu
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = "DOCKER|jitsucom/server:latest"
    min_tls_version  = var.site_config.min_tls_version
    always_on        = true
  }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = false
    "DOCKER_ENABLE_CI"                    = true
    "SERVER_NAME"                         = "jitsu_${count.index}"
    "PORT"                                = 80
    "REDIS_URL"                           = "redis:${azurerm_redis_cache.redis.hostname}:${azurerm_redis_cache.redis.ssl_port}?db=0&password=${azurerm_redis_cache.redis.primary_access_key}"
    "TLS_SKIP_VERIFY"                     = true
    "USER_RECOGNITION_ENABLED"            = false
    "SERVER_ADMIN_TOKEN"                  = "${var.events_collector.EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN}"
  }
}
```

### Azure Application Insights
The Azure Application Insights service is used to collect application traces and performance metrics for diagnostic and analytical purposes.  
[Learn more...](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_insights)
```hcl
resource "azurerm_application_insights" "app_insights" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-app-insights"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  application_type    = "Node.JS"
  retention_in_days   = 30
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "monitoring"
  }
}
```

### Prometheus App Service
Prometheus is used to collect all the metrics from the whole platform.  
[Learn more...](https://hub.docker.com/r/prom/prometheus/)
```hcl
# Create the Prometheus service
resource "azurerm_app_service" "prometheus" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-prometheus-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.monitoring.id
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "monitoring"
  }
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = "DOCKER|prom/prometheus:latest"
    min_tls_version  = var.site_config.min_tls_version
    always_on        = true
  }
  # Volume for the Prometheus configuration
  # volumes {
  #   host_path      = "${path.cwd}/volumes/prometheus/conf/prometheus.yml"
  #   container_path = "/etc/prometheus/prometheus.yml"
  #   read_only      = true
  # }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DOCKER_ENABLE_CI"                    = "true"
    "LISTEN_ADDRESS"                      = "0.0.0.0"
    "LISTEN_PORT"                         = 9090
  }
}
```

### Redis Prometheus Exporter App Service
The [Redis Prometheus exporter](https://github.com/oliver006/redis_exporter) exposes metrics from the Redis service
[Learn more...](https://prometheus.io)
```hcl
# Create the Redis Prometheus exporter service
resource "azurerm_app_service" "redis_prometheus_exporter" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-redisprometheusexporter-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.monitoring.id
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "monitoring"
  }
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = "DOCKER|oliver006/redis_exporter:latest"
    min_tls_version  = var.site_config.min_tls_version
    always_on        = true
  }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE"  = "false"
    "DOCKER_ENABLE_CI"                     = "true"
    "REDIS_ADDR"                           = "redis:${azurerm_redis_cache.redis.hostname}:${azurerm_redis_cache.redis.ssl_port}"
    "REDIS_PASSWORD"                       = azurerm_redis_cache.redis.primary_access_key
    "REDIS_EXPORTER_WEB_LISTEN_ADDRESS"    = "0.0.0.0:80"
    "REDIS_EXPORTER_WEB_TELEMETRY_PATH"    = "/metrics"
    "REDIS_EXPORTER_NAMESPACE"             = "redis"
    "REDIS_EXPORTER_INCL_SYSTEM_METRICS"   = "true"
    "REDIS_EXPORTER_SKIP_TLS_VERIFICATION" = "true"
    "REDIS_EXPORTER_PING_ON_CONNECT"       = "true"
  }
}
```

### Bull Prometheus Exporter App Service
The [Bull Prometheus exporter](https://github.com/UpHabit/bull_exporter) exposes metrics from the queuing service based on Redis
[Learn more...](https://prometheus.io)
```hcl
# Create the Bull Prometheus exporter service
resource "azurerm_app_service" "bull_prometheus_exporter" {
  name                = "${var.product.prefix}-${var.resource_group.location_code}-${var.environment}-bullprometheusexporter-appservice"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.monitoring.id
  tags = {
    product     = var.product.name,
    environment = var.environment,
    tier        = "monitoring"
  }
  enabled    = true
  https_only = true
  site_config {
    linux_fx_version = "DOCKER|uphabit/bull_exporter:latest"
    min_tls_version  = var.site_config.min_tls_version
    always_on        = true
  }
  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DOCKER_ENABLE_CI"                    = "true"
    "EXPORTER_REDIS_URL"                  = "redis:${azurerm_redis_cache.redis.hostname}:${azurerm_redis_cache.redis.ssl_port}?db=0&password=${azurerm_redis_cache.redis.primary_access_key}"
    "EXPORTER_PREFIX"                     = "st:queues",
    "EXPORTER_STAT_PREFIX"                = "bull_queue_"
  }
}
```
