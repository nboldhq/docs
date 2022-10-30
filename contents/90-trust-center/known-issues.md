---
position: 10
status: published
author: Guillaume Meyer
---
# Known issues

:::tip
In addition to this article that describes known issues with nBold, please refer to:
* [Microsoft Teams Known Issues...](https://docs.microsoft.com/en-us/microsoftteams/known-issues)
* [Microsoft Graph Known Issues...](https://docs.microsoft.com/en-us/graph/known-issues)
:::

## Provisionning is stopped after enabling MFA

### Behavior / Symptom / Root Cause
If you enforce MFA for the service account AFTER it has been configured in nBold, the provisionning process stops to work.

**Root Cause**: Enabling MFA for an account resets its credentials, access token and refresh token. Therefore the service account cannot refresh its own token anymore.

### Known Workaround
Update the service account from the "Settings" tab using the "Update" button.

### Additional Infos
* 📅 Discovery Date: 2019/12/06
* 🚦 Related Issues: N/A
* 📑 References: [Session timeouts for Office 365](https://docs.microsoft.com/en-us/office365/enterprise/session-timeouts)

***

## "Missing Teams in List All Teams" when creating a new template

### Behavior / Symptom / Root Cause
When creating a new template in your catalog, some older teams may not appear in search results and therefore cannot be used as a cloned team.

**Root Cause**: Some teams that were created in the past (The old days of Microsoft Teams...) but haven't been used recently by a Microsoft Teams user aren't listed by the "list all teams" endpoint from the Microsoft Graph API.

New teams will be correctly listed.
Certain old teams don't have a:
```json
"resourceProvisioningOptions": [
    "Team"
],
```
property that contains "Team", which is set on newly created teams and teams that are visited in Microsoft Teams.

### Known Workaround
Reopen the team with a team owner account (To be confirmed).

### Additional Infos
* 📅 Discovery Date: 2019/04/30
* 🚦 Related Issues: N/A
* 📑 References:
  * [Missing Teams in List All Teams...](https://docs.microsoft.com/en-us/graph/known-issues#missing-teams-in-list-all-teams)

***

