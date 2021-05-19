import React from "react";

function Navebar() {
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
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                Portfolio
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navebar;
