import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import { Fragment } from 'react';

function App() {
  const cards = data.map(info => {
    return (
      <Card 
        title={info.title}
        price={info.price}
        coverImg={info.coverImg}
        rating={info.stats.rating}
        reviewCount={info.stats.reviewCount}
        location={info.location}
      />
    )
  })
  return (
    <Fragment>
      <Navbar />
      <Hero />
      {cards}
    </Fragment>
  )
}

export default App;