# TeamsApi

All URIs are relative to *https://api.salestim.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTeamMember**](TeamsApi.md#addTeamMember) | **POST** /teams/{teamId}/members | Add a team member
[**archiveTeam**](TeamsApi.md#archiveTeam) | **POST** /teams/{teamId}/archive | Archive a team
[**createTeamChannel**](TeamsApi.md#createTeamChannel) | **POST** /teams/{teamId}/channels | Create a new team channel
[**createTeamChannelTab**](TeamsApi.md#createTeamChannelTab) | **POST** /teams/{teamId}/channels/{channelId}/tabs | Create a new team channel tab
[**createTeamProvisioningJob**](TeamsApi.md#createTeamProvisioningJob) | **POST** /teams/provisioning | Create a new team based on a template
[**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /teams/{teamId} | Delete a team
[**getTeam**](TeamsApi.md#getTeam) | **GET** /teams/{teamId} | Get a team
[**getTeamChannelTabs**](TeamsApi.md#getTeamChannelTabs) | **GET** /teams/{teamId}/channels/{channelId}/tabs | Get team channel tabs
[**getTeamChannels**](TeamsApi.md#getTeamChannels) | **GET** /teams/{teamId}/channels | Get team channels
[**getTeamMembers**](TeamsApi.md#getTeamMembers) | **GET** /teams/{teamId}/members | Get team members
[**getTeamPrimaryChannel**](TeamsApi.md#getTeamPrimaryChannel) | **GET** /teams/{teamId}/channels/primary | Get the primary channel of a team
[**unarchiveTeam**](TeamsApi.md#unarchiveTeam) | **POST** /teams/{teamId}/unarchive | Unarchive a team
[**updateTeam**](TeamsApi.md#updateTeam) | **PATCH** /teams/{teamId} | Update a team


<a name="addTeamMember"></a>
# **addTeamMember**
> ApiError addTeamMember(teamId, TeamMembershipPayload)

Add a team member

    Add a team member. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **TeamMembershipPayload** | [**TeamMembershipPayload**](../Models/TeamMembershipPayload.md)| TeamMembershipPayload. |

### Return type

[**ApiError**](../Models/ApiError.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="archiveTeam"></a>
# **archiveTeam**
> archiveTeam(teamId, body)

Archive a team

    Archive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **body** | **Object**| In the request, you may optionally include the shouldSetSpoSiteReadOnlyForMembers parameter in a JSON body. This optional parameter defines whether to set permissions for team members to read-only on the SharePoint Online site associated with the team. Setting it to false or omitting the body altogether will result in this step being skipped. | [optional]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTeamChannel"></a>
# **createTeamChannel**
> TeamChannel createTeamChannel(teamId, body)

Create a new team channel

    Create a new team channel. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **body** | **Object**| A TeamChannelPayload object describing the channel to create. |

### Return type

[**TeamChannel**](../Models/TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTeamChannelTab"></a>
# **createTeamChannelTab**
> TeamChannelTab createTeamChannelTab(teamId, channelId, body)

Create a new team channel tab

    Create a new team channel tab. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **channelId** | **String**| The team channel ID. | [default to null]
 **body** | **Object**| A TeamChannelTabPayload object describing the tab to create. |

### Return type

[**TeamChannelTab**](../Models/TeamChannelTab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTeamProvisioningJob"></a>
# **createTeamProvisioningJob**
> Job createTeamProvisioningJob(TeamProvisioningRequest)

Create a new team based on a template

    Create a new team provisioning job. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TeamProvisioningRequest** | [**TeamProvisioningRequest**](../Models/TeamProvisioningRequest.md)| A TeamProvisioningRequest object describing the job to execute. |

### Return type

[**Job**](../Models/Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTeam"></a>
# **deleteTeam**
> deleteTeam(teamId)

Delete a team

    Delete a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeam"></a>
# **getTeam**
> Team getTeam(teamId)

Get a team

    Get detailed information about a team. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

[**Team**](../Models/Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamChannelTabs"></a>
# **getTeamChannelTabs**
> List getTeamChannelTabs(teamId, channelId)

Get team channel tabs

    Get team channel tabs. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **channelId** | **String**| The team channel ID. | [default to null]

### Return type

[**List**](../Models/TeamChannelTab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamChannels"></a>
# **getTeamChannels**
> List getTeamChannels(teamId)

Get team channels

    Get team channels. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

[**List**](../Models/TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamMembers"></a>
# **getTeamMembers**
> List getTeamMembers(teamId)

Get team members

    Get team members.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

**List**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamPrimaryChannel"></a>
# **getTeamPrimaryChannel**
> TeamChannel getTeamPrimaryChannel(teamId)

Get the primary channel of a team

    Get the primary channel of a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

[**TeamChannel**](../Models/TeamChannel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="unarchiveTeam"></a>
# **unarchiveTeam**
> unarchiveTeam(teamId)

Unarchive a team

    Unarchive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTeam"></a>
# **updateTeam**
> updateTeam(teamId, body)

Update a team

    Update a team. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team ID. | [default to null]
 **body** | **Object**| Supply a JSON representation of team object. |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

