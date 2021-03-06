/**
 * nBold API
 * Visit our [API documentation](https://docs.nbold.co/api/) for more information. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@nbold.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* MicrosoftTeamsChannels service.
* @module api/MicrosoftTeamsChannelsApi
* @version 2.0.0
*/
export default class MicrosoftTeamsChannelsApi {

    /**
    * Constructs a new MicrosoftTeamsChannelsApi. 
    * @alias module:api/MicrosoftTeamsChannelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTeamsChannelNamespaceMetadata operation.
     * @callback module:api/MicrosoftTeamsChannelsApi~getTeamsChannelNamespaceMetadataCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a channel metadata
     * Get metadata for a channel for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {String} channelId The channel ID.
     * @param {String} namespace The metadata namespace.
     * @param {module:api/MicrosoftTeamsChannelsApi~getTeamsChannelNamespaceMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getTeamsChannelNamespaceMetadata(teamId, channelId, namespace, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling getTeamsChannelNamespaceMetadata");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId,
        'namespace': namespace
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/teams/{teamId}/channels/{channelId}/metadata/{namespace}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMicrosoftTeamsChannelNamespaceMetadata operation.
     * @callback module:api/MicrosoftTeamsChannelsApi~setMicrosoftTeamsChannelNamespaceMetadataCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set channel metadata
     * Set channel metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {String} channelId The channel ID.
     * @param {String} namespace The metadata namespace.
     * @param {Object.<String, Object>} body Supply a JSON representation of your metadata.
     * @param {module:api/MicrosoftTeamsChannelsApi~setMicrosoftTeamsChannelNamespaceMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    setMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body, callback) {
      let postBody = body;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling setMicrosoftTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling setMicrosoftTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling setMicrosoftTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setMicrosoftTeamsChannelNamespaceMetadata");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId,
        'namespace': namespace
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/teams/{teamId}/channels/{channelId}/metadata/{namespace}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMicrosoftTeamsChannelNamespaceMetadata operation.
     * @callback module:api/MicrosoftTeamsChannelsApi~updateMicrosoftTeamsChannelNamespaceMetadataCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel metadata
     * Update a channel metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {String} channelId The channel ID.
     * @param {String} namespace The metadata namespace.
     * @param {Object.<String, Object>} body Supply a JSON representation of your metadata.
     * @param {module:api/MicrosoftTeamsChannelsApi~updateMicrosoftTeamsChannelNamespaceMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateMicrosoftTeamsChannelNamespaceMetadata(teamId, channelId, namespace, body, callback) {
      let postBody = body;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling updateMicrosoftTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling updateMicrosoftTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling updateMicrosoftTeamsChannelNamespaceMetadata");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMicrosoftTeamsChannelNamespaceMetadata");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId,
        'namespace': namespace
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/teams/{teamId}/channels/{channelId}/metadata/{namespace}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
