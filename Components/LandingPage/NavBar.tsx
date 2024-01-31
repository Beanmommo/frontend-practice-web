import React from 'react'
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <a href='/' className='active'>Home</a>
            </li>
            <li>
                <a href='/'>Features</a>
            </li>
            <li>
                <a href='/'>Pricing</a>
            </li>
            <li>
                <a href='/'>Blog</a>
            </li>
            <li>
                <a href='/'>Logo</a>
            </li>
            <li>
                <a href='/'>Be</a>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBar