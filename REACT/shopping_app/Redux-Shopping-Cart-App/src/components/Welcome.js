import React from 'react'
import { Link } from 'react-router-dom';
import './Welcome.css'
const Welcome=()=> {
  return (
    <div>
    <Link to='/list'>
        <button>click here to see the list</button>
    </Link>
    </div>
  )
}

export default Welcome;
