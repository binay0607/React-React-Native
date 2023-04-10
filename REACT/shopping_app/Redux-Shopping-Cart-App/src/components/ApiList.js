import React from "react";
import Header2 from "./Header2";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import Stories from "./Stories";
import { listActions } from "../store/list_slice";

import { useEffect, useState } from "react";

export default function () {
   const [fetchingCompleted, setfetchingcomleted]= useState(false);
    const API= "https://hn.algolia.com/api/v1/search?query=react";
    const dispatch= useDispatch();
    const fetchAPI= async (url) =>{
        try {
            const res= await fetch(url);
            const data= await res.json();

            setfetchingcomleted(true);
            dispatch(listActions.addToList(data.hits));
            console.log("this is here" ,data.hits);
        } catch (error) {
            
            console.log(error);
        }   
    }
    useEffect(() => {
      fetchAPI(API);
    }, [])
    return (
    <React.Fragment>
      <div className="layout">
        <Header2/>
        {!fetchingCompleted && <h2>Loading...</h2>}
        {fetchingCompleted && <Stories/>}
        
        
      </div>
    </React.Fragment>
  )
}
