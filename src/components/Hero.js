import React from 'react'
import photo from '../images/photo-grid.png'

export default function Hero() {
    return (
        <section className='section--hero'>
            <img className='section--hero-img' src={photo} alt='Hero image' />
            <h2 className='section--title'>
                Online Experiences
            </h2>
            <h3 className='section--sub-title'>
                Join Unique interactive activities led by
                one-of-a-king hosts-all without leaving
                home.
            </h3>
        </section>
    )
}