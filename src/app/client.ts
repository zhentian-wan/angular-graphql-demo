import ApolloClient, { createNetworkInterface } from 'apollo-client';

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/ciy8fym590bo50160eyg506yz'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}
