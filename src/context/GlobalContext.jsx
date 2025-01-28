import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const apiKey = '2a7e9b2ebf0e92e6caa20a527e067184'
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=matrix`

  const [movieList, setMovieList] = useState([])
  const [userTitle, setUserTitle] = useState('')


  const fetchData = () => {
    axios.get(apiUrl)
      .then(res => {
        setMovieList(res.data.results)
      })
      .catch(err => {
        console.log('Errore', err);
      })
  }

  const handleInput = (e) => {

    setUserTitle(e.target.value)
    console.log(userTitle)
  }

  function selectFlag(language) {
    if (language == 'en') {
      return 'https://flagsapi.com/US/flat/64.png'
    }
  }

  const value = {
    fetchData,
    handleInput,
    userTitle,
    setUserTitle,
    movieList,
    setMovieList,
    selectFlag
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }