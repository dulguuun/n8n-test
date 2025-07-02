import React from "react";

const HelpPage: React.FC = () => (
  <div style={{ padding: 32 }}>
    <h1>Help Page</h1>
    <p>How can we assist you?</p>
    <button onClick={() => window.history.back()} style={{ marginBottom: 16 }}>
      Back
    </button>
  </div>
);

export default HelpPage;
