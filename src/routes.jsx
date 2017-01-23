import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Project from './components/Project'
import Resume from './components/Resume'
import Blog from './components/Blog'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/projects' component={Projects}>
      <Route path='/projects/:projectName' component={Project} />
    </Route>
    <Route path='/about' component={About} />
    <Route path='/resume' component={Resume} />
    <Route path='/blog' component={Blog} />
  </Route>
)

export default routes
