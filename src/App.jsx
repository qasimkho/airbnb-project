import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Card from '../Components/Card'
import data from './Data'
import './App.css'

function App() {

  const cards = data.map(item => 
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
    <div>
      <NavBar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
