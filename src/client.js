import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  // 한번 불러온 데이터는 캐싱 되어서 해당페이지로 다시 진입시 더이상 loading 이 true 가 아님.
  cache: new InMemoryCache(),
});

export default client;
