# nBold Events Documentation
📆 *Generated: Thu, 12 Jan 2023 09:18:55 GMT*


This document lists all the events supported by the platform.

💡 Each event is specified by:
- **ID**: Unique event identifier.
- **Name**: Event name.
- **Description**: Event description.
- **Schema**: JSON schema of the event payload.
- **Logging**: Logging behavior.
- **Telemetry**: Telemetry behavior (If enabled, sent both to Azure Application insights and our internal audit database).
- **Audit trail**: Defines if and how the event is accessible as audit trails to clients.
- **Organization webhooks**: Specifies if clients can subscribe to this event as webhooks.
- **System webhooks**: Defines if the event triggers webhook for nBold internal use.
- **Queuing**: Defines if the event triggers the execution of an asynchronous job.
- **Scheduling**: Defines if the event is automatically triggered by the scheduler.


TABLE OF CONTENTS:
- [Connected Apps](#connected-apps)
  - [Connected apps server started](#connected-apps-server-started)
  - [Connected apps server stopped](#connected-apps-server-stopped)
  - [Connected apps solution instance installed](#connected-apps-solution-instance-installed)
  - [Connected apps solution instance configured](#connected-apps-solution-instance-configured)
  - [Connected apps solution instance enabled](#connected-apps-solution-instance-enabled)
  - [Connected apps solution instance uninstalled](#connected-apps-solution-instance-uninstalled)
  - [Connected apps solution instance upgraded](#connected-apps-solution-instance-upgraded)
  - [Connected apps category viewed](#connected-apps-category-viewed)
  - [Connected apps solutions search](#connected-apps-solutions-search)
  - [Connected apps solution viewed](#connected-apps-solution-viewed)
- [Jobs](#jobs)
  - [Scheduled job completed](#scheduled-job-completed)
- [Microsoft Graph Subscriptions](#microsoft-graph-subscriptions)
  - [Graph subscriptions renewal completed](#graph-subscriptions-renewal-completed)
  - [Graph subscriptions created](#graph-subscriptions-created)
  - [Graph subscriptions notification received](#graph-subscriptions-notification-received)
  - [Graph subscriptions lifecycle notification received](#graph-subscriptions-lifecycle-notification-received)
- [Microsoft Identity](#microsoft-identity)
  - [Microsoft Identity Access Token Refreshed](#microsoft-identity-access-token-refreshed)
  - [Microsoft Identity Access Token Refresh Failed](#microsoft-identity-access-token-refresh-failed)
- [Microsoft Lists](#microsoft-lists)
  - [Microsoft Teams list tab cloned](#microsoft-teams-list-tab-cloned)
  - [Microsoft Teams list created](#microsoft-teams-list-created)
  - [Microsoft Teams list item created](#microsoft-teams-list-item-created)
  - [Microsoft Teams list view created](#microsoft-teams-list-view-created)
- [Microsoft Marketplace](#microsoft-marketplace)
  - [Microsoft Marketplace subscription plan updated](#microsoft-marketplace-subscription-plan-updated)
  - [Microsoft Marketplace subscription quantity updated](#microsoft-marketplace-subscription-quantity-updated)
  - [Microsoft Marketplace subscription renewed](#microsoft-marketplace-subscription-renewed)
  - [Microsoft Marketplace subscription suspended](#microsoft-marketplace-subscription-suspended)
  - [Microsoft Marketplace subscription unsubscribed](#microsoft-marketplace-subscription-unsubscribed)
  - [Microsoft Marketplace subscription reinstated](#microsoft-marketplace-subscription-reinstated)
  - [Microsoft Marketplace subscription unknown action detected](#microsoft-marketplace-subscription-unknown-action-detected)
- [Microsoft Office](#microsoft-office)
  - [Microsoft Teams Office tab cloned](#microsoft-teams-office-tab-cloned)
- [Microsoft Onenote](#microsoft-onenote)
  - [Microsoft Teams OneNote tab cloned](#microsoft-teams-onenote-tab-cloned)
  - [Microsoft Teams OneNote notebook copy failed](#microsoft-teams-onenote-notebook-copy-failed)
  - [Microsoft Teams OneNote notebook created](#microsoft-teams-onenote-notebook-created)
- [Microsoft Planner](#microsoft-planner)
  - [Microsoft Teams Planner tab cloned](#microsoft-teams-planner-tab-cloned)
  - [Microsoft Planner plan created](#microsoft-planner-plan-created)
  - [Microsoft Planner bucket created](#microsoft-planner-bucket-created)
  - [Microsoft Planner task created](#microsoft-planner-task-created)
- [Microsoft Teams Admin Consent](#microsoft-teams-admin-consent)
  - [Microsoft Teams admin consent success](#microsoft-teams-admin-consent-success)
  - [Microsoft Teams admin consent error](#microsoft-teams-admin-consent-error)
- [Microsoft Teams App](#microsoft-teams-app)
  - [Microsoft Teams app context loaded](#microsoft-teams-app-context-loaded)
  - [Microsoft Teams teams searched](#microsoft-teams-teams-searched)
  - [Microsoft Teams team creation requests opened from the Microsoft Teams app](#microsoft-teams-team-creation-requests-opened-from-the-microsoft-teams-app)
  - [Microsoft Teams team creation request created](#microsoft-teams-team-creation-request-created)
- [Microsoft Teams Approval](#microsoft-teams-approval)
  - [Team creation approval triggered](#team-creation-approval-triggered)
  - [Team creation approval requested](#team-creation-approval-requested)
  - [Microsoft Teams team creation approval email sent](#microsoft-teams-team-creation-approval-email-sent)
  - [Team creation approved](#team-creation-approved)
  - [Team creation rejected](#team-creation-rejected)
- [Microsoft Teams Apps](#microsoft-teams-apps)
  - [Microsoft Teams app installed](#microsoft-teams-app-installed)
- [Microsoft Teams Messages](#microsoft-teams-messages)
  - [permission denied to acces channel messages on Graph API](#permission-denied-to-acces-channel-messages-on-graph-api)
- [Microsoft Teams Permanent Membership Policy](#microsoft-teams-permanent-membership-policy)
  - [Permanent membership policy control triggered](#permanent-membership-policy-control-triggered)
  - [Permanent membership policy control organization run triggered](#permanent-membership-policy-control-organization-run-triggered)
  - [Permanent membership policy control completed](#permanent-membership-policy-control-completed)
  - [Permanent membership policy team user invited](#permanent-membership-policy-team-user-invited)
  - [Permanent membership policy channel user invited](#permanent-membership-policy-channel-user-invited)
- [Microsoft Teams Service Account](#microsoft-teams-service-account)
  - [Microsoft Teams Service Accounts Tokens Renewal Triggered](#microsoft-teams-service-accounts-tokens-renewal-triggered)
  - [Microsoft Teams Service Accounts Tokens Renewal Organization Run Triggered](#microsoft-teams-service-accounts-tokens-renewal-organization-run-triggered)
  - [Microsoft Teams service account registration success](#microsoft-teams-service-account-registration-success)
  - [Microsoft Teams service account registration error](#microsoft-teams-service-account-registration-error)
  - [Microsoft Teams service account deletion success](#microsoft-teams-service-account-deletion-success)
  - [Microsoft Teams service account deletion error](#microsoft-teams-service-account-deletion-error)
  - [Microsoft Teams service account tokens renewal completed](#microsoft-teams-service-account-tokens-renewal-completed)
- [Microsoft Teams Signin](#microsoft-teams-signin)
  - [Microsoft Teams signin context loaded](#microsoft-teams-signin-context-loaded)
  - [Microsoft Teams SSO signin success](#microsoft-teams-sso-signin-success)
  - [Microsoft Teams SSO signin error](#microsoft-teams-sso-signin-error)
  - [Microsoft Teams SSO signin authorization flow success](#microsoft-teams-sso-signin-authorization-flow-success)
  - [Microsoft Teams SSO signin authorization flow error](#microsoft-teams-sso-signin-authorization-flow-error)
  - [Microsoft Teams interactive signin success](#microsoft-teams-interactive-signin-success)
  - [Microsoft Teams interactive signin error](#microsoft-teams-interactive-signin-error)
- [Microsoft Teams Teams Template Catalog](#microsoft-teams-teams-template-catalog)
  - [Microsoft Teams team template created](#microsoft-teams-team-template-created)
  - [Microsoft Teams team template updated](#microsoft-teams-team-template-updated)
  - [Microsoft Teams team template deleted](#microsoft-teams-team-template-deleted)
- [Microsoft Teams Teams](#microsoft-teams-teams)
  - [Team provisioning triggered](#team-provisioning-triggered)
  - [Team created](#team-created)
  - [Team provisioning completed](#team-provisioning-completed)
  - [Team template attached](#team-template-attached)
  - [Team deletion detected](#team-deletion-detected)
  - [Template deletion detected](#template-deletion-detected)
- [Miro](#miro)
  - [Miro tab cloned](#miro-tab-cloned)
- [Rbac](#rbac)
  - [RBAC settings updated](#rbac-settings-updated)
- [Remote Objects](#remote-objects)
  - [Remote object updated](#remote-object-updated)
- [Reporting](#reporting)
  - [Report opened](#report-opened)
- [Retention Policy](#retention-policy)
  - [Queues retention policy control triggered](#queues-retention-policy-control-triggered)
  - [Queue retention policy control completed](#queue-retention-policy-control-completed)
- [Server](#server)
  - [Server instance starting](#server-instance-starting)
  - [Server instance startup aborted](#server-instance-startup-aborted)
  - [Server instance started](#server-instance-started)
  - [Server instance stopping](#server-instance-stopping)
  - [Server instance stopped](#server-instance-stopped)
- [Services](#services)
  - [Service account refresh tokens expired](#service-account-refresh-tokens-expired)
  - [Service account tokens renewal completed](#service-account-tokens-renewal-completed)
  - [Service account missing permissions](#service-account-missing-permissions)
  - [Service account missing licenses](#service-account-missing-licenses)
  - [Services starting](#services-starting)
  - [Services started](#services-started)
  - [Service starting](#service-starting)
  - [Service started](#service-started)
  - [Service stopping](#service-stopping)
  - [Service stopped](#service-stopped)
  - [Services stopping](#services-stopping)
  - [Services stopped](#services-stopped)
- [Setup](#setup)
  - [Setup triggered](#setup-triggered)
  - [Setup done](#setup-done)
- [Signin](#signin)
  - [User signed in](#user-signed-in)
  - [User signed out](#user-signed-out)
  - [User unauthorized](#user-unauthorized)
- [Subscriptions](#subscriptions)
  - [Subscription update notification received](#subscription-update-notification-received)
- [Tests](#tests)
  - [Integration tests triggered](#integration-tests-triggered)
  - [Integration tests done](#integration-tests-done)
- [Trello](#trello)
  - [Trello tab cloned](#trello-tab-cloned)
- [Webhooks](#webhooks)
  - [Webhook Run Triggered](#webhook-run-triggered)
  - [Webhook executed](#webhook-executed)

## Connected Apps
### Connected apps server started
- **ID**: `connected_apps_server_started`
- **Description**: When a connected apps served has started
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps server stopped
- **ID**: `connected_apps_server_stopped`
- **Description**: When a connected apps served has stopped
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps solution instance installed
- **ID**: `user_connected_apps_solution_instance_installed`
- **Description**: When a user has installed a connected apps solution instance
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps solution instance configured
- **ID**: `user_connected_apps_solution_instance_configured`
- **Description**: When a user has configured a connected apps solution instance
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps solution instance enabled
- **ID**: `user_connected_apps_solution_instance_enabled`
- **Description**: When a user has enabled a connected apps solution instance
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps solution instance uninstalled
- **ID**: `user_connected_apps_solution_instance_uninstalled`
- **Description**: When a user has uninstalled a connected apps solution instance
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps solution instance upgraded
- **ID**: `user_connected_apps_solution_instance_upgraded`
- **Description**: When a user has upgraded a connected apps solution instance
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps category viewed
- **ID**: `user_connected_apps_category_viewed`
- **Description**: When a user has viewed a connected apps category
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps solutions search
- **ID**: `user_connected_apps_solutions_search`
- **Description**: When a user has searched for a connected apps solution
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Connected apps solution viewed
- **ID**: `user_connected_apps_solution_viewed`
- **Description**: When a user has viewed a solution
- **Category**: `connected-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Jobs
### Scheduled job completed
- **ID**: `scheduled_job_run_completed`
- **Description**: When a scheduled job has been executed and is done
- **Category**: `jobs`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Graph Subscriptions
### Graph subscriptions renewal completed
- **ID**: `microsoft_graph_subscriptions_renewal_completed`
- **Description**: When the Graph subscriptions renewal job is done for a specific tenant
- **Category**: `microsoft-graph-subscriptions`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `scheduled_jobs`)

  - Database table: `evt_microsoft_graph_subscriptions_renewal_completed`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `status`
    - `error_code`
    - `error_message`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Graph subscriptions created
- **ID**: `microsoft_graph_subscription_created`
- **Description**: When the Graph subscriptions job has created a new subscription
- **Category**: `microsoft-graph-subscriptions`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `graph_subscriptions`)

  - Database table: `evt_microsoft_graph_subscription_created`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `subscription_id`
    - `subscription_expiration`
    - `resource`
    - `change_type`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Graph subscriptions notification received
- **ID**: `microsoft_graph_subscription_notification_received`
- **Description**: When the Graph subscriptions job has received a new notification about a resource
- **Category**: `microsoft-graph-subscriptions`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `graph_subscriptions`)

  - Database table: `evt_microsoft_graph_subscription_notification_received`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `subscription_id`
    - `subscription_expiration`
    - `notification_id`
    - `notification_change_type`
    - `notification_resource`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Graph subscriptions lifecycle notification received
- **ID**: `microsoft_graph_subscription_lifecycle_notification_received`
- **Description**: When the Graph subscriptions job has received a new notification about a subscription's lifecycle
- **Category**: `microsoft-graph-subscriptions`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `graph_subscriptions`)

  - Database table: `evt_microsoft_graph_subscription_lifecycle_notification_received`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `subscription_id`
    - `subscription_expiration`
    - `event`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Identity
### Microsoft Identity Access Token Refreshed
- **ID**: `microsoft_identity_access_token_refreshed`
- **Description**: When a Microsoft Identity access token has been refreshed
- **Category**: `microsoft-identity`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_microsoft_identity_access_token_refreshed`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Identity Access Token Refresh Failed
- **ID**: `microsoft_identity_access_token_refresh_failed`
- **Description**: When a Microsoft Identity access token refresh has failed
- **Category**: `microsoft-identity`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `warn`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_microsoft_identity_access_token_refresh_failed`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Lists
### Microsoft Teams list tab cloned
- **ID**: `microsoft_teams_list_tab_cloned`
- **Description**: When a Microsoft Teams list tab has been cloned
- **Category**: `microsoft-lists`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams list created
- **ID**: `microsoft_teams_list_created`
- **Description**: When a Microsoft Teams list has been created
- **Category**: `microsoft-lists`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams list item created
- **ID**: `microsoft_teams_list_item_created`
- **Description**: When a Microsoft Teams list item has been created
- **Category**: `microsoft-lists`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams list view created
- **ID**: `microsoft_teams_list_view_created`
- **Description**: When a Microsoft Teams list view has been created
- **Category**: `microsoft-lists`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Marketplace
### Microsoft Marketplace subscription plan updated
- **ID**: `microsoft_marketplace_subscription_plan_changed`
- **Description**: When a Microsoft Marketplace subscription plan has been updated
- **Category**: `microsoft-marketplace`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Marketplace subscription quantity updated
- **ID**: `microsoft_marketplace_subscription_quantity_changed`
- **Description**: When a Microsoft Marketplace subscription quantity has been updated
- **Category**: `microsoft-marketplace`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Marketplace subscription renewed
- **ID**: `microsoft_marketplace_subscription_renewed`
- **Description**: When a Microsoft Marketplace subscription has been renewed
- **Category**: `microsoft-marketplace`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Marketplace subscription suspended
- **ID**: `microsoft_marketplace_subscription_suspended`
- **Description**: When a Microsoft Marketplace subscription has been suspended
- **Category**: `microsoft-marketplace`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Marketplace subscription unsubscribed
- **ID**: `microsoft_marketplace_subscription_unsubscribed`
- **Description**: When a Microsoft Marketplace subscription has been unsubscribed
- **Category**: `microsoft-marketplace`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Marketplace subscription reinstated
- **ID**: `microsoft_marketplace_subscription_reinstated`
- **Description**: When a Microsoft Marketplace subscription has been reinstated
- **Category**: `microsoft-marketplace`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Marketplace subscription unknown action detected
- **ID**: `microsoft_marketplace_subscription_unknown_action_detected`
- **Description**: When an unknown Microsoft Marketplace subscription action has been detected
- **Category**: `microsoft-marketplace`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `error`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Office
### Microsoft Teams Office tab cloned
- **ID**: `microsoft_teams_office_tab_cloned`
- **Description**: When a Microsoft Teams Office tab has been cloned
- **Category**: `microsoft-office`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Onenote
### Microsoft Teams OneNote tab cloned
- **ID**: `microsoft_teams_onenote_tab_cloned`
- **Description**: When a Microsoft Teams OneNote tab has been cloned
- **Category**: `microsoft-onenote`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams OneNote notebook copy failed
- **ID**: `microsoft_teams_onenote_notebook_copy_failed`
- **Description**: When a Microsoft Teams OneNote notebook copy has failed
- **Category**: `microsoft-onenote`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams OneNote notebook created
- **ID**: `microsoft_teams_onenote_notebook_created`
- **Description**: When a Microsoft Teams OneNote notebook has been created
- **Category**: `microsoft-onenote`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Planner
### Microsoft Teams Planner tab cloned
- **ID**: `microsoft_teams_planner_tab_cloned`
- **Description**: When a Microsoft Teams Planner tab has been cloned
- **Category**: `microsoft-planner`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Planner plan created
- **ID**: `microsoft_planner_plan_created`
- **Description**: When a Microsoft Planner plan has been created
- **Category**: `microsoft-planner`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Planner bucket created
- **ID**: `microsoft_planner_bucket_created`
- **Description**: When a Microsoft Planner bucket has been created
- **Category**: `microsoft-planner`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Planner task created
- **ID**: `microsoft_planner_task_created`
- **Description**: When a Microsoft Planner task has been created
- **Category**: `microsoft-planner`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Admin Consent
### Microsoft Teams admin consent success
- **ID**: `microsoft_teams_admin_consent_success`
- **Description**: When an administrator has successfully granted consent to a Microsoft Teams service account
- **Category**: `microsoft-teams-admin-consent`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_microsoft_teams_admin_consent_success`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams admin consent error
- **ID**: `microsoft_teams_admin_consent_error`
- **Description**: When an administrator has failed to grant consent to a Microsoft Teams service account
- **Category**: `microsoft-teams-admin-consent`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_microsoft_teams_admin_consent_error`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams App
### Microsoft Teams app context loaded
- **ID**: `microsoft_teams_app_context_loaded`
- **Description**: When a user loads the Microsoft Teams app
- **Category**: `microsoft-teams-app`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams teams searched
- **ID**: `microsoft_teams_teams_searched`
- **Description**: When a user starts a search for teams from the Microsoft Teams app
- **Category**: `microsoft-teams-app`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `search`)

  - Database table: `evt_microsoft_teams_teams_searched`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams team creation requests opened from the Microsoft Teams app
- **ID**: `microsoft_teams_team_creation_requests_opened`
- **Description**: When a user opens the team creation requests audit trail
- **Category**: `microsoft-teams-app`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams team creation request created
- **ID**: `microsoft_teams_team_creation_request_created`
- **Description**: When a user creates a new team creation request from the Microsoft Teams app
- **Category**: `microsoft-teams-app`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Approval
### Team creation approval triggered
- **ID**: `team_creation_approval_triggered`
- **Description**: When a team creation approval workflow is triggered
- **Category**: `microsoft-teams-approval`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Team creation approval requested
- **ID**: `team_creation_approval_requested`
- **Description**: When a team creation approval workflow is requested
- **Category**: `microsoft-teams-approval`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ✅ `enabled` (Category: `team_creation_approval`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams team creation approval email sent
- **ID**: `microsoft_teams_team_creation_approval_email_sent`
- **Description**: When a Microsoft Teams team creation approval email is sent
- **Category**: `microsoft-teams-approval`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Team creation approved
- **ID**: `team_creation_approved`
- **Description**: When a team creation was approved from an approval workflow
- **Category**: `microsoft-teams-approval`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ✅ `enabled` (Category: `team_creation_approval`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Team creation rejected
- **ID**: `team_creation_rejected`
- **Description**: When a team creation was rejected from an approval workflow
- **Category**: `microsoft-teams-approval`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ✅ `enabled` (Category: `team_creation_approval`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Apps
### Microsoft Teams app installed
- **ID**: `microsoft_teams_app_installed`
- **Description**: When a Microsoft Teams app is installed
- **Category**: `microsoft-teams-apps`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Messages
### permission denied to acces channel messages on Graph API
- **ID**: `acces_messages_denied`
- **Description**: When a user try to acces channel message without permission
- **Category**: `microsoft-teams-messages`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Permanent Membership Policy
### Permanent membership policy control triggered
- **ID**: `microsoft_teams_permanent_membership_policy_control_triggered`
- **Description**: When the permenent membership policy control job is triggered
- **Category**: `microsoft-teams-permanent-membership-policy`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ✅ `enabled` (Plan: "*/15 * * * *")

### Permanent membership policy control organization run triggered
- **ID**: `microsoft_teams_permanent_membership_policy_control_organization_run_triggered`
- **Description**: When the permenent membership policy control job is triggered for an organization
- **Category**: `microsoft-teams-permanent-membership-policy`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Permanent membership policy control completed
- **ID**: `microsoft_teams_permanent_membership_policy_control_completed`
- **Description**: When the permenent membership policy control job is done for a specific tenant
- **Category**: `microsoft-teams-permanent-membership-policy`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `microsoft_teams_permanent_membership_policy`)

  - Database table: `evt_microsoft_teams_permanent_membership_policy_control_completed`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `status`
    - `error_code`
    - `error_message`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Permanent membership policy team user invited
- **ID**: `microsoft_teams_permanent_membership_policy_team_user_invited`
- **Description**: When the permanent membership policy control job has invited a user to a team (as a member or as an owner)
- **Category**: `microsoft-teams-permanent-membership-policy`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `policies`)

  - Database table: `evt_microsoft_teams_permanent_membership_policy_team_user_invited`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `user_id`
    - `user_display_name`
    - `team_id`
    - `team_display_name`
    - `role`

- **Organization webhooks**: ✅ `enabled` (Category: `permanent_membership_policy`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Permanent membership policy channel user invited
- **ID**: `microsoft_teams_permanent_membership_policy_channel_user_invited`
- **Description**: When the permanent membership policy control job has invited a user to a channel (as a member or as an owner)
- **Category**: `microsoft-teams-permanent-membership-policy`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `policies`)

  - Database table: `evt_microsoft_teams_permanent_membership_policy_channel_user_invited`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `user_id`
    - `user_display_name`
    - `team_id`
    - `team_display_name`
    - `channel_id`
    - `channel_display_name`
    - `role`

- **Organization webhooks**: ✅ `enabled` (Category: `undefined`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Service Account
### Microsoft Teams Service Accounts Tokens Renewal Triggered
- **ID**: `microsoft_teams_service_accounts_tokens_renewal_triggered`
- **Description**: When a Microsoft Teams Service Accounts Tokens Renewal job is triggered
- **Category**: `microsoft-teams-service-account`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ✅ `enabled` (Plan: "0 6 * * 0")

### Microsoft Teams Service Accounts Tokens Renewal Organization Run Triggered
- **ID**: `microsoft_teams_service_accounts_tokens_renewal_organization_run_triggered`
- **Description**: When a Microsoft Teams Service Accounts Tokens Renewal job is triggered for a specific organization
- **Category**: `microsoft-teams-service-account`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams service account registration success
- **ID**: `microsoft_teams_service_account_registation_success`
- **Description**: When a user has successfully registered a Microsoft Teams service account
- **Category**: `microsoft-teams-service-account`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams service account registration error
- **ID**: `microsoft_teams_service_account_registation_error`
- **Description**: When a user has failed to register a Microsoft Teams service account
- **Category**: `microsoft-teams-service-account`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams service account deletion success
- **ID**: `microsoft_teams_service_account_deletion_success`
- **Description**: When a user has successfully deleted a Microsoft Teams service account
- **Category**: `microsoft-teams-service-account`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams service account deletion error
- **ID**: `microsoft_teams_service_account_deletion_error`
- **Description**: When a user has failed to delete a Microsoft Teams service account
- **Category**: `microsoft-teams-service-account`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams service account tokens renewal completed
- **ID**: `microsoft_teams_service_account_tokens_renewal_completed`
- **Description**: When the Microsoft Teams service account tokens renewal has completed
- **Category**: `microsoft-teams-service-account`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ✅ `enabled` (URL: "https://prod-104.westeurope.logic.azure.com:443/workflows/2404b31f94f14db4b8b0f5055b86a484/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XJsOT190B7SF6NVER7pGKe5MCsq0NjhwrN_yjOrszFY")

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Signin
### Microsoft Teams signin context loaded
- **ID**: `microsoft_teams_signin_context_loaded`
- **Description**: When a user loads the Microsoft Teams signin component
- **Category**: `microsoft-teams-signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams SSO signin success
- **ID**: `microsoft_teams_sso_signin_success`
- **Description**: When a user successfully signed in from Microsoft Teams using SSO
- **Category**: `microsoft-teams-signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams SSO signin error
- **ID**: `microsoft_teams_sso_signin_error`
- **Description**: When an error occured while a user signed in from Microsoft Teams using SSO
- **Category**: `microsoft-teams-signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams SSO signin authorization flow success
- **ID**: `microsoft_teams_sso_signin_authorization_flow_success`
- **Description**: When a user was granted the appropriate permissions from Microsoft Teams using SSO
- **Category**: `microsoft-teams-signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams SSO signin authorization flow error
- **ID**: `microsoft_teams_sso_signin_authorization_flow_error`
- **Description**: When an error occured while a user was trying to be granted the appropriate permissions from Microsoft Teams using SSO
- **Category**: `microsoft-teams-signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams interactive signin success
- **ID**: `microsoft_teams_interactive_signin_success`
- **Description**: When a user successfully signed in from Microsoft Teams using an interactive flow
- **Category**: `microsoft-teams-signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams interactive signin error
- **ID**: `microsoft_teams_interactive_signin_error`
- **Description**: When an error occured while a user tried to sign in from Microsoft Teams using an interactive flow
- **Category**: `microsoft-teams-signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ❌ `disabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Teams Template Catalog
### Microsoft Teams team template created
- **ID**: `microsoft_teams_team_template_created`
- **Description**: When a Microsoft Teams team template is created
- **Category**: `microsoft-teams-teams-template-catalog`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_microsoft_teams_team_template_created`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams team template updated
- **ID**: `microsoft_teams_team_template_updated`
- **Description**: When a Microsoft Teams team template is updated
- **Category**: `microsoft-teams-teams-template-catalog`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_microsoft_teams_team_template_updated`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Microsoft Teams team template deleted
- **ID**: `microsoft_teams_team_template_deleted`
- **Description**: When a Microsoft Teams team template is deleted
- **Category**: `microsoft-teams-teams-template-catalog`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_microsoft_teams_team_template_deleted`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Microsoft Teams Teams
### Team provisioning triggered
- **ID**: `team_provisioning_triggered`
- **Description**: When a user requests a new team
- **Category**: `microsoft-teams-teams`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Team created
- **ID**: `team_created`
- **Description**: When a team has been created
- **Category**: `microsoft-teams-teams`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ✅ `enabled` (Category: `undefined`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Team provisioning completed
- **ID**: `team_provisioning_completed`
- **Description**: When the provisioning of a team has been completed
- **Category**: `microsoft-teams-teams`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ✅ `enabled` (Category: `team`)

- **System webhooks**: ✅ `enabled` (URL: "https://prod-104.westeurope.logic.azure.com:443/workflows/2404b31f94f14db4b8b0f5055b86a484/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XJsOT190B7SF6NVER7pGKe5MCsq0NjhwrN_yjOrszFY")

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Team template attached
- **ID**: `team_template_attached`
- **Description**: When a template has been attached to a team
- **Category**: `microsoft-teams-teams`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Team deletion detected
- **ID**: `team_deletion_detected`
- **Description**: When the deletion of a team has been detected
- **Category**: `microsoft-teams-teams`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Template deletion detected
- **ID**: `template_deletion_detected`
- **Description**: When the deletion of a template has been detected
- **Category**: `microsoft-teams-teams`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

## Miro
### Miro tab cloned
- **ID**: `miro_tab_cloned`
- **Description**: When a Miro tab has been cloned
- **Category**: `miro`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ✅ `enabled` (Category: `tabs`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Rbac
### RBAC settings updated
- **ID**: `rbac_settings_updated`
- **Description**: A user has updated the role-based access control settings
- **Category**: `rbac`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_rbac_settings_updated`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Remote Objects
### Remote object updated
- **ID**: `remote_object_updated`
- **Description**: When a remote object has been updated
- **Category**: `remote-objects`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `remote_objects`)

  - Database table: `evt_remote_object_updated`

  - Database columns:

- **Organization webhooks**: ✅ `enabled` (Category: `remote_objects`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

## Reporting
### Report opened
- **ID**: `report_opened`
- **Description**: When a user opens a report
- **Category**: `reporting`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `reports`)

  - Database table: `evt_report_opened`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Retention Policy
### Queues retention policy control triggered
- **ID**: `queues_retention_policy_control_triggered`
- **Description**: When queues retention policy control job is triggered
- **Category**: `retention-policy`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ✅ `enabled` (Plan: "0 1 * * *")

### Queue retention policy control completed
- **ID**: `queue_retention_policy_control_completed`
- **Description**: When a queue retention policy control job is completed
- **Category**: `retention-policy`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ✅ `enabled` (URL: "https://prod-104.westeurope.logic.azure.com:443/workflows/2404b31f94f14db4b8b0f5055b86a484/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XJsOT190B7SF6NVER7pGKe5MCsq0NjhwrN_yjOrszFY")

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Server
### Server instance starting
- **ID**: `server_starting`
- **Description**: When a server instance is starting
- **Category**: `server`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Server instance startup aborted
- **ID**: `server_startup_aborted`
- **Description**: When a server instance startup has been aborted
- **Category**: `server`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `error`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Server instance started
- **ID**: `server_started`
- **Description**: When a server instance has started
- **Category**: `server`
- **Payload schema**: 
```json
{
  "type": "object",
  "keys": {
    "loaded_services_count": {
      "type": "number",
      "flags": {
        "presence": "required"
      },
      "rules": [
        {
          "name": "min",
          "args": {
            "limit": 0
          }
        }
      ]
    }
  }
}
```

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Server instance stopping
- **ID**: `server_stopping`
- **Description**: When a server instance is stopping
- **Category**: `server`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `warn`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Server instance stopped
- **ID**: `server_stopped`
- **Description**: When a server instance has stopped
- **Category**: `server`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `warn`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Services
### Service account refresh tokens expired
- **ID**: `service_account_refresh_token_expired`
- **Description**: When a service account access token is detected as expired, and that it can't be refreshed using a refresh token that has expired
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `error`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `scheduled_jobs`)

  - Database table: `evt_service_account_refresh_token_expired`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Service account tokens renewal completed
- **ID**: `service_account_token_renewal_completed`
- **Description**: When the service account tokens renewal job has renewed a service account tokens
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `scheduled_jobs`)

  - Database table: `evt_service_account_token_renewal_completed`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `status`
    - `error_code`
    - `error_message`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Service account missing permissions
- **ID**: `service_account_missing_permissions`
- **Description**: When the service account is trying to perform an operation that requires permissions it has not been granted for
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `error`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Service account missing licenses
- **ID**: `service_account_missing_licenses`
- **Description**: When the service account is trying to perform an operation that requires a license it has not been assigned
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `error`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Services starting
- **ID**: `services_starting`
- **Description**: When a server instance is starting its services
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Services started
- **ID**: `services_started`
- **Description**: When a server instance has started its services
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Service starting
- **ID**: `service_starting`
- **Description**: When a service is starting
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Service started
- **ID**: `service_started`
- **Description**: When a service has been started
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Service stopping
- **ID**: `service_stopping`
- **Description**: When a service is stopping
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Service stopped
- **ID**: `service_stopped`
- **Description**: When a service has stopped
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Services stopping
- **ID**: `services_stopping`
- **Description**: When a server instance is stopping its services
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `warn`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### Services stopped
- **ID**: `services_stopped`
- **Description**: When a server instance has stopped its services
- **Category**: `services`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `warn`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Setup
### Setup triggered
- **ID**: `setup_triggered`
- **Description**: When setup has been triggered
- **Category**: `setup`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Setup done
- **ID**: `setup_done`
- **Description**: When setup is done
- **Category**: `setup`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Signin
### User signed in
- **ID**: `user_signedin`
- **Description**: When a user has signed in
- **Category**: `signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_user_signedin`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### User signed out
- **ID**: `user_signedout`
- **Description**: When a user has signed out
- **Category**: `signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_user_signedout`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

### User unauthorized
- **ID**: `user_unauthorized`
- **Description**: When a user has been denied access to a resource
- **Category**: `signin`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `warn`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `security`)

  - Database table: `evt_user_unauthorized`

  - Database columns:

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Subscriptions
### Subscription update notification received
- **ID**: `subscription_update_notification_received`
- **Description**: When a subscription update notification has been received
- **Category**: `subscriptions`
- **Payload schema**: 
```json
{
  "type": "object",
  "flags": {
    "presence": "required"
  },
  "keys": {
    "origin": {
      "type": "string",
      "flags": {
        "only": true,
        "presence": "required"
      },
      "allow": [
        "microsoft",
        "chargebee"
      ]
    },
    "payload": {
      "type": "object",
      "flags": {
        "presence": "required"
      }
    }
  }
}
```

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

## Tests
### Integration tests triggered
- **ID**: `integration_tests_triggered`
- **Description**: When integration tests have been triggered
- **Category**: `tests`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Integration tests done
- **ID**: `integration_tests_done`
- **Description**: When integration tests are done
- **Category**: `tests`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Trello
### Trello tab cloned
- **ID**: `trello_tab_cloned`
- **Description**: When a Trello tab has been cloned
- **Category**: `trello`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `verbose`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ✅ `enabled` (Category: `tabs`)

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

## Webhooks
### Webhook Run Triggered
- **ID**: `webhook_run_triggered`
- **Description**: When a webhook run is triggered
- **Category**: `webhooks`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `debug`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ❌ `disabled`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ✅ `enabled`

- **Scheduling**: ❌ `disabled`

### Webhook executed
- **ID**: `webhook_run_executed`
- **Description**: When a webhook has been executed
- **Category**: `webhooks`
- **Payload schema**: No schema

- **Logging**: ✅ `enabled` (Log level: `info`)

- **Telemetry**: ✅ `enabled`

- **Audit trail**: ✅ `enabled` (Category: `webhooks`)

  - Database table: `evt_webhook_run_executed`

  - Database columns:
    - `_timestamp`
    - `eventn_ctx_event_id`
    - `event`
    - `hook_id`
    - `hook_name`
    - `hook_config_url`
    - `run_id`
    - `payload`
    - `run_start_date`
    - `run_end_date`
    - `run_duration`
    - `run_attempts`
    - `run_status`
    - `run_failed_reason`

- **Organization webhooks**: ❌ `disabled`

- **System webhooks**: ❌ `disabled`

- **Queuing**: ❌ `disabled`

- **Scheduling**: ❌ `disabled`

