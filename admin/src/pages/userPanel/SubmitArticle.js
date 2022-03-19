import React from "react";
import Navigation from "../../components/userPanel/Navigation";
import SubmitArticle from "../../components/userPanel/SubmitArticle";
import Footer from "../../components/userPanel/Footer";

const SubmitArticleComponent = () => {
  return (
    <div>
      <Navigation />
      <SubmitArticle />
      <Footer />
    </div>
  );
};

export default SubmitArticleComponent;
