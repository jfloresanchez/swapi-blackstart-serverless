'use strict';
const swapi = require('swapi-node');


module.exports.getSwapiPeoples = async (event, context, callback) => {
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

module.exports.getSwapiPeople = async (event, context, callback) => {
  const { id } = event.queryStringParameters
  const peopleResult = await swapi
    .getPerson(id)
    .then((result) => result);
  const response = {
    statusCode: 200,
    peoples: peopleResult
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
