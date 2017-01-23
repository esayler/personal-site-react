import React from 'react'
import NavBar from './NavBar'
import { IndexLink } from 'react-router'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <header className='header'>
          <IndexLink to='/'><h1 className='title'> Eric A. Sayler </h1></IndexLink>
          <h2 className='sub-title'> Front-End Web Developer </h2>
          <NavBar />
        </header>
        <section className='content'>
          {this.props.children}
        </section>
        <footer>
          <p> social buttons here </p>
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}
