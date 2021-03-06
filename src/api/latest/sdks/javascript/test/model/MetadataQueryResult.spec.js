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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NBoldApi);
  }
}(this, function(expect, NBoldApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NBoldApi.MetadataQueryResult();
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

  describe('MetadataQueryResult', function() {
    it('should create an instance of MetadataQueryResult', function() {
      // uncomment below and update the code to test MetadataQueryResult
      //var instance = new NBoldApi.MetadataQueryResult();
      //expect(instance).to.be.a(NBoldApi.MetadataQueryResult);
    });

    it('should have the property artefactType (base name: "artefact_type")', function() {
      // uncomment below and update the code to test the property artefactType
      //var instance = new NBoldApi.MetadataQueryResult();
      //expect(instance).to.be();
    });

    it('should have the property artefactId (base name: "artefact_id")', function() {
      // uncomment below and update the code to test the property artefactId
      //var instance = new NBoldApi.MetadataQueryResult();
      //expect(instance).to.be();
    });

  });

}));
