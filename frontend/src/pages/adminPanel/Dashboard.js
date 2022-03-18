import React from "react";
import Sidebar from "../../components/adminPanel/Sidebar";
import DashboardComponent from "../../components/adminPanel/Dashboard";

const Dashboard = () => {
  return (
    <Sidebar>
      <DashboardComponent />
    </Sidebar>
  );
};

export default Dashboard;
