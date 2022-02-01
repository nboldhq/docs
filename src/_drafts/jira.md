# Jira Integration Settings

## Abstract
Configure a Jira integration requires you to perform some one-time operations:
1. Create a Jira configuration
2. Configure a Jira authentication
3. Configure your integration settings

## Create a Jira Configuration
1. Open your [Jira App Management](https://salestim.atlassian.net/secure/admin/oauth-credentials) page.
2. Click `Create new app`.
3. Give the app a name such as 'SalesTim' and accept [Atlassian's developer terms](https://developer.atlassian.com/platform/marketplace/atlassian-developer-terms/)
4. Upload this picture as the app avatar: 'https://developers.salestim.com/color.png'
5. From the `APIS AND FEATURES` section, click `OAuth 2.0 (3LO)`
6. Paste this URL as the callcack URL 'https://connectedapps.salestim.io/auth/callback' and click `Save changes`
7. Click `Add APIs`
8. Select `Jira platform REST API` and click `Add`
9. Add the following scopes by clicking the `Add` button next to each scopes:
    ```
    ✅ View Jira issue data
    ✅ Manage project settings
    ✅ View user profiles
    ✅ Create and manage issues
    ```
10. Click again on `OAuth 2.0 (3LO)`
11. Select `User identity API` and click `Add`
12. Add the following scopes by clicking the `Add` button:
    ```
    ✅ View user profile
    ```

For reference, see [OAuth 2.0 (3LO) for apps](https://developer.atlassian.com/cloud/jira/platform/oauth-2-authorization-code-grants-3lo-for-apps/)

12. From the `API (Enable OAuth Settings)` section:
    - copy `Consumer Key` and paste it to the `Client ID` field in SalesTim settings:
        `bI64jceQ3I4IrJoIoYKZ6DE4VXiUZjfO`
    - next to the `Consumer Secret` field, click `Click to reveal` and copy the consumer key, then paste it to the `Client Secret` field in SalesTim settings:
        `7JoE3ArNANJRb-u2x9leSkDLjFUz6OmW3HEwZc0WbgraYGYsj18pXeiMqdrKEHgP`
13. Back to SalesTim settings, paste the following scopes to the `Scopes` field (one per line):
    ```
    read:me
    read:jira-work
    manage:jira-project
    read:jira-user
    write:jira-work
    refresh_token
    offline_access
    ```
14. Click `Save Configuration`

## Configure a Jira authentication

1. From SalesTim settings, in the `Authentication` section, click `Connect`
2. Review the requested scopes, select your Jira site and accept

## Configure your integration settings

Once your Jira configuration is done, and your Jira authentication is configured, you can define your business rules for each available object type.



## Jira project viewer

'Jira Cloud' app for Microsoft Teams:
https://appsource.microsoft.com/en-us/product/office/WA200002140

Requires the 'Microsoft Teams for Jira" app installed in your Jira environment
https://marketplace.atlassian.com/apps/1217836/microsoft-teams-for-jira?hosting=cloud&tab=overview