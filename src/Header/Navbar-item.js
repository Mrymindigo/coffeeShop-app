import React from 'react'
import './Navbar-item.css'

export default function Navbar(props) {
  return (
      <li>
        <a href="#" className='navbar-item'>{props.value}</a>
      </li>
  

  )
}
