import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import List from './List';

const Stories= () =>{
   const listItems= useSelector (state=> state.list.listItems);
    console.log("this is list item", listItems);
  return (
    <div>
    <h2>Hye there! here is a list for some awesome blogs: </h2>
    <ul>
        {listItems.map((item, index)=>(
            
          <li key={index}>
            <List id={index} name= {item.author} title={item.title} url= {item.url} />
          </li>
        ))}
        
      </ul>
    </div>
  )
}

export default Stories;
