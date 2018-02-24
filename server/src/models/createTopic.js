'use strict';

const getTimestamp = require('../utils/getTimestamp');
const { TOPICS_INDEX } = require('../utils/constants');

async function createTopic({
  client, 
  userId, 
  topic, 
  createdAt = getTimestamp()
}) {
  try {
    const res = await client.index({
      index: TOPICS_INDEX,
      type: 'topic',
      body: Object.assign({}, event, {userId: userId, createdAt})
    });

    if (res.created) {
      return Object.assign({}, event, {id: res._id, createdAt});
    }
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = createTopic;