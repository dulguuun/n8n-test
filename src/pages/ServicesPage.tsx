import React from "react";

const ServicesPage: React.FC = () => (
  <div style={{ padding: 32 }}>
    <h1>Services Page</h1>
    <p>These are our services.</p>
    <button onClick={() => window.history.back()} style={{ marginBottom: 16 }}>
      Back
    </button>
  </div>
);

export default ServicesPage;
