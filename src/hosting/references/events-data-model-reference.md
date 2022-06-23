# Events Data Model Reference
📆 *Generated: Thu, 16 Jun 2022 00:50:00 GMT*


This document lists all the events tracked in our events database.

Each event is specified with:
- **Name**: Event name.
- **Description**: Describes when the event will be triggered.
- **Table**: Specifies the corresponding table name in our events database.


| Name | Description | Table |
|:-----|:------------|:------|
| Server instance starting | When a server instance is starting | evt_server_starting |
| Server instance startup aborted | When a server instance startup has been aborted | evt_server_startup_aborted |
| Server instance started | When a server instance has started | evt_server_started |
| Server instance stopping | When a server instance is stopping | evt_server_stopping |
| Server instance stopped | When a server instance has stopped | evt_server_stopped |
| Service account tokens renewal completed | When the service account tokens renewal job has renewed a service account tokens | evt_service_account_token_renewal_completed |
| Services starting | When a server instance is starting its services | evt_services_starting |
| Services started | When a server instance has started its services | evt_services_started |
| Service starting | When a service is starting | evt_service_starting |
| Service started | When a service has been started | evt_service_started |
| Service stopping | When a service is stopping | evt_service_stopping |
| Service stopped | When a service has stopped | evt_service_stopped |
| Services stopping | When a server instance is stopping its services | evt_services_stopping |
| Services stopped | When a server instance has stopped its services | evt_services_stopped |
| Scheduled job completed | When a scheduled job has been executed and is done | evt_scheduled_job_run_completed |
| Webhook executed | When a webhook has been executed | evt_webhook_run_executed |
| Team created | When a team has been created | evt_team_provisioning_started |
| Team provisioning audit entry created | When a team provisioning job has created a new entry in its audit trail | evt_team_provisioning_audit_trails |
| Team created | When a team has been created | evt_team_created |
| Team provisioning completed | When the provisioning of a team has been completed | evt_team_provisioning_completed |
| Team template attached | When a template has been attached to a team | evt_team_template_attached |
| Team deletion detected | When the deletion of a team has been detected | evt_team_deleted |
| Template deletion detected | When the deletion of a template has been detected | evt_team_template_deleted |
| Permanent membership policy control completed | When the permenent membership policy control job is done for a specific tenant | evt_microsoft_teams_permanent_membership_policy_control_completed |
| Permanent membership policy team user invited | When the permanent membership policy control job has invited a user to a team (as a member or as an owner) | evt_microsoft_teams_permanent_membership_policy_team_user_invited |
| Permanent membership policy channel user invited | When the permanent membership policy control job has invited a user to a channel (as a member or as an owner) | evt_microsoft_teams_permanent_membership_policy_channel_user_invited |
| Microsoft Marketplace subscription plan updated | When a Microsoft Marketplace subscription plan has been updated | evt_microsoft_marketplace_subscription_plan_changed |
| Microsoft Marketplace subscription quantity updated | When a Microsoft Marketplace subscription quantity has been updated | evt_microsoft_marketplace_subscription_quantity_changed |
| Microsoft Marketplace subscription suspended | When a Microsoft Marketplace subscription has been suspended | evt_microsoft_marketplace_subscription_suspended |
| Microsoft Marketplace subscription reinstated | When a Microsoft Marketplace subscription has been reinstated | evt_microsoft_marketplace_subscription_reinstated |
| Microsoft Marketplace subscription unsubscribed | When a Microsoft Marketplace subscription has been unsubscribed | evt_microsoft_marketplace_subscription_unsubscribed |
| Microsoft Marketplace subscription unknown action detected | When an unknown Microsoft Marketplace subscription action has been detected | evt_microsoft_marketplace_subscription_unknown_action_detected |
| Team creation approval requested | When a team creation approval workflow is requested | evt_team_creation_approval_requested |
| Team creation approved | When a team creation was approved from an approval workflow | evt_team_creation_approved |
| Team creation rejected | When a team creation was rejected from an approval workflow | evt_team_creation_rejected |
| Admin consent performed | When a user has performed the Microsft Teams admin consent process | evt_user_microsoft_teams_admin_consent_performed |
| Service account registration performed | When a user has performed the Microsoft Teams service account registration process | evt_user_microsoft_teams_service_account_registration_performed |
| RBAC settings updated | A user has updated role-based access control settings | evt_user_rbac_settings_updated |
| Service account deleted | When a user has deleted a Microsoft Teams service account | evt_user_microsoft_teams_service_account_deleted |
| Admin consent checked | When a user has checked the Microsft Teams admin consent | evt_user_microsoft_teams_admin_consent_checked |
| Connected apps server started | When a connected apps served has started | evt_connected_apps_server_started |
| Connected apps server stopped | When a connected apps served has stopped | evt_connected_apps_server_stopped |
| Connected apps solution instance installed | When a user has installed a connected apps solution instance | evt_user_connected_apps_solution_instance_installed |
| Connected apps solution instance configured | When a user has configured a connected apps solution instance | evt_user_connected_apps_solution_instance_configured |
| Connected apps solution instance enabled | When a user has enabled a connected apps solution instance | evt_user_connected_apps_solution_instance_enabled |
| Connected apps solution instance uninstalled | When a user has uninstalled a connected apps solution instance | evt_user_connected_apps_solution_instance_uninstalled |
| Connected apps solution instance upgraded | When a user has upgraded a connected apps solution instance | evt_user_connected_apps_solution_instance_upgraded |
| Connected apps category viewed | When a user has viewed a connected apps category | evt_user_connected_apps_category_viewed |
| Connected apps solutions search | When a user has searched for a connected apps solution | evt_user_connected_apps_solutions_search |
| Connected apps solution viewed | When a user has viewed a solution | evt_user_connected_apps_solution_viewed |
