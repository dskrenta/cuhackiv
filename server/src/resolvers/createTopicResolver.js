'use strict';

const createEvent = require('../models/createTopic');

async function createTopicResolver({ client, context, args: { topic } }) {
  try {
    const createdEvent = await createEvent({
      client,
      userId: context.user.id,
      topic
    });

    return createdEvent;
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = createTopicResolver;