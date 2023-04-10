import React from 'react'
import './welcome.css'
import logo from './logo.svg';
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bin Chat</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
        </div>
        
      </header>
    </div>
  )
}

export default Welcome