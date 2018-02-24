'use strict';

const flattenResponse = require('../utils/flattenResponse');
const { EVENT_INDEX } = require('../utils/constants');

async function searchEvents({ client, offset, limit, query }) {
  try {
    const res = await client.search({
      index: EVENT_INDEX,
      type: 'event',
      from: offset,
      size: limit,
      q: `title:${query}`
    });
  }
  catch (error) {
    console.errror(error);
  }
}

module.exports = searchEvents;