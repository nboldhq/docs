# Authentication

**ABSTRACT**  
To access the nBold API, a valid Azure Active Directory access token is required. This article explains how to get it, as a user or as an application.

---

**TABLE OF CONTENTS**  
[[toc]]

---

## Supported access tokens
The nBold API expects a valid access token in the HTTP `Authorization` request header with a `bearer` token such as:
```json
{
  "Authorization": "bearer <JWT_TOKEN>"
}
```

nBold supports [access tokens](https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens) retreived from the following OAuth 2.0 grant flows:
- [Auth Code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- [On-behalf-of](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- [Client Credentials](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)

## Access on behalf of a user (authorization code flow)
Reference: [Get access to the Microsoft Graph on behalf of a user](https://docs.microsoft.com/en-us/graph/auth-v2-user)

## Access without a user (client credentials flow)
Reference: [Get access to the Microsoft Graph without a user](https://docs.microsoft.com/en-us/graph/auth-v2-service)

<Classification label="public" />
