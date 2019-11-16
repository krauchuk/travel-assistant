import ApolloClient from 'apollo-boost';
import server from '../constants/serverUrl';

let client: ApolloClient<{}>;

const getApolloClient = (): ApolloClient<{}> => {
  if (client) return client;
  client = new ApolloClient({ uri: `${server}/graphql` });
  return client;
};

export default getApolloClient();
