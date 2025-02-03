// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet } from "react-router-dom";
import authLogo from "../assets/image 2.png";

const AuthLayout = () => {
  return (
    <div>
      <Link to="/">
        <img className="mt-5" src={authLogo} alt="" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
