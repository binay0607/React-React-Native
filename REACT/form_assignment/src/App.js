import logo from "./logo.svg";
import { EmailIcon, PasswordIcon, PhoneIcon, UserIcon } from "./Icons/FabIcons";
import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SuccessPage from "./Pages/SuccessPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/success" element={<SuccessPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
