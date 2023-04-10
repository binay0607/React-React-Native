import React from 'react'
import stacks from '../data/stacks.json'
import { Link } from 'react-router-dom'
export default function Stacklist() {
  return (
    <div>
        {stacks.map(stack =>{
            return( 
                <Link id= {stack.length} to="/stacks">
                <h4 id= {stack.length}>{stack.title}</h4>
                </Link>
            )
        })}
    </div>
  )
}
