import { useGlobalContext } from "../context/GlobalContext";

const MovieCards = ({ movie, tv }) => {
  const { languageFlag } = useGlobalContext();

  function getLanguageFlag() {
    return (movie) ?
      (languageFlag(movie?.original_language) || `https://flagsapi.com/${movie?.original_language.toUpperCase()}/shiny/64.png`) :
      (languageFlag(tv?.original_language) || `https://flagsapi.com/${tv?.original_language.toUpperCase()}/shiny/64.png`);
  }

  // Trasforma il voto da 1-10 in un voto da 1-5, arrotondando sempre per eccesso
  const rating = movie ? Math.ceil((movie.vote_average || 0) / 2) : Math.ceil((tv.vote_average || 0) / 2);

  return (
    <div className="card h-100">
      <img
        src={movie ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : `https://image.tmdb.org/t/p/w342${tv.poster_path}`}
        className="card-img-top"
        alt={`${movie?.title || tv?.name} poster`}
      />
      <div className="card-body">
        <h5 className="card-title">{movie?.title || tv?.original_title || 'N/A'}</h5>
        <p className="card-text">{movie?.overview || tv?.overview || 'N/A'}</p>
        <p className="card-text">Rating: {rating} / 5</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          <img src={getLanguageFlag()} alt="Language flag" style={{ height: '20px', width: '20px' }} /> {movie?.original_language || tv?.original_language || 'N/A'}
        </small>
      </div>
    </div>
  );
};

export default MovieCards;
