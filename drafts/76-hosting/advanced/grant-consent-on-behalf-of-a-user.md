# Grant consent on behalf of a user

## Abstract

In some organizations, end-users are not permitted to consent to permissions requested by an app like ours.
In this article, you'll learn how you can, as an administrator, grant consent to specific users on their behalf.

## What happens when consent is granted?

When a user grants consent on his or her own behalf, the following events occur:
- A service principal for the client application is created, if it doesn't already exist. A service principal is the instance of an application or a service in your Azure Active Directory (Azure AD) tenant. Access that's granted to the app or service is associated with this service principal object.
- For each API to which the application requires access, a delegated permission grant to that API is created for the permissions that are needed by the application, for access on behalf of the user. A delegated permission grant authorizes an application to access an API on behalf of a user, when that user has signed in.
- The user is assigned the client application. Assigning the application to the user ensures that the application is listed in the My Apps portal for that user, which allows them to review and revoke the access that has been granted on their behalf.

## Prerequisites

To grant consent to an application on behalf of one user, you need:
- A `Global Administrator` or `Privileged Administrator` role.
- [Microsoft Graph PowerShell SDK](https://docs.microsoft.com/en-us/graph/powershell/installation), that you can install using the `Install-Module Microsoft.Graph -Scope CurrentUser` PowerShell command.


## PowerShell script

This script has to be executed for each user on behalf of whom access will be granted. It could also easily be adapted to execute these operations in batch.

:::tip Note
Before you execute this script, retrieve the username or object ID for the user on whose behalf access will be granted from the Azure portal, and update the `$userUpnOrId` variable.
:::

```powershell
# -----------------------------------------------------------------------------
# Variables
# -----------------------------------------------------------------------------

# The user on behalf of whom access will be granted. Note: the app will be able to access the API on behalf of this user.
$userUpnOrId = "serviceaccount@example.com"
# The app client ID for which consent is being granted (This GUID is the nBold app client ID).
$clientAppId = "2a651f59-97ce-42bb-97d7-cf7a2af4b635"
# The API to which access will be granted (Microsoft Graph API) referenced by its ID.
$resourceAppId = "00000003-0000-0000-c000-000000000000"
# The permissions to grant.
$permissions = @("openid", "offline_access", "email", "profile", "User.ReadBasic.All", "Team.ReadBasic.All", "Channel.ReadBasic.All", "TeamSettings.Read.All", "TeamMember.Read.All", "ChannelMember.Read.All", "ChannelSettings.Read.All", "TeamsTab.Read.All")

# -----------------------------------------------------------------------------
# Step 0. Connect to Microsoft Graph PowerShell.
# -----------------------------------------------------------------------------

# We need User.ReadBasic.All to get
# users' IDs, Application.ReadWrite.All to list and create service principals, 
# DelegatedPermissionGrant.ReadWrite.All to create delegated permission grants, 
# and AppRoleAssignment.ReadWrite.All to assign an app role.
# WARNING: These are high-privilege permissions!
Connect-MgGraph -Scopes ("User.ReadBasic.All Application.ReadWrite.All " `
                        + "DelegatedPermissionGrant.ReadWrite.All " `
                        + "AppRoleAssignment.ReadWrite.All")

# -----------------------------------------------------------------------------
# Step 1. Check if a service principal exists for the client application. 
# -----------------------------------------------------------------------------

# If one does not exist, create it.
$clientSp = Get-MgServicePrincipal -Filter "appId eq '$($clientAppId)'"
if (-not $clientSp) {
   $clientSp = New-MgServicePrincipal -AppId $clientAppId
}

# -----------------------------------------------------------------------------
# Step 2. Create a delegated permission that grants the client app access to the
# -----------------------------------------------------------------------------

# API, on behalf of the user. (This example assumes that an existing delegated 
# permission grant does not already exist, in which case it would be necessary 
# to update the existing grant, rather than create a new one.)
$user = Get-MgUser -UserId $userUpnOrId
$resourceSp = Get-MgServicePrincipal -Filter "appId eq '$($resourceAppId)'"
$scopeToGrant = $permissions -join " "
$grant = New-MgOauth2PermissionGrant -ResourceId $resourceSp.Id `
                                     -Scope $scopeToGrant `
                                     -ClientId $clientSp.Id `
                                     -ConsentType "Principal" `
                                     -PrincipalId $user.Id

# -----------------------------------------------------------------------------
# Step 3. Assign the app to the user.
# -----------------------------------------------------------------------------

# This ensures that the user can sign in if assignment is required, and ensures that the app shows up under the user's My Apps.
if ($clientSp.AppRoles | ? { $_.AllowedMemberTypes -contains "User" }) {
    Write-Warning ("A default app role assignment cannot be created because the " `
                 + "client application exposes user-assignable app roles. You must " `
                 + "assign the user a specific app role for the app to be listed " `
                 + "in the user's My Apps access panel.")
} else {
    # The app role ID 00000000-0000-0000-0000-000000000000 is the default app role
    # indicating that the app is assigned to the user, but not for any specific 
    # app role.
    $assignment = New-MgServicePrincipalAppRoleAssignedTo `
          -ServicePrincipalId $clientSp.Id `
          -ResourceId $clientSp.Id `
          -PrincipalId $user.Id `
          -AppRoleId "00000000-0000-0000-0000-000000000000"
}
```
