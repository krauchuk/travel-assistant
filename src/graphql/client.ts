import ApolloClient from 'apollo-boost';
import server from '../constants/serverUrl';

export default new ApolloClient({ uri: `${server}/graphql` });
