
const apiInvokePromise = require('./invokePromise');

module.exports = function(path, params, tenant) {
  // Mock user
  let user = {
    tenant: tenant,
    roles: ['admin', 'manager', 'user'],
  };
  return apiInvokePromise(path, params, user);
};