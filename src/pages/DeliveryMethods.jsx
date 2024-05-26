import React from "react";
import "./deliveryMethods.css";

const DeliveryMethods = () => {
  return (
    <div className="delivery-container">
      <h1>Delivery Methods</h1>
      <div className="delivery-methods">
        <div className="method">
          <img src="https://cdn-icons-png.flaticon.com/512/6213/6213198.png" alt="Standard Delivery" />
          <h3>Standard Delivery</h3>
          <p>Our standard delivery option is reliable and cost-effective. Estimated delivery time is 3-5 business days.</p>
        </div>
        <div className="method">
          <img src="https://img.freepik.com/premium-vector/express-delivery-icon-concept_7188-384.jpg" alt="Express Delivery" />
          <h3>Express Delivery</h3>
          <p>For urgent needs, choose our express delivery. Estimated delivery time is 1-2 business days.</p>
        </div>
        <div className="method">
          <img src="data:image/png;base64,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" alt="Overnight Delivery" />
          <h3>Overnight Delivery</h3>
          <p>Get your items by the next day with our overnight delivery option. Order must be placed before 3 PM.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethods;
