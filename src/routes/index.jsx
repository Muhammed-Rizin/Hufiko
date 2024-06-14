import React from "react";
import { Route, Routes } from "react-router-dom";

import NonAuthLayout from "../components/NonAuthLayout";
import AuthMiddleware from "./middleware/auth";

import { authRoutes, nonAuthRoutes } from "./allRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      {authRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<AuthMiddleware title={route.title}>{route.component}</AuthMiddleware>}
          isAuthProtected={true}
          exact
        ></Route>
      ))}
      {nonAuthRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<NonAuthLayout title={route.title}>{route.component}</NonAuthLayout>}
          isAuthProtected={false}
        ></Route>
      ))}
    </Routes>
  );
};

export default AllRoutes;
