# Services Reference
📆 *Generated: Sun, 30 Oct 2022 14:57:33 GMT*

This document lists all the services supported by the platform.

Each service is specified with:
- **ID**: Service internal identifier.
- **Name**: Service name
- **Description**: Service description
- **Roles**: Specifies in which context (namely the role assigned to a container) the service will be executed.



| ID | Name | Description | Roles |
|:---|:-----|:------------|:------|
| `web_svc` | Web | Web service hosting the Microsoft Teams web client. | `standalone, web` |
| `api_svc` | API | API service, used both by the webclient and by third-party apps (Power Platform and Logic Apps connectors, custom apps...). | `standalone, api` |
| `jobs_svc` | Jobs | Service executing the different background worker processes, both triggered by the scheduler service and executed on-demand | `standalone, jobs` |
| `scheduler_svc` | Scheduler | Service scheduling and triggering the execution of jobs by the jobs service | `standalone, scheduler` |
