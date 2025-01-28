import MovieCards from "./MovieCards"
import { useGlobalContext } from "../context/GlobalContext"

const HomePage = () => {

  const { movieList } = useGlobalContext();

  return (
    <div className="container">
      {movieList.length > 0 ? <h1>Movies</h1> : <h1>HomePage</h1>}
      {movieList.length > 0 && (movieList.map(movie =>
        <MovieCards movie={movie} />
      ))
      }

    </div>
  )
}

export default HomePage;