// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Log.css"

const Log = () => {
  return (
    <div className="signin mt-5">
      <form className="in-form" action="">
        <h1 className="in-title">Login</h1>
        <div className="in-input">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />{" "}
          <button>Login in to your account</button>
        </div>
        <div className="dont">
          <p className="mb-0">Dont have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Log;
