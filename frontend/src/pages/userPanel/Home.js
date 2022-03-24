import React from "react";
import Navigation from "../../components/userPanel/Navigation";
import HomeComponent from "../../components/userPanel/home";
import Footer from "../../components/userPanel/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeComponent />
      <Footer />
    </div>
  );
};

export default Home;
