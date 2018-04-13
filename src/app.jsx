import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'
import './index.scss'

// 使用viewport 或者使用 lib-flexible(响应式布局)
import 'lib-flexible' // eslint-disable-line

class App extends Component {
  render() {
    return (
      <div className="App">
        app
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('app'),
)
