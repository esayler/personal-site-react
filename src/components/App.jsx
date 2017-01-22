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
        <ul role='nav'>
          <li>
            <IndexLink to='/' activeClassName='active'>Home</IndexLink>
          </li>

          <li>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
          </li>

          <li>
            <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
