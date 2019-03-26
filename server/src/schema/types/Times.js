import { gql } from 'apollo-server-koa';

export const typeDef = gql`
  type Times {
    username: String
    time: Int
  }

  extend type Query {
    getTime(username: String!): Times
  }

  extend type Mutation {
    setTime(username: String!, time: Int!): Times
  }
`;

export const resolvers = {
  Query: {
    getTime: async (root, { username }, { models }) => {
      return {
        time: models.times[username] || null,
        username,
      }
    },
  },
  Mutation: {
    setTime: async (root, { username, time }, { models }) => {
      models.times[username] = time;
      return {
        time: models.times[username],
        username,
      }
    },
  },
};
