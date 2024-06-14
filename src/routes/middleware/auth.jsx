import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { setTitle } from "../../helpers/functions";

const AuthMiddleware = (props) => {
  if (!Cookies.get("_token")) {
    return <Navigate to="/login" />;
  }

  setTitle(props.title);
  return (
    <React.Fragment>
      <Suspense>{React.cloneElement(props.children)}</Suspense>
    </React.Fragment>
  );
};

export default AuthMiddleware;
