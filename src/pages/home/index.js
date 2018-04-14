import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/detail">detail</Link>
      </div>
    )
  }
}

export default Home
