import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [title, setTitle] = useState('Hi 😀');

  let index = 0;
  useEffect(() => {
    const titles = ["It's Movie List", 'Welcome'];
    const changeTitle = () => {
      setTitle(titles[index % titles.length]);
      index++;
    };

    const intervalId = setInterval(changeTitle, 3000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch 😢</h1>;
  }

  return (
    <>
      <h1>{title}</h1>
      <ul>
        <h2>Movies</h2>
        {data.allMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}

        <h2>Tweets</h2>
        {data.allTweets.map((tweet) => (
          <li key={tweet.id}>{`${tweet.text} - ${tweet.author.fullName}`}</li>
        ))}
      </ul>
    </>
  );
}
