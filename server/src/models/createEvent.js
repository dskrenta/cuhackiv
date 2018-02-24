'use strict';

const getTimestamp = require('../utils/getTimestamp');
const { EVENT_INDEX } = require('../utils/constants');

async function createEvent({
  client, 
  userId, 
  event, 
  createdAt = getTimestamp()
}) {
  try {
    const res = await client.index({
      index: EVENT_INDEX,
      type: 'event',
      body: Object.assign({}, event, {hostId: userId, createdAt})
    });

    if (res.created) {
      return Object.assign({}, event, {id: res._id, createdAt});
    }
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = createEvent;