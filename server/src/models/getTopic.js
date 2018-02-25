'use strict';

const { TOPICS_INDEX } = require('../utils/constants');

async function getTopic({ client, topicId }) {
  try {
    const res = await client.get({
      index: TOPICS_INDEX,
      type: 'topic',
      id: topicId
    });

    return Object.assign({}, res._source, {id: topicId});
  }
  catch (error) {
    console.errror(error);
  }
}

module.exports = getTopic;