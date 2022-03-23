import React from "react";
import Navigation from "../../components/userPanel/Navigation";
import Dashboard from "../../components/userPanel/Dashboard";
import Footer from "../../components/userPanel/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Home;
