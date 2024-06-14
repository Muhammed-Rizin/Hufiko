import PropTypes from "prop-types";
import React from "react";
import { setTitle } from "../helpers/functions";

const NonAuthLayout = (props) => {
  setTitle(props.title);

  return <React.Fragment>{props.children}</React.Fragment>;
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default NonAuthLayout;
