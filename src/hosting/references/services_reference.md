# 📡 Services Reference
📆 *Updated: Wed, 09 Feb 2022 12:51:09 GMT*

This document lists all the services supported by the platform.

Each service is specified with:
- **ID**: Service internal identifier.
- **Name**: Service name
- **Description**: Service description
- **Roles**: Specifies in which context (namely the role assigned to a container) the service will be executed.



| ID | Name | Description | Roles |
|:---|:-----|:------------|:------|
| `web_svc` | Web | Web service hosting the server side of the Microsoft Teams web client. | `standalone, web` |
| `api_svc` | API | API service, used both by the webclient and by third-party apps (Power Platform and Logic Apps connectors, custom apps...). Learn more from our [Tech Hub](https://developers.salestim.com/api) | `standalone, api` |
| `jobs_svc` | Jobs | Service executing the different background worker processes, both triggered by the scheduler service and executed on-demand | `standalone, jobs` |
| `scheduler_svc` | Scheduler | Service scheduling and triggering the execution of jobs by the jobs service | `standalone, scheduler` |
| `connected_apps_svc` | Connected Apps | Service managing the lifecycle of connected apps agents | `integration` |
| `feature_toggles_server_svc` | Feature Toggles Server | Service allowing live activation / deactivation of specific features to a subset of audiences. | `featuretogglesserver` |
| `feature_toggles_proxy_svc` | Feature Toggles Proxy | Service hosting the feature toggles proxy, used by client-side apps to retreive feature toggles configuration | `featuretogglesproxy` |
| `flow_svc` | Flow | Service used by the platform to customize some workflows without having to update the codebase | `flowserver` |
