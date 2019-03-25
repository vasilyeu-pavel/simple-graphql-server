import { gql } from 'apollo-server-koa';

export const typeDef = gql`
  type Times {
    username: String
    date: String
  }

  extend type Query {
    getTime(username: String!): Times
  }

  extend type Mutation {
    setTime(username: String!, date: String!): Boolean
  }
`;

export const resolvers = {
  Query: {
    getTime: async (root, { username }, { models }) => {
      return { date: models.times[username] || null }
    },
  },
  Mutation: {
    setTime: async (root, { username, date }, { models }) => {
      models.times[username] = date;
      return true;
    },
  },
};
