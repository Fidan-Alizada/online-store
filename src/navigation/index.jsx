
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../pages/Footer";
import DeliveryMethods from "../pages/DeliveryMethods";
import Products from "../components/Products";

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
      default:
        return <Home setRoute={setRoute} />;
    }
  };

  return <>{renderComponent()}</>;
};

export default Navigation;
