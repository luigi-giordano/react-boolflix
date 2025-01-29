import { useState } from 'react';
import { useGlobalContext } from "../context/GlobalContext";

const MovieCards = ({ movie, tv }) => {
  const { languageFlag } = useGlobalContext();
  const [isHovered, setIsHovered] = useState(false);

  // Determina se è un film o una serie TV
  const item = movie || tv;

  // Se l'elemento non esiste, non renderizzarlo
  if (!item) return null;

  function getLanguageFlag() {
    return languageFlag(item?.original_language) ||
      `https://flagsapi.com/${item?.original_language?.toUpperCase()}/shiny/64.png`;
  }

  const rating = Math.ceil((item.vote_average || 0) / 2);

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

  // Usa un'immagine di placeholder se non c'è poster_path
  const placeholderImage = '/img.svg';
  const backgroundImage = item.poster_path
    ? `url(https://image.tmdb.org/t/p/w342${item.poster_path})`
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
          <img
            src={getLanguageFlag()}
            alt="Language flag"
            className="language-icon"
          />
          <div className="overlay-content">
            <h5 className="card-title">{item.title || item.name || 'N/A'}</h5>
            <p className="card-text">Rating: {renderStars(rating)}</p>
            <p className="card-text">{item.overview || 'N/A'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCards;
