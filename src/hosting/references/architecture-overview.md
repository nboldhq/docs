# Architecture

nBold is a multi-tier platform that relies on [independent services](/hosting/references/services-reference.md) to support high-availability and scale with ease.

**TABLE OF CONTENTS**

[[toc]]

---

## Core components
At a glance, a basic and minimal nBold production environment (without operations/monitoring tools) would be comprised of these different elements:

```mermaid
graph TB

    %% Nodes

    teams(Microsoft Teams client<br>Desktop, web, mobile)
    apps(3rd-party apps<br>Custom, Power Automate)
    webnlb(SSL, Web Proxy / NLB / Firewall<br>Azure Front Door)
    subgraph webtier[Web pool]
        web1(Web #1<br>Azure Container)
        web2(Web #2<br>Azure Container)
    end
    subgraph apitier[Api pool]
        api1(Api #1<br>Azure Container)
        api2(Api #2<br>Azure Container)
    end
    subgraph jobstier[Jobs pool]
        scheduler(Scheduler<br>Azure Container)
        jobs1(Job #1<br>Azure Container)
        jobs2(Job #2<br>Azure Container)
    end
    subgraph ectier[Events pool]
        ec1(Event Collector #1<br>Azure Container)
        ec2(Event Collector #2<br>Azure Container)
    end
    backingservicesnlb(NLB<br>Azure NLB)
    subgraph backingservices[ ]
        redis[(Cache and jobs queuing<br>Azure Cache for Redis)]
        postgresmain[(Configuration database<br>Azure Database for PostgreSQL)]
        postgresevents[(Audit database<br>Azure Database for PostgreSQL)]
        azurestorage[(Blob storage<br>Azure Storage)]
        cosmosdb[(NoSQL database<br>Azure Cosmos DB)]
    end
    
    %% Links

    teams -->|OAuth/AD| webnlb
    apps -->|OAuth/AD| webnlb

    backingservicesnlb --> redis 
    backingservicesnlb --> postgresmain 
    backingservicesnlb --> ec1
    backingservicesnlb --> ec2
    ec1 --> postgresevents
    ec2 --> postgresevents
    backingservicesnlb --> azurestorage
    backingservicesnlb --> cosmosdb

    web1 --> backingservicesnlb
    web2 --> backingservicesnlb

    api1 --> backingservicesnlb
    api2 --> backingservicesnlb

    webnlb --> web1
    webnlb --> web2
    webnlb --> api1
    webnlb --> api2

    jobs1 --> backingservicesnlb
    jobs2 --> backingservicesnlb

    scheduler --> backingservicesnlb
    scheduler -->|schedule| jobs1
    scheduler -->|schedule| jobs2

    %% Styles

    classDef external fill:#9099d8, stroke-width:0px;
        class teams external
        class apps external
    classDef network fill:#90EE90, stroke-width:0px;
        class net network
        class backingservicesnlb network
        class apinlb network
        class webnlb network
    classDef containers fill:#ADD8E6, stroke-width:0px;
        class web1 containers
        class web2 containers
        class api1 containers
        class api2 containers
        class jobs1 containers
        class jobs2 containers
        class scheduler containers
        class ec1 containers
        class ec2 containers
    classDef azureservices fill:#FFFFE0, stroke:#000000, stroke-width:1px;
        class redis azureservices
        class postgresmain azureservices
        class postgresevents azureservices
        class azurestorage azureservices
        class cosmosdb azureservices
```

**Legend:**
```mermaid
graph TB
    ext(Client)
    net(Network component)
    cont(OCI / Docker container)
    az(Managed Azure service)

    classDef external fill:#9099d8, stroke-width:0px;
        class ext external
    classDef network fill:#90EE90, stroke-width:0px;
        class net network
    classDef containers fill:#ADD8E6, stroke-width:0px;
        class cont containers
    classDef azureservices fill:#FFFFE0, stroke-width:0px;
        class az azureservices
```

Notes:
- Azure containers could be hosted on either `Azure App Service` or `Azure Container Instances`
- Deployment could be executed manually, using our Terraform [deployment project templates](/hosting/installation/azure-deployment.md) for Azure, or using any orchestrator such as [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/services/kubernetes-service/).
- A complete list of components is available in our [Azure deployment resources](/hosting/references/azure-resources-reference.md) documentation.

## Monitoring components
In addition to the previous architecture diagram, here we're presenting the most common additional operations services, for auditing, uptime monitoring and APM (Application Performance Management):

```mermaid
graph BT

    %% Nodes

    subgraph backingservices[ ]
        redis(Cache and jobs queuing<br>Azure Cache for Redis)
        postgresmain(Configuration database<br>Azure Database for PostgreSQL)
        postgresevents(Audit database<br>Azure Database for PostgreSQL)
    end

    uptime(Uptime monitoring<br>Monika)

    apptiers(Web, Api and Jobs pools<br>Azure Container)

    redis(Cache and jobs queuing<br>Azure Cache for Redis)
    redisexporter(Redis exporter<br>Azure Container)

    bullexporter(Bull exporter<br>Azure Container)

    pgexporter(PostgreSQL exporter<br>Azure Container)

    metrics(Metrics collector<br>Prometheus on Azure Container)
    metricsdashboard(Metrics Dashboard<br>Grafana on Azure Container)
    apmdashboard(APM Dashboard<br>Azure Application Insights)

    %% Links
    metrics --> metricsdashboard

    uptime --> apptiers
    uptime --> metrics

    apptiers --> metrics
    apptiers --> apmdashboard

    redis --> redisexporter
    redis --> bullexporter
    redisexporter --> metrics
    bullexporter --> metrics

    postgresmain --> pgexporter
    postgresevents --> pgexporter
    pgexporter --> metrics


    %% Styles

    classDef containers fill:#ADD8E6, stroke-width:0px;
        class apptiers containers
        class redisexporter containers
        class bullexporter containers
        class pgexporter containers
        class uptime containers
        class metrics containers
        class metricsdashboard containers
    classDef azureservices fill:#FFFFE0, stroke-width:0px;
        class apmdashboard azureservices
        class appinsights azureservices
        class redis azureservices
        class postgresmain azureservices
        class postgresevents azureservices
```

::: tip
Learn more out how to operate a nBold infrastructure using our operations manual, especially [Updates management](../operations/updates_management) and [monitoring](../operations/monitoring)
:::

## Design Principles
Here are the key tenets that drived the design of this architecture.

### Security first
We're enforcing maximum security at each level by applying zero-trust, even if it implies to perform advanced and complex technical operations.

### Infrastructure as code
All our infrastructure resources are defined by code, using the Terraform [HCL](https://www.terraform.io/docs/language/syntax/configuration.html) language from [HashiCorp](https://www.hashicorp.com/), resulting in a consistent, reliable and controlled deployment process.

### Self-contained
To guarantee data residency, the platform could be operated in a fully self-contained environment that doesn't rely on any external service. Technically, the solution could be executed in one single isolated Docker environment.

### Scalability
As a multi-tier platform, each tier (web, api, jobs...) could scale horizontally independently by increasing the number of containers with the same role. In addition, this whole architecture could be replicated across multiple Azure regions to allocate and distribute the workload across multiple environments.

### Resiliency
All the operations are processed through message queues that brings advanced logging and retry capabilities in case of failure (Throttling, networking issue, Microsoft Graph bugs or unavailability…).

### We don't trust external services
Based on our experience, our design strategy regarding the Microsoft Graph may be summarized in one sentence:​
> We don’t trust blindly the Microsoft Graph!
