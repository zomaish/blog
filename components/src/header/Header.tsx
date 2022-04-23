import React from 'react'
import { NavLink } from 'react-router-dom'

require('./Header.scss')

const Header = () => (
  <nav>
    <div className="component-header component-header-logo">Zaid Emeish</div>
    <ul>
      <li>
        <NavLink to="/">Blog</NavLink>
      </li>
    </ul>
    <div className="common-header-controls">
      <div>theme</div>
      <div><NavLink to="/login">Login</NavLink></div>
    </div>
  </nav>
)

export default Header
