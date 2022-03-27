import React from "react";
import Navigation from "../../components/userPanel/Navigation";
import AuthorShow from "../../components/userPanel/author";
import Footer from "../../components/userPanel/Footer";

const Author = () => {
  return (
    <div>
      <Navigation />
      <AuthorShow />
      <Footer />
    </div>
  );
};

export default Author;
