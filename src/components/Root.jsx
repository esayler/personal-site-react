import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Projects from './Projects'
import Project from './Project'
import About from './About'
import Home from './Home'

export default function Root () {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/projects' component={Projects}>
          <Route path='/projects/:projectName' component={Project} />
        </Route>
        <Route path='/about' component={About} />
      </Route>
    </Router>
  )
}
