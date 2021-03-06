/**
 * nBold API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://docs.nbold.co/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.2.3
 * Contact: support@nbold.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.nBoldApi);
  }
}(this, function(expect, nBoldApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new nBoldApi.TeamChannelTabTeamsApp();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TeamChannelTabTeamsApp', function() {
    it('should create an instance of TeamChannelTabTeamsApp', function() {
      // uncomment below and update the code to test TeamChannelTabTeamsApp
      //var instance = new nBoldApi.TeamChannelTabTeamsApp();
      //expect(instance).to.be.a(nBoldApi.TeamChannelTabTeamsApp);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new nBoldApi.TeamChannelTabTeamsApp();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new nBoldApi.TeamChannelTabTeamsApp();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new nBoldApi.TeamChannelTabTeamsApp();
      //expect(instance).to.be();
    });

    it('should have the property distributionMethod (base name: "distributionMethod")', function() {
      // uncomment below and update the code to test the property distributionMethod
      //var instance = new nBoldApi.TeamChannelTabTeamsApp();
      //expect(instance).to.be();
    });

  });

}));
