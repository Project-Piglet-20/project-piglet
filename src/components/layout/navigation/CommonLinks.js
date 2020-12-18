import React from "react";
import { NavLink } from "react-router-dom";

const CommonLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/report">Report</NavLink>
      </li>
    </>
  );
};

export default CommonLinks;
