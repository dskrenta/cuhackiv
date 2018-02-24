'use strict';

const generateResolver = require('../utils/generateResolver');
const searchEventsResolver = require('./searchEventsResolver');
const createEventResolver = require('./createEventResolver');
const userAuthResolver = require('./userAuthResolver');

const resolvers = {
  Query: {
    searchEvents: generateResolver(searchEventsResolver)
  },
  Mutation: {
    createEvent: generateResolver(createEventResolver),
    userAuth: generateResolver(userAuthResolver)
  }
};

module.exports = resolvers;