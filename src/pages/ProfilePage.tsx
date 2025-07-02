import React from "react";

const ProfilePage: React.FC = () => (
  <div style={{ padding: 32 }}>
    <h1>Profile Page</h1>
    <p>This is your profile.</p>
    <button onClick={() => window.history.back()} style={{ marginBottom: 16 }}>
      Back
    </button>
  </div>
);

export default ProfilePage;
