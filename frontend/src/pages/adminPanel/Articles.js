import React from "react";
import Sidebar from "../../components/adminPanel/Sidebar";
import ArticlesComponent from "../../components/adminPanel/Articles/Index";

const Articles = () => {
  return (
    <Sidebar>
      <ArticlesComponent />
    </Sidebar>
  );
};

export default Articles;
