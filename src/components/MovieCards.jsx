import { useGlobalContext } from "../context/GlobalContext";

const MovieCards = ({ movie }) => {

  const { selectFlag } = useGlobalContext()

  return (
    <>
      <div className="card">
        <div className="card-header">
          {movie.title}
        </div>
        <ul className="list-group list-group-flush">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={`${movie.title} backdrop`}
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