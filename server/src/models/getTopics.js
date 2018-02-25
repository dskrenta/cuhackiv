'use strict';

const flattenResponse = require('../utils/flattenResponse');
const { TOPICS_INDEX } = require('../utils/constants');

async function getTopics({ client, offset, limit, query }) {
  try {
    const res = await client.search({
      index: TOPICS_INDEX,
      type: 'topic',
      from: offset,
      size: limit,
      body: {
        query: {
          match_all: {}
        }
      }
    });

    return flattenResponse({ res, array: true });
  }
  catch (error) {
    console.errror(error);
  }
}

module.exports = getTopics;