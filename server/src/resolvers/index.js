'use strict';

const generateResolver = require('../utils/generateResolver');
const getTopicsResolver = require('./getTopicsResolver');
const createTopicResolver = require('./createTopicResolver');
const updateTopicResolver = require('./updateTopicResolver');
const userAuthResolver = require('./userAuthResolver');

const resolvers = {
  Query: {
    getTopics: generateResolver(getTopicsResolver)
  },
  Mutation: {
    createTopic: generateResolver(createTopicResolver),
    updateTopic: generateResolver(updateTopicResolver),
    userAuth: generateResolver(userAuthResolver)
  }
};

module.exports = resolvers;