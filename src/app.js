import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// import 'font-awesome/css/font-awesome.css'
import './index.scss'

import 'element-react'
import 'element-theme-default' // eslint-disable-line
// 使用viewport 或者使用 lib-flexible(响应式布局)
import 'lib-flexible' // eslint-disable-line

// Home
import Home from 'pages/home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
)
