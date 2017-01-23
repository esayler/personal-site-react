import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      hello: 'world'
    }
  }
  render () {
    return (
      <div>
        <h1>Eric's Personal Site</h1>
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
        </ul>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}
