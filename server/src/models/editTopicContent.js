'use strict';

const { TOPICS_INDEX } = require('../utils/constants');

async function editTopicContent({
  client, 
  topicId,
  newContent
}) {
  try {
    const res = await client.update({
      index: TOPICS_INDEX,
      type: 'topic',
      id: topicId,
      body: {
        doc: {
          content: newContent
        }
      }
    });

    if (res.created) {
      return Object.assign({}, event, {id: res._id, createdAt});
    }
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = editTopicContent;