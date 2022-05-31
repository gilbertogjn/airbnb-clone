import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Card />
    </Fragment>
  )
}

export default App;