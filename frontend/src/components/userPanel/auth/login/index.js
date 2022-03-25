import React from "react";
import LeftImg from "./LoginLeft";
import Login from "./Login";

const index = () => {
  return (
    <div className="flex gap-10 mt-12 max-w-7xl m-auto flex-wrap justify-center">
      <LeftImg />
      <Login />
    </div>
  );
};

export default index;
