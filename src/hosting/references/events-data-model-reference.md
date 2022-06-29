# Events Data Model Reference
📆 *Generated: Wed, 29 Jun 2022 18:59:34 GMT*


This document lists all the events tracked in our events database.

Each event is specified with:
- **Name**: Event name.
- **Description**: Describes when the event will be triggered.
- **Table**: Specifies the corresponding table name in our events database.


| Name | Description | Table |
|:-----|:------------|:------|
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
| Scheduled job completed | When a scheduled job has been executed and is done | evt_scheduled_job_run_completed |
| Microsoft Marketplace subscription plan updated | When a Microsoft Marketplace subscription plan has been updated | evt_microsoft_marketplace_subscription_plan_changed |
| Microsoft Marketplace subscription quantity updated | When a Microsoft Marketplace subscription quantity has been updated | evt_microsoft_marketplace_subscription_quantity_changed |
| Microsoft Marketplace subscription suspended | When a Microsoft Marketplace subscription has been suspended | evt_microsoft_marketplace_subscription_suspended |
| Microsoft Marketplace subscription reinstated | When a Microsoft Marketplace subscription has been reinstated | evt_microsoft_marketplace_subscription_reinstated |
| Microsoft Marketplace subscription unsubscribed | When a Microsoft Marketplace subscription has been unsubscribed | evt_microsoft_marketplace_subscription_unsubscribed |
| Microsoft Marketplace subscription unknown action detected | When an unknown Microsoft Marketplace subscription action has been detected | evt_microsoft_marketplace_subscription_unknown_action_detected |
| Microsoft Teams admin consent success | When an administrator has successfully granted consent to a Microsoft Teams service account | evt_microsoft_teams_admin_consent_success |
| Microsoft Teams admin consent error | When an administrator has failed to grant consent to a Microsoft Teams service account | evt_microsoft_teams_admin_consent_error |
| Microsoft Teams teams searched | When a user starts a search for teams from the Microsoft Teams app | evt_microsoft_teams_teams_searched |
| Team creation approval requested | When a team creation approval workflow is requested | evt_team_creation_approval_requested |
| Microsoft Teams team creation approval email sent | When a Microsoft Teams team creation approval email is sent | evt_microsoft_teams_team_creation_approval_email_sent |
| Team creation approved | When a team creation was approved from an approval workflow | evt_team_creation_approved |
| Team creation rejected | When a team creation was rejected from an approval workflow | evt_team_creation_rejected |
| Permanent membership policy control completed | When the permenent membership policy control job is done for a specific tenant | evt_microsoft_teams_permanent_membership_policy_control_completed |
| Permanent membership policy team user invited | When the permanent membership policy control job has invited a user to a team (as a member or as an owner) | evt_microsoft_teams_permanent_membership_policy_team_user_invited |
| Permanent membership policy channel user invited | When the permanent membership policy control job has invited a user to a channel (as a member or as an owner) | evt_microsoft_teams_permanent_membership_policy_channel_user_invited |
| Microsoft Teams service account registration success | When a user has successfully registered a Microsoft Teams service account | evt_microsoft_teams_service_account_registation_success |
| Microsoft Teams service account registration error | When a user has failed to register a Microsoft Teams service account | evt_microsoft_teams_service_account_registation_error |
| Microsoft Teams service account deletion success | When a user has successfully deleted a Microsoft Teams service account | evt_microsoft_teams_service_account_deletion_success |
| Microsoft Teams service account deletion error | When a user has failed to delete a Microsoft Teams service account | evt_microsoft_teams_service_account_deletion_error |
| Microsoft Teams team template created | When a Microsoft Teams team template is created | evt_microsoft_teams_team_template_created |
| Microsoft Teams team template updated | When a Microsoft Teams team template is updated | evt_microsoft_teams_team_template_updated |
| Microsoft Teams team template deleted | When a Microsoft Teams team template is deleted | evt_microsoft_teams_team_template_deleted |
| Team created | When a team has been created | evt_team_provisioning_started |
| Team provisioning audit entry created | When a team provisioning job has created a new entry in its audit trail | evt_team_provisioning_audit_trails |
| Team created | When a team has been created | evt_team_created |
| Team provisioning completed | When the provisioning of a team has been completed | evt_team_provisioning_completed |
| Team template attached | When a template has been attached to a team | evt_team_template_attached |
| Team deletion detected | When the deletion of a team has been detected | evt_team_deleted |
| Template deletion detected | When the deletion of a template has been detected | evt_team_template_deleted |
| RBAC settings updated | A user has updated the role-based access control settings | evt_rbac_settings_updated |
| Report opened | When a user opens a report | evt_report_opened |
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
| User signed in | When a user has signed in | evt_user_signedin |
| User signed out | When a user has signed out | evt_user_signedout |
| User unauthorized | When a user has been denied access to a resource | evt_user_unauthorized |
| Webhook executed | When a webhook has been executed | evt_webhook_run_executed |
