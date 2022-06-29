# Docker Resources
This is a list of all the resources, both mandatory and optional, used to deploy a full-featured nBold environment on Docker.

::: warning N.B
This documentation is automatically generated from our sample [Terraform](https://www.terraform.io/) configuration file, and is intended to be used as a reference.
You'll have to edit the variables and configuration files to specify the appropriate settings for your environment and resources.
:::

**TABLE OF CONTENTS**

[[toc]]

---

## Deployment providers

::: tip Tip
In this example we're using the [Docker provider](https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs) for Terraform.
A similar configuration can be used for any other provider, especially [Azure RM provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs) for Terraform.
:::

```hcl
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
  }
}
provider "docker" {}
```

## Virtual Networks
The following configuration creates a private virtual network with a subnet for the environment.
```hcl
resource "docker_network" "private_network" {
  name = "private_network"
}
```

## Backing services
A backing service is any service the app consumes over the network as part of its normal operation.

### Main Database
PostgreSQL is used for storing the application configuration (templates, policies, settings...).
The following configuration references an image and creates a container for the [PostgreSQL](https://www.postgresql.org) service.
```hcl
resource "docker_image" "postgres" {
  name         = "postgres:13.4-alpine"
  keep_locally = false
}
resource "docker_container" "postgres_main" {
  name     = var.DB_DATA_HOST
  hostname = var.DB_DATA_HOST
  image    = docker_image.postgres.latest
  count    = 1
  # Sample healthcheck command
  # test: [ "CMD", "pg_isready", "-q", "-d", "${DB_DATA_DATABASE_NAME}", "-U", "${DB_DATA_USERNAME}" ]
  env = [
    "POSTGRES_DB=${var.DB_DATA_DATABASE_NAME}",
    "POSTGRES_USER=${var.DB_DATA_USERNAME}",
    "POSTGRES_PASSWORD=${var.DB_DATA_PASSWORD}"
  ]
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 5432
    external = 5432
  }
  # Available paths for molumes mapping
  # - /var/lib/postgresql/data
}
```

### Cache and queuing service
Redis is used for all the caching and queuing mechanisms.
The following configuration references an image and creates a container for the [Redis](https://redis.io) service.
```hcl
resource "docker_image" "redis" {
  name         = "redis:alpine"
  keep_locally = false
}
resource "docker_container" "redis" {
  name  = var.REDIS_HOST
  image = docker_image.redis.latest
  count = 1
  # Start Redis with persistence enabled. See https://redis.io/topics/persistence
  # N.B: A warning message may appear ``WARNING overcommit_memory is set to 0! Background save may fail under low memory condition.`
  # You can safely omit this warning.
  # To fix this issue, add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
  command = ["redis-server", "--include", "/usr/local/etc/redis/redis.conf"]
  # test: ["CMD", "redis-cli", "ping"]
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 6379
    external = 6379
  }
  volumes {
    host_path      = "${path.cwd}/volumes/redis/conf/redis.conf"
    container_path = "/usr/local/etc/redis/redis.conf"
    read_only      = true
  }
}
```

### Blob service
Azure Storage is used for storing application-generated blobs, such as the templates pictures.
The following configuration references an image and creates a container for the [Azurite](https://github.com/Azure/Azurite) service, which is lightweight server clone of Azure Storage that simulates most of the commands supported by it with minimal dependencies.
```hcl
resource "docker_image" "azure_storage" {
  name         = "mcr.microsoft.com/azure-storage/azurite:latest"
  keep_locally = false
}
resource "docker_container" "azure_storage" {
  name    = var.AZURESTORAGE_HOST
  image   = docker_image.azure_storage.latest
  count   = 1
  command = ["azurite", "--blobPort", "10000", "--blobHost", "0.0.0.0", "--queuePort", "10001", "--queueHost", "0.0.0.0", "--tablePort", "10002", "--tableHost", "0.0.0.0", "--loose", "--skipApiVersionCheck"]
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 10000
    external = 10000
  }
  ports {
    internal = 10001
    external = 10001
  }
  ports {
    internal = 10002
    external = 10002
  }
}
```

### NoSQL service
Azure CosmosDB is used for storing application-generated objects, such as templates advanced configurations and policies.
The following configuration references an image and creates a container for the [Azure CosmosDB emulator](https://github.com/Azure/azure-cosmos-db-emulator-docker) service, which is lightweight server clone of Azure CosmosDB that simulates most of the commands supported by it with minimal dependencies.
```hcl
resource "docker_image" "cosmos_db" {
  name         = "mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator:latest"
  keep_locally = false
}
resource "docker_container" "cosmos_db" {
  name  = var.COSMOSDB_HOST
  image = docker_image.cosmos_db.latest
  count = 1
  env = [
    # N.B: Keep the partition count high (at least 40) to prevent throttling 503 errors from the emulator. See:
    # - https://github.com/Azure/azure-cosmos-dotnet-v2/issues/817
    # - https://docs.microsoft.com/en-us/azure/cosmos-db/emulator-command-line-parameters#set-partitioncount
    "AZURE_COSMOS_EMULATOR_PARTITION_COUNT=40",
    "AZURE_COSMOS_EMULATOR_ENABLE_DATA_PERSISTENCE=true"
  ]
  networks_advanced {
    name = "private_network"
  }
  # To connect to cosmos db emulator, it requires a certificate
  # curl -k https://localhost:8081/_explorer/emulator.pem > ~/emulatorcert.crt && sudo cp ~/emulatorcert.crt /usr/local/share/ca-certificates/ && sudo update-ca-certificates
  # Explorer: https://localhost:8081/_explorer/index.html
  ports {
    internal = 8081
    external = 8081
  }
  ports {
    internal = 10251
    external = 10251
  }
  ports {
    internal = 10252
    external = 10252
  }
  ports {
    internal = 10253
    external = 10253
  }
  ports {
    internal = 10254
    external = 10254
  }
}
```

### Events collector service
Jitsu may be used to collect and distribute the [application events](/hosting/references/events-reference.md) and audit trails.
The following configuration references an image and creates a container for the [Jitsu](https://github.com/jitsucom/jitsu) service, using the [@jitsuco/server](https://jitsu.com/docs/deployment/deploy-with-docker/jitsu-server) standalone image.
For isolation purposes, it also provisions a specific PostgreSQL instance for the events database, based on the same image as the main database service.
```hcl
resource "docker_container" "postgres_events" {
  name  = var.DB_EVENTS_HOST
  image = docker_image.postgres.latest
  count = 1
  # Sample healthcheck command
  # test: [ "CMD", "pg_isready", "-q", "-d", "${DB_DATA_DATABASE_NAME}", "-U", "${DB_DATA_USERNAME}" ]
  env = [
    "POSTGRES_DB=${var.DB_EVENTS_DATABASE_NAME}",
    "POSTGRES_USER=${var.DB_EVENTS_USERNAME}",
    "POSTGRES_PASSWORD=${var.DB_EVENTS_PASSWORD}"
  ]
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 5432
    external = 5433
  }
  # Available paths for molumes mapping
  # - /var/lib/postgresql/data
}
resource "docker_image" "jitsu" {
  name         = "jitsucom/server:latest"
  keep_locally = false
}
resource "docker_container" "jitsu" {
  name    = "jitsu_${count.index}"
  image = docker_image.jitsu.latest
  depends_on = [
    docker_container.redis,
    docker_container.postgres_events
  ]
  count = var.scaling_factors.jitsu
  env = [
    "SERVER_NAME=jitsu_${count.index}",
    "PORT=8002",
    "REDIS_URL=redis://redis:6379/0",
    "TLS_SKIP_VERIFY=true",
    "USER_RECOGNITION_ENABLED=false",
    "SERVER_ADMIN_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN}"
  ]
  networks_advanced {
    name = "private_network"
  }
  volumes {
    host_path      = "${path.cwd}/volumes/jitsu/conf/eventnative.yaml"
    container_path = "/home/eventnative/data/config/eventnative.yaml"
    read_only      = true
  }
  # volumes {
  #   host_path      = "${path.cwd}/volumes/jitsu/logs/server"
  #   container_path = "/home/eventnative/data/logs"
  #   read_only      = false
  # }
}
```

## Application services

### Application image
::: tip Note
All the application services are based on the same `nboldhq/nbold` image.
Contact us to access our secured [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) or integrate this image to your own private container registry such as [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry) to access advanced CI/CD capabilities.
:::

```hcl
resource "docker_image" "salestim" {
  name         = "salestim/app-platform"
  keep_locally = true
}
```

### Application containers
As a multi-tier application, nBold is composed of several services that could be executed and scaled independently.

#### Installer service
The installer service is responsible for initializing the backing services schemas (databases, blobs containers, etc.).
It is run once and exits after the initialization is complete.
```hcl
resource "docker_container" "salestim_installer" {
  name    = "salestim_installer"
  image   = docker_image.salestim.latest
  count   = 1
  command = ["npm", "run", "backend:setup"]
  env = [
    "NODE_TLS_REJECT_UNAUTHORIZED=0",
    "LOG_LEVEL=debug",
    "LOG_PERSISTENCY_ENABLED=true",
    "LOG_PERSISTENCY_DIRECTORY=/volumes/logs",
    "REDIS_HOST=${var.REDIS_HOST}",
    "DB_DATA_HOST=${var.DB_DATA_HOST}",
    "DB_DATA_DATABASE_NAME=${var.DB_DATA_DATABASE_NAME}",
    "DB_DATA_USERNAME=${var.DB_DATA_USERNAME}",
    "DB_DATA_PASSWORD=${var.DB_DATA_PASSWORD}",
    "DB_EVENTS_HOST=${var.DB_EVENTS_HOST}",
    "DB_EVENTS_DATABASE_NAME=${var.DB_EVENTS_DATABASE_NAME}",
    "DB_EVENTS_USERNAME=${var.DB_EVENTS_USERNAME}",
    "DB_EVENTS_PASSWORD=${var.DB_EVENTS_PASSWORD}",
    "MICROSOFT_AZURE_STORAGE_ENDPOINT=http://${var.AZURESTORAGE_HOST}:10000/devstoreaccount1",
    "MICROSOFT_COSMOSDB_ENDPOINT=https://${var.COSMOSDB_HOST}:8081"
  ]
  hostname = "salestim_installer"
  networks_advanced {
    name = "private_network"
  }
  volumes {
    host_path      = "${path.cwd}/volumes/salestim/logs/installer"
    container_path = "/app/volumes/logs"
    read_only      = false
  }
  depends_on = [
    docker_container.redis,
    docker_container.postgres_main,
    docker_container.postgres_events,
    docker_container.azure_storage,
    docker_container.cosmos_db
  ]
}
```

#### Api tier
The api tier could be scaled up and down by configuring the `scaling_factors.api` variable.
```hcl
resource "docker_container" "salestim_api" {
  name     = "salestim_api_${count.index}"
  # hostname = "salestim_api"
  image    = docker_image.salestim.latest
  count    = var.scaling_factors.api
  command  = ["node", "./src/index.js"]
  # Sample healthcheck command
  # Test the monitoring ping endpoint, exits as 0 (success) or exits as 1 (fail)
  # test: apk update && apk upgrade && apk add --no-cache curl && curl --fail http://localhost:${APP_PORT}/monitoring/ping || exit 1
  env = [
    "NODE_TLS_REJECT_UNAUTHORIZED=0",
    "APP_ROLE=api",
    "APP_PORT=3000",
    "DEPLOY=self",
    "LOG_LEVEL=debug",
    "LOG_PERSISTENCY_ENABLED=true",
    "LOG_PERSISTENCY_DIRECTORY=/volumes/logs",
    "REDIS_HOST=${var.REDIS_HOST}",
    "DB_DATA_HOST=${var.DB_DATA_HOST}",
    "DB_DATA_DATABASE_NAME=${var.DB_DATA_DATABASE_NAME}",
    "DB_DATA_USERNAME=${var.DB_DATA_USERNAME}",
    "DB_DATA_PASSWORD=${var.DB_DATA_PASSWORD}",
    "DB_EVENTS_HOST=${var.DB_EVENTS_HOST}",
    "DB_EVENTS_DATABASE_NAME=${var.DB_EVENTS_DATABASE_NAME}",
    "DB_EVENTS_USERNAME=${var.DB_EVENTS_USERNAME}",
    "DB_EVENTS_PASSWORD=${var.DB_EVENTS_PASSWORD}",
    "MICROSOFT_AZURE_STORAGE_ENDPOINT=http://${var.AZURESTORAGE_HOST}:10000/devstoreaccount1",
    "MICROSOFT_COSMOSDB_ENDPOINT=https://${var.COSMOSDB_HOST}:8081",
    "EVENTSCOLLECTOR_ENABLED=${var.events_collector.EVENTSCOLLECTOR_ENABLED}",
    "EVENTSCOLLECTOR_ROOT_URL=${var.events_collector.EVENTSCOLLECTOR_ROOT_URL}",
    "EVENTSCOLLECTOR_AUTH_HEADER=${var.events_collector.EVENTSCOLLECTOR_AUTH_HEADER}",
    "EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_SERVER_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_SERVER_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN}",
    "EVENTSCOLLECTOR_TRACK_ENDPOINT=${var.events_collector.EVENTSCOLLECTOR_TRACK_ENDPOINT}",
    "EVENTSCOLLECTOR_TRACK_METHOD=${var.events_collector.EVENTSCOLLECTOR_TRACK_METHOD}",
    "WEB_PUBLICURL=${var.proxy_urls.web}",
    "API_PUBLICURL=${var.proxy_urls.api}",
    "MICROSOFT_APP_CLIENT_ID=${var.microsoft_appreg.client_id}",
    "MICROSOFT_APP_CLIENT_SECRET=${var.microsoft_appreg.client_secret}",
    "PROMETHEUS_EXPORTER_ENABLED=true",
    "PROMETHEUS_EXPORTER_AUTH_TOKEN=${var.prometheus.exporter_auth_token}",
    "PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS=true",
    "PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS=false"
  ]
  networks_advanced {
    name = "private_network"
  }
  volumes {
    host_path      = "${path.cwd}/volumes/salestim/logs/api"
    container_path = "/app/volumes/logs"
    read_only      = false
  }
  depends_on = [
    docker_container.redis,
    docker_container.postgres_main,
    docker_container.postgres_events,
    docker_container.azure_storage,
    docker_container.cosmos_db
  ]
}
```

#### Web tier
The web tier could be scaled up and down by configuring the `scaling_factors.web` variable.
```hcl
resource "docker_container" "salestim_web" {
  name     = "salestim_web_${count.index}"
  image    = docker_image.salestim.latest
  count    = var.scaling_factors.web
  command  = ["node", "./src/index.js"]
  # Sample healthcheck command
  # Test the monitoring ping endpoint, exits as 0 (success) or exits as 1 (fail)
  # test: apk update && apk upgrade && apk add --no-cache curl && curl --fail http://localhost:${APP_PORT}/monitoring/ping || exit 1
  env = [
    "NODE_TLS_REJECT_UNAUTHORIZED=0",
    "APP_ROLE=web",
    "APP_PORT=3000",
    "DEPLOY=self",
    "LOG_LEVEL=debug",
    "LOG_PERSISTENCY_ENABLED=true",
    "LOG_PERSISTENCY_DIRECTORY=/volumes/logs",
    "REDIS_HOST=${var.REDIS_HOST}",
    "DB_DATA_HOST=${var.DB_DATA_HOST}",
    "DB_DATA_DATABASE_NAME=${var.DB_DATA_DATABASE_NAME}",
    "DB_DATA_USERNAME=${var.DB_DATA_USERNAME}",
    "DB_DATA_PASSWORD=${var.DB_DATA_PASSWORD}",
    "DB_EVENTS_HOST=${var.DB_EVENTS_HOST}",
    "DB_EVENTS_DATABASE_NAME=${var.DB_EVENTS_DATABASE_NAME}",
    "DB_EVENTS_USERNAME=${var.DB_EVENTS_USERNAME}",
    "DB_EVENTS_PASSWORD=${var.DB_EVENTS_PASSWORD}",
    "MICROSOFT_AZURE_STORAGE_ENDPOINT=http://${var.AZURESTORAGE_HOST}:10000/devstoreaccount1",
    "MICROSOFT_COSMOSDB_ENDPOINT=https://${var.COSMOSDB_HOST}:8081",
    "EVENTSCOLLECTOR_ENABLED=${var.events_collector.EVENTSCOLLECTOR_ENABLED}",
    "EVENTSCOLLECTOR_ROOT_URL=${var.events_collector.EVENTSCOLLECTOR_ROOT_URL}",
    "EVENTSCOLLECTOR_AUTH_HEADER=${var.events_collector.EVENTSCOLLECTOR_AUTH_HEADER}",
    "EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_SERVER_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_SERVER_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN}",
    "EVENTSCOLLECTOR_TRACK_ENDPOINT=${var.events_collector.EVENTSCOLLECTOR_TRACK_ENDPOINT}",
    "EVENTSCOLLECTOR_TRACK_METHOD=${var.events_collector.EVENTSCOLLECTOR_TRACK_METHOD}",
    "WEB_PUBLICURL=${var.proxy_urls.web}",
    "API_PUBLICURL=${var.proxy_urls.api}",
    "MICROSOFT_APP_CLIENT_ID=${var.microsoft_appreg.client_id}",
    "MICROSOFT_APP_CLIENT_SECRET=${var.microsoft_appreg.client_secret}",
    "PROMETHEUS_EXPORTER_ENABLED=true",
    "PROMETHEUS_EXPORTER_AUTH_TOKEN=${var.prometheus.exporter_auth_token}",
    "PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS=true",
    "PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS=false"
  ]
  networks_advanced {
    name = "private_network"
  }
  volumes {
    host_path      = "${path.cwd}/volumes/salestim/logs/web"
    container_path = "/app/volumes/logs"
    read_only      = false
  }
  depends_on = [
    docker_container.redis,
    docker_container.postgres_main,
    docker_container.postgres_events,
    docker_container.azure_storage,
    docker_container.cosmos_db
  ]
}
```

#### Jobs tier
The jobs tier could be scaled up and down by configuring the `scaling_factors.jobs` variable.
```hcl
resource "docker_container" "salestim_jobs" {
  name     = "salestim_jobs_${count.index}"
  image    = docker_image.salestim.latest
  count    = var.scaling_factors.jobs
  command  = ["node", "./src/index.js"]
  # Sample healthcheck command
  # Test the monitoring ping endpoint, exits as 0 (success) or exits as 1 (fail)
  # test: apk update && apk upgrade && apk add --no-cache curl && curl --fail http://localhost:${APP_PORT}/monitoring/ping || exit 1
  env = [
    "NODE_TLS_REJECT_UNAUTHORIZED=0",
    "APP_ROLE=jobs",
    "APP_PORT=3000",
    "DEPLOY=self",
    "LOG_LEVEL=debug",
    "LOG_PERSISTENCY_ENABLED=true",
    "LOG_PERSISTENCY_DIRECTORY=/volumes/logs",
    "REDIS_HOST=${var.REDIS_HOST}",
    "DB_DATA_HOST=${var.DB_DATA_HOST}",
    "DB_DATA_DATABASE_NAME=${var.DB_DATA_DATABASE_NAME}",
    "DB_DATA_USERNAME=${var.DB_DATA_USERNAME}",
    "DB_DATA_PASSWORD=${var.DB_DATA_PASSWORD}",
    "DB_EVENTS_HOST=${var.DB_EVENTS_HOST}",
    "DB_EVENTS_DATABASE_NAME=${var.DB_EVENTS_DATABASE_NAME}",
    "DB_EVENTS_USERNAME=${var.DB_EVENTS_USERNAME}",
    "DB_EVENTS_PASSWORD=${var.DB_EVENTS_PASSWORD}",
    "MICROSOFT_AZURE_STORAGE_ENDPOINT=http://${var.AZURESTORAGE_HOST}:10000/devstoreaccount1",
    "MICROSOFT_COSMOSDB_ENDPOINT=https://${var.COSMOSDB_HOST}:8081",
    "EVENTSCOLLECTOR_ENABLED=${var.events_collector.EVENTSCOLLECTOR_ENABLED}",
    "EVENTSCOLLECTOR_ROOT_URL=${var.events_collector.EVENTSCOLLECTOR_ROOT_URL}",
    "EVENTSCOLLECTOR_AUTH_HEADER=${var.events_collector.EVENTSCOLLECTOR_AUTH_HEADER}",
    "EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_SERVER_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_SERVER_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN}",
    "EVENTSCOLLECTOR_TRACK_ENDPOINT=${var.events_collector.EVENTSCOLLECTOR_TRACK_ENDPOINT}",
    "EVENTSCOLLECTOR_TRACK_METHOD=${var.events_collector.EVENTSCOLLECTOR_TRACK_METHOD}",
    "WEB_PUBLICURL=${var.proxy_urls.web}",
    "API_PUBLICURL=${var.proxy_urls.api}",
    "MICROSOFT_APP_CLIENT_ID=${var.microsoft_appreg.client_id}",
    "MICROSOFT_APP_CLIENT_SECRET=${var.microsoft_appreg.client_secret}",
    "PROMETHEUS_EXPORTER_ENABLED=true",
    "PROMETHEUS_EXPORTER_AUTH_TOKEN=${var.prometheus.exporter_auth_token}",
    "PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS=true",
    "PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS=false"
  ]
  networks_advanced {
    name = "private_network"
  }
  volumes {
    host_path      = "${path.cwd}/volumes/salestim/logs/jobs"
    container_path = "/app/volumes/logs"
    read_only      = false
  }
  depends_on = [
    docker_container.redis,
    docker_container.postgres_main,
    docker_container.postgres_events,
    docker_container.azure_storage,
    docker_container.cosmos_db
  ]
}
```

::: warning Exception
As an exception, the scheduler service **MUST** be executed by **one and only one** container.
:::
```hcl
resource "docker_container" "salestim_scheduler" {
  name     = "salestim_scheduler"
  hostname = "salestim_scheduler"
  image    = docker_image.salestim.latest
  count    = 1
  command  = ["node", "./src/index.js"]
  # Sample healthcheck command
  # Test the monitoring ping endpoint, exits as 0 (success) or exits as 1 (fail)
  # test: apk update && apk upgrade && apk add --no-cache curl && curl --fail http://localhost:${APP_PORT}/monitoring/ping || exit 1
  env = [
    "NODE_TLS_REJECT_UNAUTHORIZED=0",
    "APP_ROLE=scheduler",
    "APP_PORT=3000",
    "DEPLOY=self",
    "LOG_LEVEL=debug",
    "LOG_PERSISTENCY_ENABLED=true",
    "REDIS_HOST=${var.REDIS_HOST}",
    "DB_DATA_HOST=${var.DB_DATA_HOST}",
    "DB_DATA_DATABASE_NAME=${var.DB_DATA_DATABASE_NAME}",
    "DB_DATA_USERNAME=${var.DB_DATA_USERNAME}",
    "DB_DATA_PASSWORD=${var.DB_DATA_PASSWORD}",
    "DB_EVENTS_HOST=${var.DB_EVENTS_HOST}",
    "DB_EVENTS_DATABASE_NAME=${var.DB_EVENTS_DATABASE_NAME}",
    "DB_EVENTS_USERNAME=${var.DB_EVENTS_USERNAME}",
    "DB_EVENTS_PASSWORD=${var.DB_EVENTS_PASSWORD}",
    "MICROSOFT_AZURE_STORAGE_ENDPOINT=http://${var.AZURESTORAGE_HOST}:10000/devstoreaccount1",
    "MICROSOFT_COSMOSDB_ENDPOINT=https://${var.COSMOSDB_HOST}:8081",
    "EVENTSCOLLECTOR_ENABLED=${var.events_collector.EVENTSCOLLECTOR_ENABLED}",
    "EVENTSCOLLECTOR_ROOT_URL=${var.events_collector.EVENTSCOLLECTOR_ROOT_URL}",
    "EVENTSCOLLECTOR_AUTH_HEADER=${var.events_collector.EVENTSCOLLECTOR_AUTH_HEADER}",
    "EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_SERVER_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_SERVER_TOKEN}",
    "EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN=${var.events_collector.EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN}",
    "EVENTSCOLLECTOR_TRACK_ENDPOINT=${var.events_collector.EVENTSCOLLECTOR_TRACK_ENDPOINT}",
    "EVENTSCOLLECTOR_TRACK_METHOD=${var.events_collector.EVENTSCOLLECTOR_TRACK_METHOD}",
    "WEB_PUBLICURL=${var.proxy_urls.web}",
    "API_PUBLICURL=${var.proxy_urls.api}",
    "MICROSOFT_APP_CLIENT_ID=${var.microsoft_appreg.client_id}",
    "MICROSOFT_APP_CLIENT_SECRET=${var.microsoft_appreg.client_secret}",
    "PROMETHEUS_EXPORTER_ENABLED=true",
    "PROMETHEUS_EXPORTER_AUTH_TOKEN=${var.prometheus.exporter_auth_token}",
    "PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS=true",
    "PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS=false"
  ]
  networks_advanced {
    name = "private_network"
  }
  volumes {
    host_path      = "${path.cwd}/volumes/salestim/logs/scheduler"
    container_path = "/app/volumes/logs"
    read_only      = false
  }
  depends_on = [
    docker_container.redis,
    docker_container.postgres_main,
    docker_container.postgres_events,
    docker_container.azure_storage,
    docker_container.cosmos_db
  ]
}
```

## Hosting services

### Proxy
::: tip Tip
In this example we're using [Nginx](https://www.nginx.com) as a proxy, without specific additional load balancer or firewall.
A similar configuration can be used to configure another service more suitable for production environments, such as [Azure Front Door](https://azure.microsoft.com/en-us/services/frontdoor).
:::
```hcl
resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}
resource "docker_container" "nginx" {
  name  = "nginx"
  image = docker_image.nginx.latest
  depends_on = [
    docker_container.salestim_api,
    docker_container.salestim_web,
    docker_container.salestim_jobs,
    docker_container.salestim_scheduler,
    docker_container.jitsu
  ]
  count = 1
  volumes {
    host_path      = "${path.cwd}/volumes/nginx/conf/nginx.conf"
    container_path = "/etc/nginx/nginx.conf"
    read_only      = true
  }
  volumes {
    host_path      = "${path.cwd}/volumes/nginx/logs"
    container_path = "/var/log/nginx"
    read_only      = false
  }
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 3000
    external = 3000
  }
  ports {
    internal = 3001
    external = 3001
  }
  ports {
    internal = 3002
    external = 3002
  }
  ports {
    internal = 3003
    external = 3003
  }
  ports {
    internal = 3004
    external = 3004
  }
  ports {
    internal = 5000
    external = 5000
  }
}
```

## Monitoring services
These optional services are used to monitor the performance of the application and collect advanced metrics.

### Metrics collector
::: tip Tip
In this example we're using [Prometheus](https://prometheus.io) as a metrics collector that could be used for alerting and basic reporting.
For advanced dashboarding capabilities, you can use [Grafana](https://grafana.com) or [Kibana](https://www.elastic.co/kibana/) connected to this Prometheus instance.
A similar configuration can be used to configure other services, such as [Azure Monitor](https://azure.microsoft.com/en-us/services/monitor) and [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview).
:::

```hcl
resource "docker_image" "prometheus" {
  name         = "prom/prometheus"
  keep_locally = false
}
resource "docker_container" "prometheus" {
  name  = "prometheus"
  image = docker_image.prometheus.latest
  depends_on = [
    docker_container.salestim_api,
    docker_container.salestim_web,
    docker_container.salestim_jobs,
    docker_container.salestim_scheduler
  ]
  count = 1
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 9090
    external = 9090
  }
  volumes {
    host_path      = "${path.cwd}/volumes/prometheus/conf/prometheus.yml"
    container_path = "/etc/prometheus/prometheus.yml"
    read_only      = true
  }
}
```

In addition to collecting the core application services metrics, Prometheus can also collect additional metrics from other services using [exporters](https://prometheus.io/docs/instrumenting/exporters/).

### Redis exporter
 The [Redis Prometheus exporter](https://github.com/oliver006/redis_exporter) exposes metrics from the Redis service
```hcl
resource "docker_image" "redis_prometheus_exporter" {
  name         = "oliver006/redis_exporter"
  keep_locally = false
}
resource "docker_container" "redis_prometheus_exporter" {
  name    = "redis_prometheus_exporter"
  image   = docker_image.redis_prometheus_exporter.latest
  command = ["--redis.addr=redis_svc:6379"]
  depends_on = [
    docker_container.redis
  ]
  env = [
    # REDIS_HOST=redis:6379
    # REDIS_EXPORTER_DEBUG=true
    # REDIS_EXPORTER_COUNT_KEYS=[db0=st:sessions:*]
    "REDIS_PASSWORD=",
    "REDIS_EXPORTER_WEB_LISTEN_ADDRESS=0.0.0.0:9121",
    "REDIS_EXPORTER_WEB_TELEMETRY_PATH=/metrics",
    "REDIS_EXPORTER_NAMESPACE=redis",
    "REDIS_EXPORTER_INCL_SYSTEM_METRICS=true",
    "REDIS_EXPORTER_SKIP_TLS_VERIFICATION=true",
    "REDIS_EXPORTER_PING_ON_CONNECT=true"
  ]
  count = 1
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 9121
    external = 9121
  }
}
```

### Bull exporter
 The [Bull Prometheus exporter](https://github.com/UpHabit/bull_exporter) exposes metrics from the queuing service based on Redis
```hcl
resource "docker_image" "bull_prometheus_exporter" {
  name         = "uphabit/bull_exporter:latest"
  keep_locally = false
}
resource "docker_container" "bull_prometheus_exporter" {
  name  = "bull_prometheus_exporter"
  image = docker_image.bull_prometheus_exporter.latest
  depends_on = [
    docker_container.redis
  ]
  env = [
    "EXPORTER_REDIS_URL=redis://redis:6379/0",
    "EXPORTER_PREFIX=st:queues",
    "EXPORTER_STAT_PREFIX=bull_queue_",
  ]
  count = 1
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 9538
    external = 9538
  }
}
```

### Uptime monitoring
The uptime monitoring service is used to monitor the uptime of the application.
::: tip Tip
In this example we're using the [Monika](https://monika.hyperjump.tech) application, but you can use another monitoring service, such as the integrated health probes from [Azure Front Door](https://azure.microsoft.com/en-us/services/frontdoor).
:::
```hcl
resource "docker_image" "monika" {
  name         = "hyperjump/monika:latest"
  keep_locally = false
}
resource "docker_container" "monika" {
  name  = "monika"
  image = docker_image.monika.latest
  # Run Monika in the background and expose its Prometheus metrics
  command = ["monika", "-c", "/config/monika.yml", "--prometheus", "3010"]
  count   = 1
  networks_advanced {
    name = "private_network"
  }
  ports {
    internal = 3010
    external = 3010
  }
  volumes {
    host_path      = "${path.cwd}/volumes/monika/conf/monika.yml"
    container_path = "/config/monika.yml"
    read_only      = true
  }
  depends_on = [
    docker_container.salestim_api,
    docker_container.salestim_web,
    docker_container.salestim_jobs,
    docker_container.salestim_scheduler
  ]
}
```
