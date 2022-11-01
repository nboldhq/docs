# App Data Model Reference
📆 *Generated: Mon, 31 Oct 2022 15:38:18 GMT*


This document lists all the tables and their columns available from our database.

Each table is specified with:
- **Name**: Table name.

Each column is specified with:
- **Name**: Column name.
- **Type**: Column type.
- **Allow null**: Does the column allows null values.
- **Auto increment**: Does the column is an auto-increment ID.
- **Primary key**: Is the column a primary key.


## ORGANIZATIONS
*Table: organizations*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `tid` | UUID | false | false | false |
| `tenant_initial_domain` | STRING | true | false | false |
| `tenant_default_domain` | STRING | true | false | false |

## MICROSOFT_MARKETPLACE_SUBSCRIPTIONS
*Table: subscriptions*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `subscriptionId` | UUID | false | false | false |
| `publisherId` | STRING | false | false | false |
| `offerId` | STRING | false | false | false |
| `planId` | STRING | false | false | false |
| `quantity` | STRING | true | false | false |
| `status` | STRING | false | false | false |

## USERS
*Table: users*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `tid` | UUID | false | false | false |
| `oid` | UUID | false | false | false |

## MICROSOFT_GRAPH_SUBSCRIPTIONS
*Table: graph_subscriptions*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `tid` | UUID | false | false | false |
| `oid` | UUID | false | false | false |
| `change_type` | STRING | false | false | false |
| `notification_url` | STRING | false | false | false |
| `resource` | STRING | false | false | false |
| `expiration` | DATE | false | false | false |

## MICROSOFT_TEAMS_TEAMS
*Table: teams*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `tid` | UUID | false | false | false |
| `oid` | UUID | false | false | false |
| `visibility` | STRING | true | false | false |
| `isArchived` | BOOLEAN | true | false | false |
| `template_id` | UUID | true | false | false |
| `metadata` | JSONB | true | false | false |

## MICROSOFT_TEAMS_CHANNELS
*Table: microsoft_teams_channels*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `tid` | UUID | false | false | false |
| `oid` | STRING | false | false | false |
| `team_oid` | UUID | false | false | false |
| `membershipType` | STRING | true | false | false |
| `metadata` | JSONB | true | false | false |

## MICROSOFT_TEAMS_TABS
*Table: tabs*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `tid` | UUID | false | false | false |
| `oid` | UUID | false | false | false |
| `team_oid` | UUID | false | false | false |
| `channel_oid` | STRING | false | false | false |
| `metadata` | JSONB | true | false | false |

## MICROSOFT_TEAMS_CHANNEL_MESSAGES
*Table: microsoft_teams_channel_chat_messages*

| Name | Type | Allow null | Auto increment | Primary key |
|:-----|:-----|:----------:|:--------------:|:-----------:|
| `id` | INTEGER | false | true | true |
| `tid` | UUID | false | false | false |
| `oid` | STRING | false | false | false |
| `team_oid` | UUID | false | false | false |
| `channel_oid` | STRING | false | false | false |
| `metadata` | JSONB | true | false | false |
