
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import RegisterPage from "@/components/RegisterPage";
import LoginPage from "@/components/LoginPage";
import ShopPage from "@/components/ShopPage";
import NewsPage from "@/components/NewsPage";
import ComingSoonPage from "@/components/ComingSoonPage";

const App = () => {
  return (
    <Router>
      <div className="game-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/ranking" element={<ComingSoonPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/downloads" element={<ComingSoonPage />} />
          <Route path="/shame" element={<ComingSoonPage />} />
          <Route path="/events" element={<ComingSoonPage />} />
          <Route path="/pass" element={<ComingSoonPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
