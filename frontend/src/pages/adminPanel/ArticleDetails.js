import React from "react";
import Sidebar from "../../components/adminPanel/Sidebar";
import ArticleDetails from "../../components/adminPanel/Articles/ArticleDetails";

const ArticleDetailPage = () => {
  return (
    <Sidebar>
      <ArticleDetails />
    </Sidebar>
  );
};

export default ArticleDetailPage;
