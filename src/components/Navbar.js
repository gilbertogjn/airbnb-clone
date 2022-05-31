import React from 'react'
import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <navbar>
            <img className='nav--logo' src={logo} alt='Airbnb Logo' />
        </navbar>
    )
}