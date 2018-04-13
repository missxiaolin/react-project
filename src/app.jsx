import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'
import './index.css'
import './index.scss'

// 使用viewport 或者使用 lib-flexible(响应式布局)
import 'lib-flexible'

ReactDOM.render(
  <div>
    <i className="fa fa-address-book"></i>
    <h1>Hello, world!</h1>
  </div>,
  document.getElementById('app')
);