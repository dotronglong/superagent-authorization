const assert = require('assert');
const Request = require('./request');
const { Basic, Bearer } = require('../index');

describe('SuperagentAuthorization', function () {
  describe('Basic', function () {
    it('should add authorization header for Basic Auth', function () {
      const request = new Request();
      const plugin = Basic('john', 'secret');
      plugin(request);
      assert.equal(request.get('Authorization'), 'Basic am9objpzZWNyZXQ=');
    });
  });
  
  describe('Bearer', function () {
    it('should add authorization header for Bearer Auth', function () {
      const request = new Request();
      const plugin = Bearer('1rivUkbXftQCba2M07vg5PtM8XQfizjH');
      plugin(request);
      assert.equal(request.get('Authorization'), 'Bearer 1rivUkbXftQCba2M07vg5PtM8XQfizjH');
    });
  });
});