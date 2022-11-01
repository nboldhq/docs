# Events Data Model Reference
📆 *Generated: Mon, 31 Oct 2022 15:38:18 GMT*


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
| Microsoft Identity Access Token Refreshed | When a Microsoft Identity access token has been refreshed | evt_microsoft_identity_access_token_refreshed |
| Microsoft Identity Access Token Refresh Failed | When a Microsoft Identity access token refresh has failed | evt_microsoft_identity_access_token_refresh_failed |
| Microsoft Teams list tab cloned | When a Microsoft Teams list tab has been cloned | evt_microsoft_teams_list_tab_cloned |
| Microsoft Teams list created | When a Microsoft Teams list has been created | evt_microsoft_teams_list_created |
| Microsoft Teams list item created | When a Microsoft Teams list item has been created | evt_microsoft_teams_list_item_created |
| Microsoft Teams list view created | When a Microsoft Teams list view has been created | evt_microsoft_teams_list_view_created |
| Microsoft Marketplace subscription plan updated | When a Microsoft Marketplace subscription plan has been updated | evt_microsoft_marketplace_subscription_plan_changed |
| Microsoft Marketplace subscription quantity updated | When a Microsoft Marketplace subscription quantity has been updated | evt_microsoft_marketplace_subscription_quantity_changed |
| Microsoft Marketplace subscription suspended | When a Microsoft Marketplace subscription has been suspended | evt_microsoft_marketplace_subscription_suspended |
| Microsoft Marketplace subscription reinstated | When a Microsoft Marketplace subscription has been reinstated | evt_microsoft_marketplace_subscription_reinstated |
| Microsoft Marketplace subscription unsubscribed | When a Microsoft Marketplace subscription has been unsubscribed | evt_microsoft_marketplace_subscription_unsubscribed |
| Microsoft Marketplace subscription unknown action detected | When an unknown Microsoft Marketplace subscription action has been detected | evt_microsoft_marketplace_subscription_unknown_action_detected |
| Microsoft Teams Office tab cloned | When a Microsoft Teams Office tab has been cloned | evt_microsoft_teams_office_tab_cloned |
| Microsoft Teams OneNote tab cloned | When a Microsoft Teams OneNote tab has been cloned | evt_microsoft_teams_onenote_tab_cloned |
| Microsoft Teams OneNote notebook copy failed | When a Microsoft Teams OneNote notebook copy has failed | evt_microsoft_teams_onenote_notebook_copy_failed |
| Microsoft Teams OneNote notebook created | When a Microsoft Teams OneNote notebook has been created | evt_microsoft_teams_onenote_notebook_created |
| Microsoft Teams Planner tab cloned | When a Microsoft Teams Planner tab has been cloned | evt_microsoft_teams_planner_tab_cloned |
| Microsoft Planner plan created | When a Microsoft Planner plan has been created | evt_microsoft_planner_plan_created |
| Microsoft Planner bucket created | When a Microsoft Planner bucket has been created | evt_microsoft_planner_bucket_created |
| Microsoft Planner task created | When a Microsoft Planner task has been created | evt_microsoft_planner_task_created |
| Microsoft Teams admin consent success | When an administrator has successfully granted consent to a Microsoft Teams service account | evt_microsoft_teams_admin_consent_success |
| Microsoft Teams admin consent error | When an administrator has failed to grant consent to a Microsoft Teams service account | evt_microsoft_teams_admin_consent_error |
| Microsoft Teams teams searched | When a user starts a search for teams from the Microsoft Teams app | evt_microsoft_teams_teams_searched |
| Team creation approval requested | When a team creation approval workflow is requested | evt_team_creation_approval_requested |
| Microsoft Teams team creation approval email sent | When a Microsoft Teams team creation approval email is sent | evt_microsoft_teams_team_creation_approval_email_sent |
| Team creation approved | When a team creation was approved from an approval workflow | evt_team_creation_approved |
| Team creation rejected | When a team creation was rejected from an approval workflow | evt_team_creation_rejected |
| Microsoft Teams app installed | When a Microsoft Teams app is installed | evt_microsoft_teams_app_installed |
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
| Service account refresh tokens expired | When a service account access token is detected as expired, and that it can't be refreshed using a refresh token that has expired | evt_service_account_refresh_token_expired |
| Service account tokens renewal completed | When the service account tokens renewal job has renewed a service account tokens | evt_service_account_token_renewal_completed |
| Service account missing permissions | When the service account is trying to perform an operation that requires permissions it has not been granted for | evt_service_account_missing_permissions |
| Service account missing licenses | When the service account is trying to perform an operation that requires a license it has not been assigned | evt_service_account_missing_licenses |
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
