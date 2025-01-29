import { useGlobalContext } from "../context/GlobalContext";

const MovieCards = ({ movie }) => {

  const { selectFlag } = useGlobalContext()

  return (
    <>
      <div className="main-card">
        <div className="card-title">
          {movie.title}
        </div>
        <ul className="list-group list-group-flush">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`${movie.title} poster`}
            style={{ width: '100%' }}
          />
          <li className="list-group-item">{movie.title}</li>
          <li className="list-group-item">{movie.original_title}</li>
          <li className="list-group-item">
            <img src={selectFlag(movie.original_language)} alt="Language flag" />
          </li>
          <li className="list-group-item">{movie.vote_average}</li>
        </ul>
      </div>
    </>
  )
}

export default MovieCards