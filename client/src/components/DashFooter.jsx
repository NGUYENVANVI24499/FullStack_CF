import { Button } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/dash");
  let goHomeButton = null;
  if (pathname !== "/dash") {
    goHomeButton = (
      <Button type="primary" onClick={onGoHomeClicked}>
        Home
      </Button>
    );
  }

  return (
    <>
      {goHomeButton}
     
    </>
  );
};

export default DashFooter;
