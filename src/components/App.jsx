import React from 'react'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      hello: 'world'
    }
  }
  render () {
    return (
      <div>Hello</div>
    )
  }
}