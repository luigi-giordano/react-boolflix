import React from 'react';
import MovieCards from "./MovieCards";
import { useGlobalContext } from "../context/GlobalContext";

const HomePage = () => {
  const { movieList = [], tvList = [] } = useGlobalContext();

  return (
    <div className="container">
      {movieList.length > 0 && (

        <>
          <h2>Movies</h2>
          <div className="row">
            {movieList.map(movie => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={movie.id}>
                <MovieCards movie={movie} />
              </div>
            ))}
          </div>
        </>

      )}
      {tvList.length > 0 && (

        <>
          <h2>TV Series</h2>
          <div className="row">
            {tvList.map(tv => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={tv.id}>
                <MovieCards tv={tv} />
              </div>
            ))}
          </div>
        </>

      )}
    </div>
  );
};

export default HomePage;
