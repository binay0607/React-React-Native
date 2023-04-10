
import React from 'react'
import ReactDOM from "react-dom/client";
import './App.css';
import Register from './Register';
import Login from './Login';
import HomePage from './HomePage';
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  const currentUser= useSelector(state=> state.auth.isLoggedIn);
  const RequiredAuth= ({children})=>{
    return currentUser ? (children) : <Navigate to='/login'/>
  }
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<RequiredAuth><HomePage /></RequiredAuth>} />
        
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;

