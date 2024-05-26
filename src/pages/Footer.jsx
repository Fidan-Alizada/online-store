import React from "react";
import "./contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have a question about our
        products, pricing, or anything else, our team is ready to answer all
        your questions.
      </p>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" />
        </div>
        <button type="submit">Submit</button>
      </div>
      <div className="contact-info">
        <p>Email: <a href="mailto:info@test.com">info@test.com</a></p>
        <p>Phone: +994 (123)-456-78-90</p>
        <p>Address: Baku,Azerbaijan </p>
      </div>
    </div>
  );
};

export default Contact;
