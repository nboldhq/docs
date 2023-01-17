# App Data Model Reference
📆 *Generated: Thu, 12 Jan 2023 09:18:55 GMT*


This document lists all the tables and their columns available from our database.

Each table is specified with:
- **Name**: Table name.

Each column is specified with:
- **Name**: Column name.
- **Type**: Column type.
- **Allow null**: Does the column allows null values.
- **Auto increment**: Does the column is an auto-increment ID.
- **Primary key**: Is the column a primary key.


## Organization
*Table: organizations*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | UUID | false | undefined | true |
| `name` | STRING | true | undefined | undefined |
| `tenant_id` | UUID | false | undefined | undefined |
| `tenant_multigeo` | BOOLEAN | true | undefined | undefined |
| `tenant_preferred_language` | STRING | true | undefined | undefined |
| `tenant_marketing_mails` | STRING | true | undefined | undefined |
| `security_mails` | STRING | true | undefined | undefined |
| `technical_mails` | STRING | true | undefined | undefined |
| `tenant_initial_domain` | STRING | true | undefined | undefined |
| `tenant_default_domain` | STRING | true | undefined | undefined |
| `tenant_region_scope` | STRING | true | undefined | undefined |
| `tenant_region_sub_scope` | STRING | true | undefined | undefined |

## User
*Table: users*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | UUID | false | undefined | true |
| `object_id` | UUID | false | undefined | undefined |

## Team
*Table: teams*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `object_id` | UUID | true | undefined | undefined |
| `visibility` | STRING | true | undefined | undefined |
| `archived` | BOOLEAN | true | undefined | undefined |
| `template_id` | UUID | true | undefined | undefined |
| `native_template_id` | STRING | true | undefined | undefined |
| `metadata` | JSONB | true | undefined | undefined |
| `isArchived` | BOOLEAN | true | undefined | undefined |
| `tid` | UUID | false | undefined | undefined |
| `oid` | UUID | false | undefined | undefined |

## Channel
*Table: microsoft_teams_channels*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `object_id` | UUID | true | undefined | undefined |
| `membership_type` | STRING | true | undefined | undefined |
| `metadata` | JSONB | true | undefined | undefined |
| `tid` | UUID | false | undefined | undefined |
| `oid` | STRING | false | undefined | undefined |
| `team_oid` | UUID | false | undefined | undefined |
| `membershipType` | STRING | true | undefined | undefined |

## ChannelMessage
*Table: microsoft_teams_channel_chat_messages*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `object_id` | UUID | true | undefined | undefined |
| `metadata` | JSONB | true | false | false |
| `tid` | UUID | false | false | false |
| `oid` | STRING | false | false | false |
| `team_oid` | UUID | false | false | false |
| `channel_oid` | STRING | false | false | false |

## GraphNotification
*Table: graph_notifications*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | UUID | false | undefined | true |
| `object_id` | UUID | true | undefined | undefined |
| `change_type` | STRING | false | false | false |
| `notification_url` | STRING | false | false | false |
| `resource` | STRING | false | false | false |
| `expiration` | DATE | false | false | false |
| `tid` | UUID | false | false | false |
| `oid` | UUID | false | false | false |

## Subscription
*Table: subscriptions*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | UUID | false | undefined | true |
| `status` | STRING | false | undefined | undefined |
| `plan` | STRING | false | undefined | undefined |
| `quantity` | INTEGER | false | undefined | undefined |
| `origin` | STRING | false | undefined | undefined |
| `ms_subscription_id` | STRING | true | undefined | undefined |
| `ms_beneficiary_email` | STRING | true | undefined | undefined |
| `ms_beneficiary_object_id` | STRING | true | undefined | undefined |
| `ms_beneficiary_tenant_id` | STRING | true | undefined | undefined |
| `ms_purchaser_email` | STRING | true | undefined | undefined |
| `ms_purchaser_object_id` | STRING | true | undefined | undefined |
| `ms_purchaser_tenant_id` | STRING | true | undefined | undefined |

## ConnectedAppsConfiguration
*Table: connected_apps_configurations*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | UUID | false | undefined | true |
| `connected_apps_instance_id` | STRING | false | undefined | undefined |
| `options` | JSONB | false | undefined | undefined |

## RemoteObject
*Table: remote_objects*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | UUID | false | undefined | true |
| `remote_system` | STRING | false | undefined | undefined |
| `object_type` | STRING | false | undefined | undefined |
| `external_id` | STRING | false | undefined | undefined |
| `object_properties` | JSONB | false | undefined | undefined |
| `state` | STRING | false | undefined | undefined |
| `connected_apps_configuration_id` | UUID | false | undefined | undefined |
| `acl` | JSONB | true | undefined | undefined |
| `linked_objects` | JSONB | true | undefined | undefined |
| `collaboration_artifacts` | JSONB | true | undefined | undefined |
