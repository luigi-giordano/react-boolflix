import { useState } from 'react';
import { useGlobalContext } from "../context/GlobalContext";

const MovieCards = ({ movie, tv }) => {
  const { languageFlag } = useGlobalContext();
  const [isHovered, setIsHovered] = useState(false);

  function getLanguageFlag() {
    return (movie) ?
      (languageFlag(movie?.original_language) || `https://flagsapi.com/${movie?.original_language.toUpperCase()}/shiny/64.png`) :
      (languageFlag(tv?.original_language) || `https://flagsapi.com/${tv?.original_language.toUpperCase()}/shiny/64.png`);
  }

  const rating = movie ? Math.ceil((movie.vote_average || 0) / 2) : Math.ceil((tv.vote_average || 0) / 2);

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

  const placeholderImage = '/img.svg'; // Percorso relativo alla cartella public
  const backgroundImage = movie?.poster_path || tv?.poster_path
    ? `url(https://image.tmdb.org/t/p/w342${movie?.poster_path || tv?.poster_path})`
    : `url(${placeholderImage})`;

  return (
    <div className="result-card"
      style={{
        backgroundImage: backgroundImage,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="overlay">
          <div className="overlay-content">
            <h5 className="card-title">{movie?.title || tv?.original_title || 'N/A'}</h5>
            <p className="card-text">Rating: {renderStars(rating)}</p>
            <p className="card-text">{movie?.overview || tv?.overview || 'N/A'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCards;
