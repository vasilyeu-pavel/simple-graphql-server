import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BatchHttpLink } from 'apollo-link-batch-http';

import 'bootstrap/dist/css/bootstrap.min.css';

import FormApollo from './components/Form/Form.apollo';

import './App.css';

const uri = 'http://localhost:4000/graphql';

const httpLink = new BatchHttpLink({
  uri,
  headers: { batch: 'true' },
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const link = authLink.concat(httpLink);

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
  addTypename: true,
});

const client = new ApolloClient({
  link,
  cache: cache.restore(window.__APOLLO_STATE__), // eslint-disable-line no-underscore-dangle
  connectToDevTools: true,
  queryDeduplication: true,
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <div className="App">
              <FormApollo />
          </div>
        </ApolloProvider>
    );
  }
}

export default App;
