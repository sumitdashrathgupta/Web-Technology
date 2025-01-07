import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import NoMatchRoute from "./pages/NoMatchRoute";
import NavBar from "./Components/NavBar";
import NewProducts from "./Products/NewProducts";
import FeaturedProducts from "./Products/FeaturedProducts";
import UserDetails from "./Users/UserDetails";
import Users from "./Users/Users";
import OrderSummary from "./Components/OrderSummary";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<NewProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </>
  );
};

export default App;
