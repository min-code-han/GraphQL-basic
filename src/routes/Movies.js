import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  // 다른 데이터도 불러보기
  // console.log('allTweets', data.allTweets);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch 😢</h1>;
  }

  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}

      <h1>Tweets</h1>
      {data.allTweets.map((tweet) => (
        <li key={tweet.id}>{`${tweet.text} - ${tweet.author.fullName}`}</li>
      ))}
    </ul>
  );
}
