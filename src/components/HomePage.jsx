import React from 'react';
import MovieCards from "./MovieCards";
import { useGlobalContext } from "../context/GlobalContext";

const HomePage = () => {
  const { movieList = [], tvList = [] } = useGlobalContext();

  return (
    <div className="container-movie">
      {movieList.length > 0 ? <h1>Movies</h1> : <h1>HomePage</h1>}
      <div className="row">
        {movieList.length > 0 && movieList.map(movie => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <MovieCards movie={movie} />
          </div>
        ))}
      </div>

      {tvList.length > 0 ? <h1>TV Shows</h1> : <h1>HomePage</h1>}
      <div className="row">
        {tvList.length > 0 && tvList.map(tv => (
          <div className="col-md-3 mb-4" key={tv.id}>
            <MovieCards movie={tv} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
