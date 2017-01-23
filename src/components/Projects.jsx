import React from 'react'
import NavLink from './NavLink'

export default class Projects extends React.Component {
  render () {
    return (
      <div>
        <h2>Projects</h2>
        <ul>
          <li><NavLink to='/projects/number-guesser'>Number Guesser</NavLink></li>
          <li><NavLink to='/projects/game-time'>Game Time</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

Projects.propTypes = {
  children: React.PropTypes.node
}
