import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://national-ferret-63.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "8lQX3qi0GhNljgp0yl75K0gCm3eS0jJt4tr72vwLoh6Xnl3lmxSOA5oLtuFTxhNH",
  },
});

export default client;
