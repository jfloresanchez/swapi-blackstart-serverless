'use strict';
const swapi = require('swapi-node');


module.exports.getSwapi = async (event, context, callback) => {
  const { page } = event.queryStringParameters
  const peoplesResult = await swapi
    .get(`https://swapi.dev/api/people/?page=${page}`)
    .then((result) => result);
  const response = {
    statusCode: 200,
    peoples: peoplesResult
  };

  return callback(null, response);
};

module.exports.getPeoples = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'getSwapi',
    }),
  };
  return callback(null, response);
};
