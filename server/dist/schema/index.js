'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  type Query {\n    _empty: String\n  }\n\n  type Mutation {\n    null: Boolean\n  }\n'], ['\n  type Query {\n    _empty: String\n  }\n\n  type Mutation {\n    null: Boolean\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n'], ['\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n']);

var _graphqlTools = require('graphql-tools');

var _apolloServerKoa = require('apollo-server-koa');

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _Times = require('./types/Times');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Query = (0, _apolloServerKoa.gql)(_templateObject);

var SchemaDefinition = (0, _apolloServerKoa.gql)(_templateObject2);

var resolvers = {};

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [SchemaDefinition, Query, _Times.typeDef],
  resolvers: (0, _merge2.default)(resolvers, _Times.resolvers)
});