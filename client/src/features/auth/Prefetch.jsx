import { store } from "../../app/store";


import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { usersApiSlice } from "../users/userApiSlice";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      usersApiSlice.util.prefetch("getUsers", "usersList", { force: true })
    );
  }, []);

  return <Outlet />;
};
export default Prefetch;
