import React from "react";
import { Outlet } from "react-router-dom";
import DashFooter from "./DashFooter";
import DashHeader from "./DashHeader";

const DashLayout = () => {
  return (
    <>
    <div style={{padding:30}}>
      <DashHeader />
      <div>
        <Outlet />
      </div>
      <DashFooter />

    </div>
    </>
  );
};

export default DashLayout;
