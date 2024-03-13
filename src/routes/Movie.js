import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      small_cover_image
      rating
      isLiked @client
    }
  }
`;

export default function Movie() {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const onClick = () => {};

  if (loading) {
    return <h1>Loading Movie...</h1>;
  }

  return (
    <div>
      {data.movie.title}
      <img src={data.movie.small_cover_image} alt="커버 이미지" />
      <div>rating: {data.movie.rating}</div>
      <button onClick={onClick}>{data.movie.isLike ? 'UnLike' : 'Like'}</button>
    </div>
  );
}
