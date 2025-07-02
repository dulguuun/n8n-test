import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import ServicesPage from "./pages/ServicesPage";
import ProductPage from "./pages/ProductPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* <Route path="/logout" element={<LogoutPage />} /> */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  </Router>
);

export default App;
