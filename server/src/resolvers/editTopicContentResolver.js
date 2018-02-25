'use strict';

const editTopicContent = require('../models/editTopicContent');
const getTopic = require('../models/getTopic');

async function getTopicsResolver({ client, context, args: { topicId, newContent } }) {
  try {
    await getTopics({ 
      client, 
      topicId, 
      newContent
    });

    const updatedTopic = await getTopic({
      client, 
      topicId
    });

    return updatedTopic;
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = getTopicsResolver;