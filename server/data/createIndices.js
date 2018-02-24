const elasticsearch = require('elasticsearch');

const {
  TOPICS_INDEX,
  USER_INDEX
} = require('../src/utils/constants');

const client = new elasticsearch.Client({
  host: 'http://localhost:9200',
  log: 'trace'
});

async function createIndicies() {
  try {
    await client.indices.create({
      index: USER_INDEX,
      body: {
        mappings: {
          user: {
            properties: {
              email: {type: 'keyword'},
              name: {type: 'text'},
              imageUrl: {type: 'text', index: false},
              createdAt: {type: 'date'}
            }
          }
        }
      }
    });

    /*
    await client.indices.create({
      index: TOPICS_INDEX,
      body: {
        mappings: {
          event: {
            properties: {
              hostId: {type: 'keyword'},
              title: {type: 'text'},
              image: {type: 'text', index: false},
              tags: {type: 'keyword'},
              description: {type: 'text'},
              location: {type: 'geo_point'},
              address: {type: 'object'},
              locationDetails: {type: 'text'},
              eventTimestampStart: {type: 'date'},
              eventTimestampEnd: {type: 'date'},
              createdAt: {type: 'date'}
            }
          }
        }
      }
    });
    */
  }
  catch (error) {
    console.error(error);
  }
}

createIndicies();
