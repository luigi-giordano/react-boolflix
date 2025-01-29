import React from 'react';
import MovieCards from "./MovieCards";
import { useGlobalContext } from "../context/GlobalContext";

const HomePage = () => {
  const { movieList = [], tvList = [] } = useGlobalContext();

  // Verifica se non ci sono risultati per mostrare il messaggio di benvenuto
  const isEmpty = movieList.length === 0 && tvList.length === 0;

  return (
    <div className="container bg-dark text-light min-vh-100">
      {/* Mostra il messaggio di benvenuto SOLO se non ci sono film o serie TV */}
      {isEmpty ? (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
          <h2 className="fw-bold">Benvenuto su BOOLFLIX</h2>
          <p className="fs-5">Usa la barra di ricerca per trovare i tuoi film e serie TV preferiti.</p>
        </div>
      ) : (
        <>
          {movieList.length > 0 && (
            <>
              <h2 className="text-center">Movies</h2>
              <div className="row my-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 justify-content-center">
                {movieList.map(movie => (
                  <div className="col" key={movie.id}>
                    <MovieCards movie={movie} />
                  </div>
                ))}
              </div>
            </>
          )}

          {tvList.length > 0 && (
            <>
              <h2 className="text-center">TV Series</h2>
              <div className="row my-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 justify-content-center">
                {tvList.map(tv => (
                  <div className="col" key={tv.id}>
                    <MovieCards tv={tv} />
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
