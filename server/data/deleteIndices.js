const elasticsearch = require('elasticsearch');

const {
  TOPICS_INDEX,
  USER_INDEX
} = require('../src/utils/constants');

const client = new elasticsearch.Client({
  host: 'https://search-octograde-fpz5otht3b3tbslivwa5xcdvle.us-west-1.es.amazonaws.com',
  log: 'trace'
});

async function deleteIndices() {
  try {
    await client.indices.delete({
      index: USER_INDEX
    });

    await client.indices.delete({
      index: TOPICS_INDEX
    });
  }
  catch (error) {
    console.error(error);
  }
}

deleteIndices();
