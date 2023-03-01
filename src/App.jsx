import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Card from '../Components/Card'
// import Katie from '../src/assets/Katie-zaferes.png'
import data from './Data'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const cardElement = data.map(item => 
    <Card 
      key={item.id}
      img = {item.coverImg}
      rating = {item.stats.rating}
      review = {item.stats.reviewCount}
      location = {item.location}
      price={item.price}
      title={item.title}
      openSpots={item.openSpots}
    />
)

  return (
    <div className="App">
      <NavBar />
      <Hero />
      {cardElement}








      {/* <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  )
}

export default App
