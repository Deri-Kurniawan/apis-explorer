import axios from 'axios';
import { useEffect, useState } from "react";
import APIs from '../apis';

const ImdbMovies = (title) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async (title = 'Avengers') => {
    try {
      let response = await axios.get(APIs.imdbMovies.base, {
        headers : {
          'Content-Type': 'application/json',
        },
        params: {
        apikey: APIs.imdbMovies.key,
        t: title,
      }
      });
      setMovies(response.data);
      setLoading(false);
      
    } catch (e) {
      console.log(e.message);
      setLoading(true);
    }
  }

  useEffect(() => {
    getMovies('Avengers');
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>{movies.Title}</h2>
      <img src={movies.Poster} alt=''></img>
      <h2>{movies.Year}</h2>
    </>
  );
}

export default ImdbMovies;