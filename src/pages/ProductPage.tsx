import React from "react";

const ProductPage: React.FC = () => (
  <div style={{ padding: 32 }}>
    <h1>Product Page</h1>
    <p>Check out our products.</p>
    <button onClick={() => window.history.back()} style={{ marginBottom: 16 }}>
      Back
    </button>
  </div>
);

export default ProductPage;
