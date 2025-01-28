import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const apiKey = '2a7e9b2ebf0e92e6caa20a527e067184'
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`

  const [movieList, setMovieList] = useState([])
  const [userTitle, setUserTitle] = useState('')

  function selectFlag(language) {
    if (language == 'en') {
      return 'https://flagsapi.com/GB/flat/64.png'
    }
    if (language == 'ja') {
      return 'https://flagsapi.com/JP/shiny/64.png'
    }
    if (language == 'zh') {
      return 'https://flagsapi.com/CN/shiny/64.png'
    }
    if (language == 'da') {
      return 'https://flagsapi.com/DK/shiny/64.png'
    }
    if (language == 'ko') {
      return 'https://flagsapi.com/KR/shiny/64.png'
    }
    if (language == 'fa') {
      return 'https://flagsapi.com/IR/shiny/64.png'
    }
    if (language == 'hi') {
      return 'https://flagsapi.com/IN/shiny/64.png'
    }
  }

  const fetchData = () => {
    axios.get(apiUrl + userTitle)
      .then(res => {
        setMovieList(res.data.results)
      })
      .catch(err => {
        console.log('Errore', err);
      })
  }

  const handleInput = (e) => {

    setUserTitle(e.target.value)

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