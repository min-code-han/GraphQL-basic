import { useQuery } from '@apollo/client';

import { gql } from 'graphql-tag';

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>could not fetch</h1>;
  }

  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
