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
        key={info.id}
        {...info}
      />
    )
  })
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
    </Fragment>
  )
}

export default App;