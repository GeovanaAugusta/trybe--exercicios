import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>Home
        <Link to='/login' >Login</Link>
      </div>
    )
  }
}

export default Home