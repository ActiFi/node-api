
const apiInvokePromise = require('./invokePromise');

module.exports = function(path, params, tenant) {
  // Mock user
  let user = {
    tenant: tenant,
    roles: ['admin', 'manager', 'user'],
  };

  // if we got a user INSTEAD of a tenant string... use that instead.
  if(tenant && tenant.tenant && tenant.roles)
    user = tenant;

  return apiInvokePromise(path, params, user);
};