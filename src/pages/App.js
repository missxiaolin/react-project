import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from 'pages/home'
import Detail from 'pages/detail'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    )
  }
}

export default App
