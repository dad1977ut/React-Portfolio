import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navebar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <h1 className="col-10">Dameon Davis</h1>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nave-link active"
                    : "new-link"
                }
                style={{ color: "black" }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? "nave-link active"
                    : "new-link"
                }
                style={{ color: "black" }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nave-link active" : "new-link"
                }
                style={{ color: "black" }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navebar;
