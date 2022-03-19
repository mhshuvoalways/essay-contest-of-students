import React from "react";
import Navigation from "../../components/userPanel/Navigation";
import Register from "../../components/userPanel/auth/Register";
import Footer from "../../components/userPanel/Footer";

const RegisterComponent = () => {
  return (
    <div>
      <Navigation />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterComponent;
