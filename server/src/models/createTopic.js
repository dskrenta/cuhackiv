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
      body: Object.assign({}, topic, {userId: userId, createdAt})
    });

    if (res.result === 'created') {
      return Object.assign({}, topic, {id: res._id, createdAt});
    }
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = createTopic;