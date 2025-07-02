import React from "react";

const ContactPage: React.FC = () => (
  <div style={{ padding: 32 }}>
    <h1>Contact Page</h1>
    <p>Contact us at contact@example.com.</p>
    <button onClick={() => window.history.back()} style={{ marginBottom: 16 }}>
      Back
    </button>
  </div>
);

export default ContactPage;
