'use strict';

const GraphQLJSON = require('graphql-type-json');

const generateResolver = require('../utils/generateResolver');
const getTopicsResolver = require('./getTopicsResolver');
const createTopicResolver = require('./createTopicResolver');
const editTopicContentResolver = require('./editTopicContentResolver');
const userAuthResolver = require('./userAuthResolver');
const getTopicResolver = require('./getTopicResolver');
const getUser = require('../models/getUser');

const resolvers = {
  Query: {
    getTopic: generateResolver(getTopicResolver),
    getTopics: generateResolver(getTopicsResolver)
  },
  Mutation: {
    createTopic: generateResolver(createTopicResolver),
    editTopicContent: generateResolver(editTopicContentResolver),
    userAuth: generateResolver(userAuthResolver)
  },
  Topic: {
    user: generateResolver(async ({ obj, client }) => {
      return await getUser({ client, userId: obj.userId });
    })
  },
  JSON: GraphQLJSON
};

module.exports = resolvers;