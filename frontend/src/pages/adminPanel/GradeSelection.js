import React from "react";
import Sidebar from "../../components/adminPanel/Sidebar";
import Filter from "../../components/adminPanel/Grade/Filter";
import GradeSelection from "../../components/adminPanel/Grade/GradeSelection";

const Articles = () => {
  return (
    <Sidebar>
      <Filter />
      <GradeSelection />
    </Sidebar>
  );
};

export default Articles;
