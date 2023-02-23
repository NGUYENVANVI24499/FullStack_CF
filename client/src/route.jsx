import { createBrowserRouter } from "react-router-dom";
import DashLayout from "./components/DashLayout";
import Layout from "./components/Layout";
import Login from "./features/auth/Login";
import Public from "./components/Public";
import Welcome from "./features/auth/Welcome";
import NotesLists from "./features/notes/NotesLists";
import UserList from "./features/users/UserList";
import { AuthLayout } from "./features/auth/AuthLayout";
import Signup from "./features/auth/Signup";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import Prefetch from "./features/auth/Prefetch";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Public /> },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
      {
        element: <PersistLogin />,
        children: [
          {
            element: <RequireAuth allowedRoles={[...Object.values(ROLES)]} />,
            children: [
              {
                element: <Prefetch />,
                children: [
                  {
                    path: "dash",
                    element: <DashLayout />,
                    children: [
                      {
                        index: true,
                        element: <Welcome />,
                      },
                      {
                        path: "notes",
                        element: <NotesLists />,
                      },
                      {
                        path: "users",
                        element: <UserList />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
