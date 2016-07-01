
var api = require('./api');
var Promise = require('bluebird');

/**
 *  promise wrapper around api.invoke
 */
module.exports = function(path, params, user) {

  return new Promise(function(resolve, reject){

    api.invoke(path, params, user, function(err, result){
      if(err){
        reject(err);
      } else {
        resolve(result);
      }
    })

  })

};
