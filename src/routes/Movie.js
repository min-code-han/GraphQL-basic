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

  const { data } = useQuery(GET_MOVIE, {
    variables: {
      // movieId: params.id,
      movieId: id,
    },
  });
  console.log('data', data);
  return <div>this is movie details</div>;
}
