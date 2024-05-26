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
    deliveryMethods: <DeliveryMethods />,
  };

 
  const page = pages[initialRoute] || pages.home;

  return <>{page}</>;
};

export default Navigation;
