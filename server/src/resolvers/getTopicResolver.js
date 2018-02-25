'use strict';

const getTopics = require('../models/getTopic');

async function getTopicResolver({ client, context, args: { topicId } }) {
  try {
    const topic = await getTopic({ 
      client, 
      topicId
    });

    return topic;
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = getTopicResolver;