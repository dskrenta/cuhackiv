'use strict';

const getTopics = require('../models/getTopics');

async function getTopicsResolver({ client, context, args: { offset, limit } }) {
  try {
    const topics = await getTopics({ 
      client, 
      userId: context.user.id, 
      offset: offset,
      limit: limit
    });

    return topics;
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = getTopicsResolver;