import { useGlobalContext } from "../context/GlobalContext";

const MovieCards = ({ movie, tv }) => {

  const { languageFlag } = useGlobalContext()

  function getLanguageFlag() {

    return (movie) ?
      (languageFlag(movie?.original_language) || `https://flagsapi.com/${movie?.original_language.toUpperCase()}/shiny/64.png`) :
      (languageFlag(tv?.original_language) || `https://flagsapi.com/${tv?.original_language.toUpperCase()}/shiny/64.png`)

  }

  // Trasforma il voto da 1-10 in un voto da 1-5, arrotondando sempre per eccesso
  const rating = Math.ceil(movie.vote_average / 2);

  return (
    <>
      <div className="main-card">

        <ul className="list-group list-group-flush">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`${movie.title} poster`}
            style={{ width: '100%' }}
          />
          <li className="list-group-item">{movie?.title || tv?.original_title}</li>
          <li className="list-group-item">{movie?.original_title || tv?.original_name}</li>
          <li className="list-group-item">
            <img src={languageFlag(movie.original_language)} alt="Language flag" />
          </li>
          <li className="list-group-item">{movie?.vote_average || tv?.vote_average}</li>
          <p className="card-text">Rating: {rating} / 5</p>
        </ul>
      </div>
    </>
  )
}

export default MovieCards