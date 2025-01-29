import MovieCards from "./MovieCards"
import { useGlobalContext } from "../context/GlobalContext"

const HomePage = () => {

  const { movieList = [], tvList = [] } = useGlobalContext();

  return (

    <div className="container-movie">

      {movieList.length > 0 ? <h1>Movies</h1> : <h1>Movie</h1>}
      <div className="row d-flex">{movieList.length > 0 && (movieList.map(movie =>
        <MovieCards movie={movie} key={movie.id} />
      ))}
      </div>

      {tvList.length > 0 ? <h1>TV Shows</h1> : <h1>Tv Series</h1>}
      <div className="row d-flex">{tvList.length > 0 && (tvList.map(tv =>
        <MovieCards movie={tv} key={tv.id} />
      ))}
      </div>

    </div>
  )
}

export default HomePage;