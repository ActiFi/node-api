
var api = require('./lib/api');

// register
api.service = require('./lib/service');
// allow devs to call service functions
api.invoke = require('./lib/invoke');
api.invokePromise = require('./lib/invokePromise');
api.invokeInternal = require('./lib/invokeInternal');
// check to see if a path has an api def registered
api.find = require('./lib/find');
// make sure service function is secured
api.secure = require('./lib/secure');
// make sure service params are validated
api.validate = require('./lib/validate');
// a route for express
api.route = require('./lib/route');

module.exports = api;
