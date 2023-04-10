import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./compopnents/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import store from "./store";
import NameContextProvider from "./store/nameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={{ name: "binay" }}>
    <NameContextProvider>
      <App />
    </NameContextProvider>
  </Provider>
);
