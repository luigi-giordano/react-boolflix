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
          <li className="list-group-item">{movie.original_title}</li>
          <li className="list-group-item">
            <img src={selectFlag(movie.original_language) || } alt="" />{/*<img src={movie.original_language == 'en' ? 'https://flagcdn.com/h40/gb-eng.png' : `https://flagsapi.com/${movie.original_language.toUpperCase()}/shiny/64.png`} alt={movie.original_language} />*/}</li>
          <li className="list-group-item">{movie.vote_average}</li>
        </ul>
      </div>
    </>
  )
}

export default MovieCards