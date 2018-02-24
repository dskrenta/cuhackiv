'use strict';

const createEvent = require('../models/createEvent');

async function createEventResolver({ client, context, args: { event } }) {
  try {
    const createdEvent = await createEvent({
      client,
      userId: context.user.id,
      event
    });
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = createEventResolver;