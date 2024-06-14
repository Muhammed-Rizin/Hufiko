import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const authRoutes = [
  {
    path: "/",
    component: <Dashboard />,
    title: "Dashboard",
  },
  {
    path: "*",
    component: <Navigate to={() => "/login"} />,
  },
];
export const nonAuthRoutes = [{ path: "/login", component: <Login />, title: "Login" }];
