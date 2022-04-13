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
* MicrosoftTeamsMessages service.
* @module api/MicrosoftTeamsMessagesApi
* @version 2.0.0
*/
export default class MicrosoftTeamsMessagesApi {

    /**
    * Constructs a new MicrosoftTeamsMessagesApi. 
    * @alias module:api/MicrosoftTeamsMessagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMicrosoftTeamsMessageNamespaceMetadata operation.
     * @callback module:api/MicrosoftTeamsMessagesApi~getMicrosoftTeamsMessageNamespaceMetadataCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a message metadata
     * Get metadata for a message for a specific namespace. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {String} channelId The channel ID.
     * @param {String} messageId The message ID.
     * @param {String} namespace The metadata namespace.
     * @param {module:api/MicrosoftTeamsMessagesApi~getMicrosoftTeamsMessageNamespaceMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling getMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling getMicrosoftTeamsMessageNamespaceMetadata");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId,
        'message_id': messageId,
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
        '/teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMicrosoftTeamsMessageNamespaceMetadata operation.
     * @callback module:api/MicrosoftTeamsMessagesApi~setMicrosoftTeamsMessageNamespaceMetadataCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set message metadata
     * Set message metadata for a specific namespace. N.B Using the POST method will replace all pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {String} channelId The channel ID.
     * @param {String} messageId The message ID.
     * @param {String} namespace The metadata namespace.
     * @param {Object.<String, Object>} body Supply a JSON representation of your metadata.
     * @param {module:api/MicrosoftTeamsMessagesApi~setMicrosoftTeamsMessageNamespaceMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    setMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, body, callback) {
      let postBody = body;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling setMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling setMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling setMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling setMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setMicrosoftTeamsMessageNamespaceMetadata");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId,
        'message_id': messageId,
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
        '/teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMicrosoftTeamsMessageNamespaceMetadata operation.
     * @callback module:api/MicrosoftTeamsMessagesApi~updateMicrosoftTeamsMessageNamespaceMetadataCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a message metadata
     * Update a message metadata for a specific namespace. N.B Using the PATCH method will merge supplied body with pre-existing metadata. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {String} channelId The channel ID.
     * @param {String} messageId The message ID.
     * @param {String} namespace The metadata namespace.
     * @param {Object.<String, Object>} body Supply a JSON representation of your metadata.
     * @param {module:api/MicrosoftTeamsMessagesApi~updateMicrosoftTeamsMessageNamespaceMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateMicrosoftTeamsMessageNamespaceMetadata(teamId, channelId, messageId, namespace, body, callback) {
      let postBody = body;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling updateMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling updateMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling updateMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling updateMicrosoftTeamsMessageNamespaceMetadata");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMicrosoftTeamsMessageNamespaceMetadata");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId,
        'message_id': messageId,
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
        '/teams/{teamId}/channels/{channelId}/messages/{message-id}/metadata/{namespace}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}