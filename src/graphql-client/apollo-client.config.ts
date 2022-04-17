import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache({ addTypename: false }),
  headers: { Authorization: `bearer ${process.env.REACT_APP_AUTH_TOKEN}` },
});
