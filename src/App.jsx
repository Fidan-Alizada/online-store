
import React, { useState } from "react";
import Navigation from "./navigation";
import './App.css'; 
const App = () => {
  const [route, setRoute] = useState("home");
  console.log({route})

  return (
    <div className="app-container">
      <div className="button-container">
        <button onClick={() => setRoute("home")}>Home</button>
        <button onClick={() => setRoute("about")}>About us</button>
        <button onClick={() => setRoute("footer")}>Contact us</button>
        <button onClick={() => setRoute("delivery")}>Delivery Methods</button>
      </div>
      <Navigation initialRoute={route} setRoute={setRoute} />
    </div>
  );
};

export default App;