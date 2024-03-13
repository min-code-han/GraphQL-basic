import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Movie() {
  // const params = useParams();
  const { id } = useParams();

  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      // movieId: params.id,
      movieId: id,
    },
  });

  if (loading) {
    return <h1>Loading Movie...</h1>;
  }

  return <div>{data.movie.title}</div>;
}
