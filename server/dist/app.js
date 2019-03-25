'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _apolloServerKoa = require('apollo-server-koa');

require('babel-polyfill');

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = new _koa2.default();

app.use((0, _kcors2.default)({
  credentials: true
}));

var startServer = function startServer() {
  var port = process.env.PORT;
  var server = new _apolloServerKoa.ApolloServer({
    schema: _schema2.default,
    context: { models: _models2.default },
    introspection: true,
    playground: true
  });
  server.applyMiddleware({ app: app });

  if (process.env.NODE_ENV === 'development') {
    app.listen({ port: port }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', console.log('Server ready at http://localhost:' + port + server.graphqlPath));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  }
};

startServer();