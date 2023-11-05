import { useState } from 'react'
import './App.css'
import Row from './components/Row'
import requests from './requests'
function App() {

  return (
      <div>
        <h1 className='text-red text-4xl'>Netflix</h1>
        <Row 
          title='NETFLIX ORIGINALS' 
          fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow 
        />
        <Row 
          title='Trending Now' 
          fetchUrl={requests.fetchTrending} 
        />
      </div>
  )
    
}

export default App
