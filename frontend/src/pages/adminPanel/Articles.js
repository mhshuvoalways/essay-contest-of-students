import React from "react";
import Sidebar from "../../components/adminPanel/Sidebar";
import Filter from "../../components/adminPanel/Articles/Filter";
import ArticlesComponent from "../../components/adminPanel/Articles/Articles";

const Articles = () => {
  return (
    <Sidebar>
      <Filter />
      <ArticlesComponent />
    </Sidebar>
  );
};

export default Articles;
