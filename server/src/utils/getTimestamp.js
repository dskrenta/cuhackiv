'use strict';

function getTimestamp(preset = null) {
  return preset ? new Date(preset) : new Date();
}

module.exports = getTimestamp;