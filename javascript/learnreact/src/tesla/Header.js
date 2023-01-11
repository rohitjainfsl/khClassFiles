import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <TopHead>
      <img src='tesla images/logo.svg'></img>
      <nav>
        <ul>
          <li><a href=''>Model 3</a></li>
          <li><a href=''>Model S</a></li>
          <li><a href=''>Model X</a></li>
          <li><a href=''>Model Y</a></li>
          <li><a href=''>Solar Roof</a></li>
          <li><a href=''>Solar Panels</a></li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li><a href=''>Shop</a></li>
          <li><a href=''>Account</a></li>
          <li><a href=''>Menu</a></li>
        </ul>
      </nav>
    </TopHead>
  )
}

const TopHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;


  nav ul{
    display: flex;
    list-style-type: none;


    a{
      text-decoration: none;
      color: #000;
      padding: 0 0.5rem;
    }


  }

`

export default Header