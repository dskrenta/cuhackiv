'use strict';
const jwt = require('jwt-simple');

const { JWT_SECRET } = require('../utils/constants');

function getPayload(token) {
  try {
    return jwt.decode(token, JWT_SECRET);
  }
  catch (error) {
    return null;
  }
}

module.exports = getPayload;