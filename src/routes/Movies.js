import { useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import { gql } from 'graphql-tag';

export default function Movies() {
  const client = useApolloClient();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              id
              title
            }
          }
        `,
      })
      .then((result) => setMovies(result.data.allMovies));
  }, [client]);

  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </div>
  );
}
