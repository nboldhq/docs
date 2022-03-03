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

import ApiClient from '../ApiClient';
import ApprovalTeamMember from './ApprovalTeamMember';

/**
 * The CatalogTemplateTemplateConfigurationApproval model module.
 * @module model/CatalogTemplateTemplateConfigurationApproval
 * @version 2.0.0
 */
class CatalogTemplateTemplateConfigurationApproval {
    /**
     * Constructs a new <code>CatalogTemplateTemplateConfigurationApproval</code>.
     * The template approval policy.
     * @alias module:model/CatalogTemplateTemplateConfigurationApproval
     */
    constructor() { 
        
        CatalogTemplateTemplateConfigurationApproval.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CatalogTemplateTemplateConfigurationApproval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogTemplateTemplateConfigurationApproval} obj Optional instance to populate.
     * @return {module:model/CatalogTemplateTemplateConfigurationApproval} The populated <code>CatalogTemplateTemplateConfigurationApproval</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogTemplateTemplateConfigurationApproval();

            if (data.hasOwnProperty('requireApproval')) {
                obj['requireApproval'] = ApiClient.convertToType(data['requireApproval'], 'String');
            }
            if (data.hasOwnProperty('approvalTeam')) {
                obj['approvalTeam'] = ApiClient.convertToType(data['approvalTeam'], [ApprovalTeamMember]);
            }
        }
        return obj;
    }


}

/**
 * Defines if the template requires an approval or not.
 * @member {String} requireApproval
 */
CatalogTemplateTemplateConfigurationApproval.prototype['requireApproval'] = undefined;

/**
 * Members of an approval team, as an array of ApprovalTeamMember. See [https://docs.nbold.co/api/reference/Models/ApprovalTeamMember](https://docs.nbold.co/api/reference/Models/ApprovalTeamMember) for more information.
 * @member {Array.<module:model/ApprovalTeamMember>} approvalTeam
 */
CatalogTemplateTemplateConfigurationApproval.prototype['approvalTeam'] = undefined;






export default CatalogTemplateTemplateConfigurationApproval;
