import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          User Language App
        </a>

        <div className="ms-auto">
          <button
            className="btn btn-outline-success"
            onClick={() => props.setShowUserForm(true)}
          >
            Add New User
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => props.setShowLanguageForm(true)}
          >
            Manage Language
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
