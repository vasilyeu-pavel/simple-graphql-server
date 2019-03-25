import Koa from 'koa';
import cors from 'kcors';
import { ApolloServer } from 'apollo-server-koa';
import 'babel-polyfill';
import schema from './schema';
import models from './models';

const app = new Koa();

app.use(cors({
  credentials: true,
}));

const startServer = () => {
  const port = process.env.PORT;
  const server = new ApolloServer({
    schema,
    context: { models },
    introspection: true,
    playground: true,
  });
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === 'development') {
    app.listen({ port },
        async () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`));
  }
};

startServer();
