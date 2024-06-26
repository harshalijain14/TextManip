import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "150px" }}
            >
              Theme
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  className="theme"
                  id="dark"
                  style={{
                    width: "150px",
                    border: "1px solid grey",
                    margin: "1px",
                  }}
                  onClick={(t) => changeTheme(t.target.dark)}
                >
                  Dark
                </button>
              </li>
              <li>
                <button
                  className="theme"
                  id="light"
                  style={{
                    width: "150px",
                    border: "1px solid grey",
                    margin: "1px",
                  }}
                  onClick={(t) => changeTheme(t.target.light)}
                >
                  Light
                </button>
              </li>
              <li>
                <button
                  className="theme"
                  id="green"
                  style={{
                    width: "150px",
                    border: "1px solid grey",
                    margin: "1px",
                  }}
                  onClick={(t) => changeTheme(t.target.green)}
                >
                  Green
                </button>
              </li>
              <li>
                <button
                  className="theme"
                  id="blue"
                  style={{
                    width: "150px",
                    border: "1px solid grey",
                    margin: "1px",
                  }}
                  onClick={(t) => changeTheme(t.target.blue)}
                >
                  Blue
                </button>
              </li>
              <li>
                <button
                  className="theme"
                  id="red"
                  style={{
                    width: "150px",
                    border: "1px solid grey",
                    margin: "1px",
                  }}
                  onClick={(t) => changeTheme(t.target.red)}
                >
                  Red
                </button>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // aboutText: PropTypes.string.isRequired
};

// Navbar.defaultProps={             //for when no values are being passed at app.js
//   title: 'Set title here',
//   aboutText: 'Set about text',
// }
