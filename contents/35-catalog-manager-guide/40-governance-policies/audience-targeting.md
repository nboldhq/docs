---
author: Guillaume Meyer

---
# Audience Targeting

  
Audience targeting is a rule that could be applied to a template for defining who can access and use that template, based on the user profile data. Intrinsically, targeting rules are a combination of tags and expressions that are evaluated against a user profile to determine whether a template is shown.

## Available tags

Targeting rules can use user profile information through the following tags:

| Tag | Description |
| --- | --- |
| user.displayName | User full name (for example "Bob Dirac".) |
| user.userPrincipalName | User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "bob.dirac@contoso.onmicrosoft.com") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix). <hr />Important: A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule. |
| user.mail | User email (for example: "bob.dirac@domain.com"). |
| user.preferredLanguage | User preferred language in Microsoft 365. <hr />Language and locale codes are limited to those in the ISO 639-1 standard. |
| user.givenName | User given name (for example: "Bob"). |
| user.country | User country (for example: "France"). |
| user.companyName | User company name (for example: "Contoso"). |
| user.department | User department (for example: "Marketing"). |
| user.city | User city (for example: "Paris"). |
| user.jobTitle | User job title (for example: "Product Manager"). |
| user.surname | User surname (for example: "Dirac"). |
| user.usageLocation | Office 365 usage location. (for example: "US") <hr />Rely on the ISO 3166-1 alpha-2 country codes.... |
| user.groups.direct | All the groups that the user is a DIRECT member of. |

:::caution Case sensitivity Be careful: These tags are **CASE-SENSITIVE** and therefore must always be used lower-cased. :::

## Examples

In combination with tags, targeting rules can use any standard JavaScript operator and function. This section provides some typical examples, from the simplest to the most complex one, to target your templates to specific audiences in an organization.

### Comparison operators

To compare two values, your expression can use any standard JavaScript [comparison operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).

```javascript
// From France
user.country === 'FR'
```

```javascript
// From any country except from Germany
user.country !== 'DE'
```

:::tip Evaluation N.B: The template will be shown to a user only if the expression is evaluated as `true` :::

### Combining multiple criteria

Rules follow the standard JavaScript [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), so you can combine multiple rules in one expression.

```javascript
// From France or Belgium, member of the Marketing Department
( user.country === 'FR' || user.country === 'BE' ) && user.department === 'Marketing' 
```

### Functions

As part of your rules, you can use any standard JavaScript function, for instance [strings methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), or for more advanced scenarios, [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

```javascript
// English speakers from any country
user.preferredLanguage.includes('en-')
```

```javascript
// users with @contoso.com or @contoso.fr in their email domain name
user.mail.includes('@contoso.com') || user.mail.includes('@contoso.fr')
```

### Using groups membership

The `user.groups.direct` tag gives you access to all the groups that the user is a DIRECT member of, as an array of groups objects. Therefore, you can use any standard JavaScript [array function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) for your evaluation.

There are several types of groups, that can be differentiated by their `@odata.type` property:

:::caution Note
The response object shown here might be shortened for readability. All the default properties are returned for each group in an actual call.
:::

```json
{
    "@odata.type":"#microsoft.graph.directoryRole", // Standard Azure AD groups, such as the admin roles from your Microsoft 365 environment
    "id":"3b4b0f4e-d037-4116-bd0e-1a2173d95d5a",
    "deletedDateTime":null,
    "description":"Company Administrator role has full access to perform any operation in the company scope.",
    "displayName":"Global Administrator",
    "roleTemplateId":"72e90394-69f5-4237-9190-012177145e10"
}
```

```json
{
    "@odata.type":"#microsoft.graph.group", // Microsoft 365 groups, associated with a team or a SharePoint site.
    "id":"e9090752-4430-4361-8594-e6ce98a7fbfa",
    "deletedDateTime":null,
    "classification":null,
    "createdDateTime":"2020-08-04T15:39:08Z",
    "description":"A fantastic group!!!",
    "displayName":"Onboarding",
    "groupTypes":["Unified"],
    "mail":"Onboarding@contoso.com",
    "mailEnabled":true,
    "mailNickname":"Onboarding",
    "preferredDataLocation":null,
    "preferredLanguage":null,
    "resourceProvisioningOptions":["Team"],
    "visibility":"Private"
}
```

In this example, we're testing user membership by checking if one of its groups contains the word "Onboarding" in its display name:

```js
// Is a member of an "Onboarding" group
user.groups.direct.some(group => group.displayName.includes('Onboarding'))
```

:::caution Case sensitivity
Be careful, evaluations are **case-sensitive**. Therefore to make sure your evaluation work independently of the case, you can use the `toLowerCase` function, such as: `group.displayName.toLowerCase().includes('Onboarding')`
:::

In this example, we're testing is the user is a member of a specific group by checking if one of its groups has a specific ID:

```js
// Is a member of a specific group by its ID
user.groups.direct.some(group => group.id === ('a937979b-5dbb-4f54-a405-936046244b0b'))
```

### Azure AD Schema Extension

To use Azure AD schema extensions in your audience targeting rules, please refer to [this article](/catalog-manager-guide/governance-policies/use-ad-schema-extensions)

## Validate and test your audience targeting rule

:::tip Syntax Assistant
A "Check Syntax" button is available to test the rule against the current logged user. You can expect 3 kind of outcomes.

1. You would have access
2. You would not have access
3. An error is detected. In case of error, the technical details are also available, helping you solve the issue.
   :::