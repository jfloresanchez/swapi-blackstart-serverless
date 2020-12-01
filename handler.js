'use strict';
const swapi = require('swapi-node');
const People = require('./models/entity/people');
const Peoples = require('./models/entity/peoples');
const pool = require('./database/config');


module.exports.getSwapiPeoples = async (event, context, callback) => {
  const { page } = event.queryStringParameters
  const peoples = new Peoples();
  const peoplesResult = await swapi
    .get(`https://swapi.dev/api/people/?page=${page}`)
    .then((result) => result);

  for (let i = 0; i < peoplesResult.results.length; i++) {
    peoples.addPeople(new People(peoplesResult.results[i]));
  }
  const response = {
    statusCode: 200,
    peoples: peoples.getPeoples()
  };

  return callback(null, response);
};

module.exports.getSwapiPeople = async (event, context, callback) => {
  const { id } = event.queryStringParameters
  const peopleResult = await swapi
    .getPerson(id)
    .then((result) => result);
  const people = new People(peopleResult);
  const response = {
    statusCode: 200,
    peoples: people
  };

  return callback(null, response);
};

// Get all peoples
module.exports.getApiPeoples = async (event, context, callback) => {
  const peoples = await pool.query('SELECT * FROM peoples');
  const response = {
    statusCode: 200,
    peoples: peoples
  };
  return callback(null, response);
};

// Get one people
module.exports.getApiPeople = async (event, context, callback) => {
  const { id } = event.queryStringParameters;
  const people = await pool.query('SELECT * FROM peoples WHERE id = ?', [id]);
  const response = {
    statusCode: 200,
    people: people
  };
  return callback(null, response);
};
