---
author: Guillaume Meyer

---
# Naming Convention

**ABSTRACT**  
You use a naming convention to enforce a consistent naming strategy for teams created by users in your organization. A naming convention can help you and your users identify the function of the team, membership, geographic region, or who created the team. The naming convention can also help categorize teams and underlying groups in the address book.  
Intrinsically, naming conventions are a combination of values and expressions that are evaluated against a user profile and a request form, which defines the final value of fields.

## Available tags

Naming conventions can use information coming from the user profile and the user request form through the following tags.

:::caution
Be careful: These tags are **CASE-SENSITIVE**!
:::

### Request Form

| Tag | Description |
| --- | --- |
| request.team.name | Requested team name |
| request.team.description | Requested team description |
| request.team.welcomeMessage | Requested team welcome message |
| request.template.name | Requested template name |
| request.request.requester.name | Requester name (Same as user.displayName) |
| request.request.requester.email | Requester email (user.mail) |

### User Profile (Active Directory attributes)

| Tag | Description |
| --- | --- |
| user.displayName | User full name. (for example "Bob Dirac") |
| user.userPrincipalName | User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "bob.dirac@contoso.com") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix). <hr />❗ A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule. |
| user.mail | User email (for example: "bob.dirac@domain.com") |
| user.preferredLanguage | User preferred language in Microsoft 365. <hr />Language and locale codes are limited to those in the ISO 639-1 standard. |
| user.givenName | User given name (for example: "Bob") |
| user.country | User country (for example: "France") |
| user.companyName | User company name (for example: "Contoso") |
| user.department | User department (for example: "Marketing") |
| user.city | User city (for example: "Paris") |
| user.jobTitle | User job title (for example: "Product Manager") |
| user.surname | User surname (for example: "Dirac") |
| user.usageLocation | Office 365 usage location. (for example: "US") <hr />Rely on the ISO 3166-1 alpha-2 country codes... |

### App Registration

| Tag | Description |
| --- | --- |
| app.id | Application ID as defined during the app registration in Azure. |
| app.name | Application name as defined during the app registration in Azure. |

## Common scenarios

In addition to tags, naming conventions can use standard javascript operators and functions.

:::tip Syntax
Naming conventions follows the [EJS syntax](https://ejs.co/#docs)
:::

### Examples: Static naming convention

#### "Add a "PRJ-" prefix to project management teams"

```javascript
PRJ-<%= request.team.name %>
```

#### "Add a "-MKT" suffix to teams related to the marketing team"

```javascript
<%= request.team.name %>-MKT
```

#### "Add marketing-related tags to teams descriptions for categorization purpose"

```javascript
<%= request.team.description %> - #marketingcampaign #retargeting #seo
```

### Examples: Dynamic naming convention

#### "Generate a unique name based on the current date"

```js
<%= request.team.name %>-<%= Date.now() %> // Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.. Example: `1592241059000`
```

or

```js
<%= request.team.name %>-<%= new Date().getTime() %> // Returns the current date and time in the ISO 8601 format. Example: `2020-06-15T17:09:51.312Z`
```

#### "Add country as a suffix to teams names based on the requester location"

```javascript
<%= request.team.name %> - <%= user.usageLocation %>
```

#### "Add the Business Solution name to description"

```javascript
<%= request.team.description %> - Created from the "<%= request.template.name %>" team template.
```

### Examples: Conditional naming convention

#### "Use a specific suffix for users from a specific domain, use the domain name for the others"

```javascript
<%= request.team.name %> - 
<% if (user.mail.includes('@contoso.fr')) { %>
    CT France // Use "CT France" instead of contoso.fr
<% } else { %>
    <%= user.mail.replace(/.*@/, '') %> // Extract domain name from user email address
<% } %>
```

### Azure AD Schema Extension

To use Azure AD schema extensions in your naming conventions, please refer to [this article](/catalog-manager-guide/governance-policies/use-ad-schema-extensions)

## Tips

### Team Name Length

The maximum team name length (including prefix, suffix, etc...) is fixed to **264 characters**, which is the limit of the [underlying group name](https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide#things-to-look-out-for).

:::caution
This limit is validated by adding the lengths of **BOTH** the requested team name **AND** the dynamic naming convention!
:::

### Special characters

The following characters are forbidden in teams names:

    " * : < > ? / \

:::tip
You can use " **-** " or " **|** " as separators.
:::