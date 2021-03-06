'use strict';

require('dotenv').config({path: `${__dirname}/../../.env`});
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');
const { makeExecutableSchema } = require('graphql-tools');
const { formatError } = require('apollo-errors');
const elasticsearch = require('elasticsearch');
const koaStatic = require('koa-static');

const schema = require('./schema');
const resolvers = require('./resolvers');
const getPayload = require('./utils/getPayload');

const PORT = 4000;
const app = new Koa();
const router = new Router();

const client = new elasticsearch.Client({
  host: 'https://search-octograde-fpz5otht3b3tbslivwa5xcdvle.us-west-1.es.amazonaws.com',
  log: 'trace'
});

app.use(koaBody());

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

router.post('/graphql', graphqlKoa((ctx) => {
  const user = getPayload(ctx.header.authorization);
  return {
    formatError,
    schema: executableSchema,
    context: {
      token: ctx.header.authorization,
      client: client,
      user: user
    }
  };
}));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes()).use(router.allowedMethods());
app.use(koaStatic('../web/build'));

app.listen(PORT);