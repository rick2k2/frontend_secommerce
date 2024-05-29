import React from "react";
import "./App.css";
import Header from "./component/Header";
import Contactfooter from "./component/Contactfooter";
import Footer from "./component/Footer";
import Men from "./component/Men";
import Women from "./component/Women";
import Kid from "./component/Kid";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Payment from "./component/Payment";
import Cart from "./component/Cart";
import SingleProduct from "./component/SingleProduct";
import PageNotFound from "./component/PageNotFound.js";
import Shop from "./component/Shop.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/womens" element={<Women />} />
        <Route path="/kids" element={<Kid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Contactfooter />
      <Footer />
    </div>
  );
}

export default App;
