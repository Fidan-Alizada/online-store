import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../pages/Footer";
import DeliveryMethods from "../pages/DeliveryMethods";
import ProductDetail from "../pages/ProductDetail";

const Navigation = ({ initialRoute, setRoute }) => {
  const pages = {
    home: <Home setRoute={setRoute} />,
    about: <About />,
    footer: <Footer />,
    productDetail: <ProductDetail />,
    delivery: <DeliveryMethods />,
  };

 
  const page = pages[initialRoute] || pages.home;

  return page; //bunu sadece page yaza bilersen
};

export default Navigation;
