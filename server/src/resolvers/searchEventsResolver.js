'use strict';

const searchEvents = require('../models/searchEvents');

async function searchEventsResolver({ client, context, args: { offset, limit, query } }) {
  try {
    const events = await searchEvents({ 
      client, 
      userId: context.user.id, 
      query,
      offset: offset,
      limit: limit
    });

    return events;
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = searchEventsResolver;