import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Screens/Layout";
import LandingPage from "../Screens/LandingPage";
import Categories from "../Screens/Categories";
import Product from "../Screens/Product";
import NoPage from "../Screens/Nopage";
import Cart from "../Screens/Cart";
import EditAdd from "../Screens/EditAddress";
import GateWay from "../Screens/Gateway";
import SuccessPage from "../Screens/Success";
import OrdersPage from "../Screens/Orders";
import SignUpPage from "../Screens/SignUp";
import FavoritesPage from "../Screens/Favorites";
import ProfilePage from "../Screens/Profile";
import { Nav } from "./nav";
const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={Nav.Home} element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path={Nav.Cart} element={<Cart />} />
          <Route path={Nav.GateWay} element={<GateWay />} />
          <Route path={Nav.SignUp} element={<SignUpPage />} />
          <Route path={Nav.Profile} element={<ProfilePage />} />
          <Route path={Nav.EditAdd} element={<EditAdd />} />
          <Route path={Nav.Success} element={<SuccessPage />} />
          <Route path={Nav.Orders} element={<OrdersPage />} />
          <Route path={Nav.Favorites} element={<FavoritesPage />} />
          <Route path={Nav.Categories} element={<Categories />} />
          <Route path={Nav.Product} element={<Product />} />
        </Route>
        <Route path={Nav.Nopage} element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
