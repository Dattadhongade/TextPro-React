import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode === "dark"
          ? "navbar-dark bg-dark navbar-dark-border"
          : "navbar-light bg-light navbar-light-border"
      }`}
    >
      <div className="container-fluid align-items-center">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        {/* MOBILE: Toggle (ALWAYS visible, BEFORE hamburger) */}
        <div className="d-flex align-items-center ms-auto d-lg-none">
          <div className="form-check form-switch mb-0">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={props.toggleMode}
              checked={props.mode === "dark"}
            />
          </div>
        </div>

        {/* MOBILE: Hamburger (after toggle) */}
        <button
          className="navbar-toggler ms-2 d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE MENU (links only) */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>

          {/* DESKTOP: Toggle on RIGHT (unchanged) */}
          <div className="d-none d-lg-flex align-items-center ms-auto">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={props.toggleMode}
                checked={props.mode === "dark"}
              />
              <label
                className="form-check-label ms-2"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
