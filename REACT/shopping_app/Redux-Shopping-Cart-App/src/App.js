import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import ApiList from "./components/ApiList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  const isLoggedIn= useSelector(state=> state.auth.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/list' element={<ApiList/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
      