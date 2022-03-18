import React from "react";
import Navigation from "../../components/userPanel/Navigation";
import Login from "../../components/userPanel/auth/Login";
import Footer from "../../components/userPanel/Footer";

const LoginComponent = () => {
  return (
    <div>
      <Navigation />
      <Login />
      <Footer/>
    </div>
  );
};

export default LoginComponent;
