# Monitoring

**TABLE OF CONTENTS**

[[toc]]

---

## Uptime monitoring

To monitor their uptime, each container exposes an HTTP endpoint at `/monitoring/ping`, that answers to `HEAD` and `GET` requests with a `200` empty response.

::: tip
You can use the `user-agent` HTTP header to identify the monitoring service sending the requests.
:::

As of today, here are the uptime monitors we're supporting:
- Monika
- Azure Front Door

### Monika
[Monika](https://monika.hyperjump.tech) is the default option when running your own nBold platform using our sample Docker deployment project.

A sample basic configuration file for monitoring the uptime and latency of the application containers would look like this:

```yaml
probes:
  - id: api_probe
    name: API ping monitoring endpoint
    description: Monitors the /monitoring/ping endpoint of the nBold api service
    interval: 10
    requests:
      - method: HEAD
        url: 'http://salestim_api:3000/monitoring/ping'
        timeout: 7000
        alerts:
          - query: response.status != 200
            message: "🔥 API Service is DOWN. Expected 200 but returned {{ response.status }}."
    incidentThreshold: 1
    recoveryThreshold: 3
  - id: web_probe
    name: Web ping monitoring endpoint
    description: Monitors the /monitoring/ping endpoint of the nBold web service
    interval: 10
    requests:
      - method: HEAD
        url: 'http://salestim_web:3000/monitoring/ping'
        timeout: 7000
        alerts:
          - query: response.status != 200
            message: "🔥 WEB Service is DOWN. Expected 200 but returned {{ response.status }}."
    incidentThreshold: 1
    recoveryThreshold: 3
  - id: jobs_probe
    name: JOBS ping monitoring endpoint
    description: Monitors the /monitoring/ping endpoint of the nBold jobs service
    interval: 10
    requests:
      - method: HEAD
        url: 'http://salestim_jobs:3000/monitoring/ping'
        timeout: 7000
        alerts:
          - query: response.status != 200
            message: "🔥 JOBS Service is DOWN. Expected 200 but returned {{ response.status }}."
    incidentThreshold: 1
    recoveryThreshold: 3
  - id: scheduler_probe
    name: SCHEDULER ping monitoring endpoint
    description: Monitors the /monitoring/ping endpoint of the nBold scheduler service
    interval: 10
    requests:
      - method: HEAD
        url: 'http://salestim_scheduler:3000/monitoring/ping'
        timeout: 7000
        alerts:
          - query: response.status != 200
            message: "🔥 SCHEDULER Service is DOWN. Expected 200 but returned {{ response.status }}."
    incidentThreshold: 1
    recoveryThreshold: 3
notifications:
  - id: webhook_notification
    type: webhook
    data:
      url: 'https://YOUR_WEBHOOK_URL'
  - id: teams_notification
    type: teams
    data:
      url: 'https://YOUR_TEAMS_WEBHOOK_URL'
```

To tailor this example, you can refer to Monika's [configuration](https://monika.hyperjump.tech/overview) documentation.

### Azure Front Door
[Azure Front Door](https://docs.microsoft.com/en-us/azure/frontdoor/) comes with health probes that are used to perform load-balancing and achieve failover in case of a container malfunction. Keep in mind that strictly speaking, **Azure Front Door is not an uptime monitoring app**.

To see a detailed Azure Front Door configuration, see our [Azure resources reference](/hosting/references/azure-resources-reference.md) documentation.

You can also refer to the Azure Front Door [Health probes](https://docs.microsoft.com/en-us/azure/frontdoor/front-door-health-probes) documentation.

::: warning Warning
Since Azure Front Door has many edge environments globally, health probe volume for your backends can be quite high, ranging from 25 requests every minute to **as high as 1200 requests per minute**, depending on the configured probe frequency.

For instance, with the default probe frequency of 30 seconds, the requests volume on your backend would be about **200 requests per minute**.
:::

## Logging

Our platform comes with a configurable logging module that generates logs as configured by the [Logging configuration](/hosting/references/configuration-reference.md).

::: warning Persisting log files
Log files persistence is not enabled by default and we recommend to use an external log ingestion solution in production environments.
:::

As nBold comes with a native connector for Microsoft Application Insights, the easiest and recommended way to collect and centralize all the logs and traces, is to enable and configure the connector from the [Application Insights configuration](/hosting/references/configuration-reference.md).

Application Insights is part of the [Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/overview) service and uses an Azure Log Analytics Workspace under the hood as a storage. From Application Insights, you can live-monitor the whole nBold platform, investigate issues using traces and events, detect performance bottlenecks... Learn more about [Microsoft Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview).

## Application Performance Monitoring (APM)

As nBold comes with a native connector for Microsoft Application Insights, the easiest and recommended way to collect and centralize APM metrics, is to enable and configure the connector from the [Application Insights configuration](/hosting/references/configuration-reference.md).

Application Insights is part of the [Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/overview) service and uses an Azure Log Analytics Workspace under the hood as a storage. From Application Insights, you can live-monitor the whole nBold platform, investigate issues using traces and events, detect performance bottlenecks... Learn more about [Microsoft Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview).

## Collecting metrics

### Metrics collector
The nBold platform relies on [Prometheus](https://prometheus.io/) to collect and centralize all its metrics.

Prometheus is an open-source software application that is used for event monitoring. It collects metrics such as requests count, duration and exceptions from applications and records them in a time-series database. Prometheus is also used for monitoring CPU status and memory/disk-space usage so it can be used and be represented in a meaningful display.

Prometheus has become widely known and used in software industries due to its open-source and ease of use. Prometheus is a stand alone and self containing application that run by pulling data from services using worker systems that runs periodically.

### Collect application metrics
To expose their metrics, each SalesTIm container exposes an HTTP endpoint at `/monitoring/metrics`, that answers to `GET` requests with a `200` response, using the [Prometheus](https://prometheus.io/) exporter format.

Exported metrics could be configured from the [Prometheus Configuration](/hosting/references/configuration-reference.md) options.


**Metrics exposed:**
- Default metrics from [prom-client](https://github.com/siimon/prom-client).
- `http_requests_total`: Counter for total requests received, has labels `route`, `method`, `status`
- `http_request_duration_seconds`: - Duration of HTTP requests in seconds, has labels `route`, `method`, `status`

::: tip Notes
1. Standard nodejs exposed metrics are prefixed by `st_`
2. The labels `route` and `status` are normalized:
- `route`: will normalize id like route params
- `status`: will normalize to status code family groups, like `2XX` or `4XX`.
:::

::: warning How to secure the metrics endpoint?
In production, you can secure the `/monitoring/metrics` endpoint to prevent any technical information leak. To do so, define the `PROMETHEUS_EXPORTER_AUTH_TOKEN` property from the [Prometheus Configuration](/hosting/references/configuration-reference.md) options.  
:::

::: tip
A convenient way to generate a secure token is to use the `openssl` command, such as:
```sh
# The rand command encodes the produced random bytes in base64. This encoding converts bytes to alphanumeric characters, including the characters `=`, `+`, and `/`. These characters are filtered to have passwords without special characters and prevent url encoding issues. It reduces the random character of the token a little bit, but is not a concern when the token is more than 10 characters.
openssl rand -base64 29 | tr -d "=+/" | cut -c1-25
```
:::

### Collect Redis cache metrics
Redis metrics can be exported by using a [Redis Prometheus exporter](https://github.com/oliver006/redis_exporter) container.
Most items from the `INFO` command are exported, see [Redis INFO command documentation](https://redis.io/commands/info) for details.

### Collect Redis queues metrics
nBold uses the [Bull](https://github.com/OptimalBits/bull) module to manage its asynchronous jobs. Bull is a Queue package for handling distributed jobs and messages in NodeJS.

To monitor Bull queues, you can use a [Bull Prometheus exporter](https://github.com/UpHabit/bull_exporter) container.
Most items from the `INFO` command are exported, see [Redis INFO command documentation](https://redis.io/commands/info) for details.

**Metrics exposed:**
| Metric                       | type    | description |
|------------------------------|---------|-------------|
| `bull_queue_completed`         | counter | Total number of completed jobs                          |
| `bull_queue_complete_duration` | summary | Processing time for completed jobs                      |
| `bull_queue_active`            | counter | Total number of active jobs (currently being processed) |
| `bull_queue_delayed`           | counter | Total number of jobs that will run in the future        |
| `bull_queue_failed`            | counter | Total number of failed jobs                             |
| `bull_queue_waiting`           | counter | Total number of jobs waiting to be processed            |

### Collect uptime metrics
If you're using Monika to monitor your platform uptime, you can customize its container configuration to make it expose some useful metrics.

To do so, you must customize Monika's container startup command to use the `--prometheus`, such as:
```sh
# Run Monika in the background and expose its Prometheus metrics to the 3010 port.
command = ["monika", "-c", "/config/monika.yml", "--prometheus", "3010"]
```

Of course, you can also use this technique to expose metrics from any Prometheus-compatible uptime monitoring solution.

**Metrics exposed:**
- Default metrics from [prom-client](https://github.com/siimon/prom-client)
- `monika_request_status_code_info`: (gauge) HTTP status code
- `monika_request_response_time_seconds`: (histogram) Duration of probe request in seconds
- `monika_request_response_size_bytes`: (gauge) Size of response size in bytes
- `monika_probes_total`: (gauge) Total of all probe

## Auditing

To see the list au audited events, you can refer to the [Events reference](/hosting/references/events-reference.md) documentation, and look for events with the `Tracking` configuration:
- Enabled: `true`
- Audit trail: `true`

::: tip Exporting audit trails from the audit database
Our [Events reference](/hosting/references/events-reference.md) documentation also specifies the mapping between an audited event and its representation in the audit database:
- Table: Tracking `Code`
- Columns: Tracking `Audited fields` 
:::
