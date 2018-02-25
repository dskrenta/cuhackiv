'use strict';

const schema = `
  scalar JSON

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
    imageUrl: String!
    tags: [String]!
    content: JSON!
    createdAt: String!
  }

  input TopicInput {
    title: String!
    description: String!
    imageUrl: String!
    tags: [String]!
  }

  type Query {
    getTopic(topicId: ID!): Topic!
    getTopics(offset: Int, limit: Int): [Topic]!
  }

  type Mutation {
    userAuth(token: String!): UserAuth!
    createTopic(topic: TopicInput!): Topic!
    editTopicContent(newContent: JSON!): Topic!
  }
`;

module.exports = schema;