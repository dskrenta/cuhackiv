'use strict';

const schema = `
  type User {
    id: ID!
    email: String!
    name: String!
    imageUrl: String!
    createdAt: String!
  }

  type UserAuth {
    user: User!
    token: String!
  }

  type Topic {
    id: ID!
    user: User!
    title: String!
    description: String!
    tags: [String]!
    content: JSON!
    createdAt: String!
  }

  type Query {
    getTopics(offset: Int, limit: Int): [Topic]!
  }

  type Mutation {
    userAuth(token: String!): UserAuth!
    createTopic(topic: TopicInput!): Topic!
    updateTopic(topic: TopicInput!): Topic!
  }
`;

module.exports = schema;