import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import LandingPage from "./Pages/LandingPage";
import Categories from "./Pages/Categories";
import Product from "./Pages/Product";
import NoPage from "./Pages/NoPage";
import Cart from "./Pages/Cart";
import EditAdd from "./Pages/EditAdd";
import GateWay from "./Pages/GateWay";
import SuccessPage from "./Pages/SuccessPage";
import OrdersPage from "./Pages/OrdersPage";
import SignUpPage from "./Pages/SignUpPage";
import FavoritesPage from "./Pages/FavoritesPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="gateway" element={<GateWay />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/editAdd" element={<EditAdd />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="categories/:category" element={<Categories />} />
          <Route
            path="categories/:category/:model/:product"
            element={<Product />}
          />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
