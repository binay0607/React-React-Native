import logo from "./logo.svg";
import { EmailIcon, PasswordIcon, PhoneIcon, UserIcon } from "./Icons/FabIcons";
import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SuccessPage from "./Pages/SuccessPage";
import First from "./Screens/First";
import Second from "./Screens/Second";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/second" element={<Second />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
