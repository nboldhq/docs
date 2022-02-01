# PSOpenAPITools.PSOpenAPITools/Api.TeamsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Add-TeamMember**](TeamsApi.md#Add-TeamMember) | **POST** /teams/{teamId}/members | Add a team member
[**Invoke-ArchiveTeam**](TeamsApi.md#Invoke-ArchiveTeam) | **POST** /teams/{teamId}/archive | Archive a team
[**New-TeamChannel**](TeamsApi.md#New-TeamChannel) | **POST** /teams/{teamId}/channels | Create a new team channel
[**New-TeamChannelTab**](TeamsApi.md#New-TeamChannelTab) | **POST** /teams/{teamId}/channels/{channelId}/tabs | Create a new team channel tab
[**New-TeamProvisioningJob**](TeamsApi.md#New-TeamProvisioningJob) | **POST** /teams/provisioning | Create a new team based on a template
[**Invoke-DeleteTeam**](TeamsApi.md#Invoke-DeleteTeam) | **DELETE** /teams/{teamId} | Delete a team
[**Get-Team**](TeamsApi.md#Get-Team) | **GET** /teams/{teamId} | Get a team
[**Get-TeamChannelTabs**](TeamsApi.md#Get-TeamChannelTabs) | **GET** /teams/{teamId}/channels/{channelId}/tabs | Get team channel tabs
[**Get-TeamChannels**](TeamsApi.md#Get-TeamChannels) | **GET** /teams/{teamId}/channels | Get team channels
[**Get-TeamPrimaryChannel**](TeamsApi.md#Get-TeamPrimaryChannel) | **GET** /teams/{teamId}/channels/primary | Get the primary channel of a team
[**Invoke-UnarchiveTeam**](TeamsApi.md#Invoke-UnarchiveTeam) | **POST** /teams/{teamId}/unarchive | Unarchive a team
[**Update-Team**](TeamsApi.md#Update-Team) | **PATCH** /teams/{teamId} | Update a team


<a name="Add-TeamMember"></a>
# **Add-TeamMember**
> ApiError Add-TeamMember<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamMembershipPayload] <PSCustomObject><br>

Add a team member

Add a team member. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.
$TeamMembershipPayload = (Initialize-TeamMembershipPayload -User (Initialize-User_1 -Id "Id_example") -Role "Role_example") # TeamMembershipPayload | TeamMembershipPayload.

# Add a team member
try {
     $Result = Add-TeamMember -TeamId $TeamId -TeamMembershipPayload $TeamMembershipPayload
} catch {
    Write-Host ("Exception occured when calling Add-TeamMember: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 
 **TeamMembershipPayload** | [**TeamMembershipPayload**](TeamMembershipPayload.md)| TeamMembershipPayload. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**ApiError**](ApiError.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-ArchiveTeam"></a>
# **Invoke-ArchiveTeam**
> void Invoke-ArchiveTeam<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Body] <System.Nullable[SystemCollectionsHashtable]><br>

Archive a team

Archive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.
$Body = TODO # SystemCollectionsHashtable | In the request, you may optionally include the shouldSetSpoSiteReadOnlyForMembers parameter in a JSON body. This optional parameter defines whether to set permissions for team members to read-only on the SharePoint Online site associated with the team. Setting it to false or omitting the body altogether will result in this step being skipped. (optional)

# Archive a team
try {
     $Result = Invoke-ArchiveTeam -TeamId $TeamId -Body $Body
} catch {
    Write-Host ("Exception occured when calling Invoke-ArchiveTeam: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 
 **Body** | **SystemCollectionsHashtable**| In the request, you may optionally include the shouldSetSpoSiteReadOnlyForMembers parameter in a JSON body. This optional parameter defines whether to set permissions for team members to read-only on the SharePoint Online site associated with the team. Setting it to false or omitting the body altogether will result in this step being skipped. | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="New-TeamChannel"></a>
# **New-TeamChannel**
> TeamChannel New-TeamChannel<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Body] <SystemCollectionsHashtable><br>

Create a new team channel

Create a new team channel. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.
$Body = TODO # SystemCollectionsHashtable | A TeamChannelPayload object describing the channel to create.

# Create a new team channel
try {
     $Result = New-TeamChannel -TeamId $TeamId -Body $Body
} catch {
    Write-Host ("Exception occured when calling New-TeamChannel: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 
 **Body** | **SystemCollectionsHashtable**| A TeamChannelPayload object describing the channel to create. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**TeamChannel**](TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="New-TeamChannelTab"></a>
# **New-TeamChannelTab**
> TeamChannelTab New-TeamChannelTab<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChannelId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Body] <SystemCollectionsHashtable><br>

Create a new team channel tab

Create a new team channel tab. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.
$ChannelId = "ChannelId_example" # String | The team channel ID.
$Body = TODO # SystemCollectionsHashtable | A TeamChannelTabPayload object describing the tab to create.

# Create a new team channel tab
try {
     $Result = New-TeamChannelTab -TeamId $TeamId -ChannelId $ChannelId -Body $Body
} catch {
    Write-Host ("Exception occured when calling New-TeamChannelTab: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 
 **ChannelId** | **String**| The team channel ID. | 
 **Body** | **SystemCollectionsHashtable**| A TeamChannelTabPayload object describing the tab to create. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**TeamChannelTab**](TeamChannelTab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="New-TeamProvisioningJob"></a>
# **New-TeamProvisioningJob**
> Job New-TeamProvisioningJob<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamProvisioningRequest] <PSCustomObject><br>

Create a new team based on a template

Create a new team provisioning job. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamProvisioningRequest = (Initialize-TeamProvisioningRequest -Template (Initialize-TeamProvisioningRequest_template -Id "Id_example") -Team (Initialize-TeamProvisioningRequest_team -Name "Name_example" -Description "Description_example" -WelcomeMessage "WelcomeMessage_example" -Membership (Initialize-TeamProvisioningRequest_team_membership -Members @((Initialize-MemberUserIdentifier -Id "Id_example")) -Owners @((Initialize-OwnerUserIdentifier -Id "Id_example")))) -Metadata "TODO") # TeamProvisioningRequest | A TeamProvisioningRequest object describing the job to execute.

# Create a new team based on a template
try {
     $Result = New-TeamProvisioningJob -TeamProvisioningRequest $TeamProvisioningRequest
} catch {
    Write-Host ("Exception occured when calling New-TeamProvisioningJob: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamProvisioningRequest** | [**TeamProvisioningRequest**](TeamProvisioningRequest.md)| A TeamProvisioningRequest object describing the job to execute. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-DeleteTeam"></a>
# **Invoke-DeleteTeam**
> void Invoke-DeleteTeam<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>

Delete a team

Delete a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.

# Delete a team
try {
     $Result = Invoke-DeleteTeam -TeamId $TeamId
} catch {
    Write-Host ("Exception occured when calling Invoke-DeleteTeam: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-Team"></a>
# **Get-Team**
> Team Get-Team<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>

Get a team

Get detailed information about a team. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.

# Get a team
try {
     $Result = Get-Team -TeamId $TeamId
} catch {
    Write-Host ("Exception occured when calling Get-Team: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-TeamChannelTabs"></a>
# **Get-TeamChannelTabs**
> TeamChannelTab[] Get-TeamChannelTabs<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChannelId] <String><br>

Get team channel tabs

Get team channel tabs. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.
$ChannelId = "ChannelId_example" # String | The team channel ID.

# Get team channel tabs
try {
     $Result = Get-TeamChannelTabs -TeamId $TeamId -ChannelId $ChannelId
} catch {
    Write-Host ("Exception occured when calling Get-TeamChannelTabs: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 
 **ChannelId** | **String**| The team channel ID. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**TeamChannelTab[]**](TeamChannelTab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-TeamChannels"></a>
# **Get-TeamChannels**
> TeamChannel[] Get-TeamChannels<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>

Get team channels

Get team channels. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.

# Get team channels
try {
     $Result = Get-TeamChannels -TeamId $TeamId
} catch {
    Write-Host ("Exception occured when calling Get-TeamChannels: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**TeamChannel[]**](TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-TeamPrimaryChannel"></a>
# **Get-TeamPrimaryChannel**
> TeamChannel Get-TeamPrimaryChannel<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>

Get the primary channel of a team

Get the primary channel of a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.

# Get the primary channel of a team
try {
     $Result = Get-TeamPrimaryChannel -TeamId $TeamId
} catch {
    Write-Host ("Exception occured when calling Get-TeamPrimaryChannel: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**TeamChannel**](TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-UnarchiveTeam"></a>
# **Invoke-UnarchiveTeam**
> void Invoke-UnarchiveTeam<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>

Unarchive a team

Unarchive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.

# Unarchive a team
try {
     $Result = Invoke-UnarchiveTeam -TeamId $TeamId
} catch {
    Write-Host ("Exception occured when calling Invoke-UnarchiveTeam: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Update-Team"></a>
# **Update-Team**
> void Update-Team<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TeamId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Body] <SystemCollectionsHashtable><br>

Update a team

Update a team. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$TeamId = "TeamId_example" # String | The team ID.
$Body = TODO # SystemCollectionsHashtable | Supply a JSON representation of team object.

# Update a team
try {
     $Result = Update-Team -TeamId $TeamId -Body $Body
} catch {
    Write-Host ("Exception occured when calling Update-Team: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamId** | **String**| The team ID. | 
 **Body** | **SystemCollectionsHashtable**| Supply a JSON representation of team object. | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

