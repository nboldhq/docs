# Authentication
To access the nBold API, a valid Azure Active Directory access token is required, as a user or as an application.

## Supported access tokens
The nBold API expects a valid access token in the HTTP `Authorization` request header with a `bearer` token such as:
```json
{
  "Authorization": "bearer <JWT_TOKEN>"
}
```

nBold supports [access tokens](https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens) retreived from the following `OAuth 2.0` grant flows:
- [Auth Code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- [On-behalf-of](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- [Client Credentials](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)

## Required roles
The nBold API implements role-based access control for each operation:
| Role | Code | Origin |
|------|------|--------|
| Anonymous Access | `ANONYMOUS_ACCESS` | nBold |
| End-User | `AUTHENTICATED_USER` | nBold |
| Authorized App | `AUTHORIZED_APP` | nBold |
| Catalog Manager | `CATALOG_MANAGER` | nBold |
| Governance Manager | `GOVERNANCE_MANAGER` | nBold |
| Compliance Manager | `COMPLIANCE_MANAGER` | nBold |
| Integration Manager | `INTEGRATION_MANAGER` | nBold |
| Change Manager | `CHANGE_MANAGER` | nBold |
| Teams Service Administrator | `TEAMS_SERVICE_ADMIN` | Microsoft 365 |
| Global Administrator | `GLOBAL_ADMIN` | Microsoft 365 |

Each operation in this documentation specifies its required roles (You'll need at least ONE of them) through the `x-nbold-required-roles` extension.
