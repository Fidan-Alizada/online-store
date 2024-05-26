import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../pages/Footer";
import DeliveryMethods from "../pages/DeliveryMethods";
import ProductDetail from "../pages/ProductDetail";

const Navigation = ({ initialRoute, setRoute }) => {
  const renderComponent = () => {
    switch (initialRoute) {
      case "home":
        return <Home setRoute={setRoute} />;
      case "about":
        return <About />;
      case "footer":
        return <Footer />;
      case "delivery":
        return <DeliveryMethods />;
      case "product":
        return <ProductDetail setRoute={setRoute} />;
      default:
        return <Home setRoute={setRoute} />;
    }
  };

  return <>{renderComponent()}</>;
};

export default Navigation;
