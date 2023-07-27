import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          User Language App
        </a>

        <div className="ms-auto">
          <button className="btn btn-outline-success">Add New User</button>
          <button className="btn btn-outline-success">Add New Language</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
