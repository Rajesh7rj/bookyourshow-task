import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="nav-section">
      <header className="">
        <nav className="navbar navbar-expand-lg bg-dark  ">
          <div className="container-fluid d-flex px-5">
            <Link to="/" className="navbar-brand text-white" href="/">
              <h3>BookYourShow</h3>
            </Link>
            <button
              className="navbar-toggler bg-white text-bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="d-lg-flex  ms-5 ">
                <Link to="/" className="nav-link fs-5 mx-3 active text-white text-center" aria-current="page" href="/">
                  Home
                </Link>
                <Link to="/about" className="nav-link fs-5 mx-3 active text-white text-center" href="/">
                  About
                </Link>
                <Link to="/contact" className="nav-link fs-5 mx-3 active text-white text-center" href="/">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
