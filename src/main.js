import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'font-awesome/css/font-awesome.css'
import './index.scss'

// 使用viewport 或者使用 lib-flexible(响应式布局)
import 'lib-flexible' // eslint-disable-line

// Home
import App from 'pages/App.js' // eslint-disable-line

class Main extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app'),
)
