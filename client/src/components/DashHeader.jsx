import { Card } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import useAuth from "../hooks/useAuth";
import Controls from "./controls/Controls";

const DashHeader = () => {
  const { isManager, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);
  const logoutButton = (
    <Controls.Button
      className="icon-button"
      text="Logout"
      onClick={sendLogout}
    />
  );
  const content = <Card>{logoutButton}</Card>;

  return content;
};

export default DashHeader;
