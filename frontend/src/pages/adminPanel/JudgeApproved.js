import React from "react";
import Sidebar from "../../components/adminPanel/Sidebar";
import ApprovedJudge from "../../components/adminPanel/ApprovedJudge";

const judgeApprove = () => {
  return (
    <Sidebar>
      <ApprovedJudge />
    </Sidebar>
  );
};

export default judgeApprove;
