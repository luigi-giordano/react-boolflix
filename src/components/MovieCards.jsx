import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";

const MovieCards = ({ movie, tv }) => {
  const { languageFlag } = useGlobalContext();
  const [isHovered, setIsHovered] = useState(false);

  function getLanguageFlag() {
    return (movie) ?
      (languageFlag(movie?.original_language) || `https://flagsapi.com/${movie?.original_language.toUpperCase()}/shiny/64.png`) :
      (languageFlag(tv?.original_language) || `https://flagsapi.com/${tv?.original_language.toUpperCase()}/shiny/64.png`);
  }

  // Trasforma il voto da 1-10 in un voto da 1-5, arrotondando sempre per eccesso
  const rating = movie ? Math.ceil((movie.vote_average || 0) / 2) : Math.ceil((tv.vote_average || 0) / 2);

  // Funzione per generare le stelle piene e vuote
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let i = rating; i < 5; i++) {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="results-container">

      <div
        className="result-card"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie?.poster_path || tv?.poster_path})`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="overlay">
            <h5 className="card-title">{movie?.title || tv?.original_title || 'N/A'}</h5>
            <p className="card-text">Rating: {movie?.vote_average || tv?.vote_average || 'N/A'}</p>
            <p className="card-text">{movie?.overview || tv?.overview || 'N/A'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCards;
