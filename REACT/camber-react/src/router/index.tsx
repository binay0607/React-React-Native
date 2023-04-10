import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import App from "../App";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default function RouterComponent() {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
}
