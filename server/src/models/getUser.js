'use strict';

const errors = require('elasticsearch').errors;

const { USER_INDEX } = require('../utils/constants');

async function getUser({ client, userId }) {
  try {
    const res = await client.get({
      index: USER_INDEX,
      type: 'user',
      id: userId
    });

    return Object.assign({}, res._source, {id: res._id});
  }
  catch (error) {
    if (error instanceof errors.NotFound) {
      return null;
    }
    else {
      console.error(error);
    }
  }
}

module.exports = getUser;