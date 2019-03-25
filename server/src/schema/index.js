import { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server-koa';
import merge from 'lodash/merge';
import { typeDef as Times, resolvers as TimesResolvers } from './types/Times';

const Query = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    null: Boolean
  }
`;

const SchemaDefinition = gql`
  schema {
    query: Query
    mutation: Mutation
  }
`;

const resolvers = {};

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    Query,
    Times,
  ],
  resolvers: merge(
    resolvers,
      TimesResolvers,
  ),
});
