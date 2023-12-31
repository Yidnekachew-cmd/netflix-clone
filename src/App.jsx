import { useState } from 'react'
// import './App.css'
import Row from './components/Row'
import requests from './requests'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
function App() {

  return (
      <div className='bg-[#111]'>
        <NavBar />
        <Banner />
        <Row 
          title='NETFLIX ORIGINALS' 
          fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow 
        />
        <Row 
          title='Trending Now' 
          fetchUrl={requests.fetchTrending} 
        />
        <Row 
          title='Top Rated' 
          fetchUrl={requests.fetchTopRatedMovies} 
        />
        <Row 
          title='Action Movies' 
          fetchUrl={requests.fetchActionMovies} 
        />
        <Row 
          title='Comedy Movies' 
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
          title='Horror Movies' 
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
          title='Romance Movies' 
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
          title='Documentaries' 
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
  )
    
}

export default App
