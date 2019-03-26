'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDef = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  type Times {\n    username: String\n    time: Int\n  }\n\n  extend type Query {\n    getTime(username: String!): Times\n  }\n\n  extend type Mutation {\n    setTime(username: String!, time: Int!): Times\n  }\n'], ['\n  type Times {\n    username: String\n    time: Int\n  }\n\n  extend type Query {\n    getTime(username: String!): Times\n  }\n\n  extend type Mutation {\n    setTime(username: String!, time: Int!): Times\n  }\n']);

var _apolloServerKoa = require('apollo-server-koa');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDef = exports.typeDef = (0, _apolloServerKoa.gql)(_templateObject);

var resolvers = exports.resolvers = {
  Query: {
    getTime: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(root, _ref2, _ref3) {
        var username = _ref2.username;
        var models = _ref3.models;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {
                  time: models.times[username] || null,
                  username: username
                });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function getTime(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    setTime: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(root, _ref5, _ref6) {
        var username = _ref5.username,
            time = _ref5.time;
        var models = _ref6.models;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                models.times[username] = time;
                return _context2.abrupt('return', {
                  time: models.times[username],
                  username: username
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function setTime(_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()
  }
};