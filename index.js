const Base64 = require('js-base64').Base64;

const Basic = function(username, password) {
  return function (request) {
    const token = Base64.encode(username + ':' + password);
    request.set('Authorization', 'Basic ' + token);
  };
};

const Bearer = function(token) {
  return function (request) {
    request.set('Authorization', 'Bearer ' + token);
  };
};

module.exports = {
  Basic,
  Bearer
};