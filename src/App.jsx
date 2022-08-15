import { useState } from 'react'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState()

  useEffect(() => {
    let randomLocation
    if (search === '') {
      randomLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      randomLocation = search
    }
    axios.get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [search])

  console.log(location)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target.search.value)
  }

  return (
    <div className="App">
      <header className='header-img'></header>
      <div className='header-text'><h1>Rick and Morty API</h1></div>
      <div className='main-content'>
        <div className='search-container'>
          <h2>Search a planet from 1 to 126</h2>
          <form onSubmit={handleSubmit} action="">
            <input id='search' type="text" maxLength="3" />
            <button>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </div>
              </div>
              <span>SEARCH</span>
            </button>
          </form>
        </div>
        <LocationInfo location={location} />
        <div className='cards-container'>
          {
            location?.residents.map(url => (
              <CardResident
                key={url}
                url={url}
              />
            ))
          }
        </div>
      </div>
      <footer>
        <div className='footer-information'>
          <h2>RICK AND MORTY API</h2>
          <div className='icons-container'>
            <a href="https://github.com/chrismendez11/rick-and-morty" target="_blank"><i className='bx bxl-github' ></i></a>
            <a href="https://twitter.com/MndzChristian" target="_blank"><i className='bx bxl-twitter' ></i></a>
            <a href="https://www.linkedin.com/in/christian-mendez-b8576822b/" target="_blank"><i className='bx bxl-linkedin-square' ></i></a>
            
          </div>
          <h3><i className='bx bx-code'></i> Developed by <a href="https://www.linkedin.com/in/christian-mendez-b8576822b/" target="_blank">Christian Mendez</a> 2022</h3>
        </div>
      </footer>
    </div>
  )
}

export default App
