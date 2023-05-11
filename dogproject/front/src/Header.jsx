import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>DOGS</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/breed">By Breed</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header