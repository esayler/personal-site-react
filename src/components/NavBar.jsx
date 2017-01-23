import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'

export default class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      hello: 'world'
    }
  }
  render () {
    return (
      <div>
        <ul className='nav-bar' role='nav'>
          <li className='nav-item'>
            <IndexLink to='/' activeClassName='active'>Home</IndexLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/resume' activeClassName='active'>Resume</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/blog' activeClassName='active'>Blog</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

NavBar.propTypes = {
  children: React.PropTypes.node
}
