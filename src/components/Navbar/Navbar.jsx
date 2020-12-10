import React, { Component } from "react";
import "./Navbar.css";
import Catalog from "../Catalog/catalog";
import About from "../about/about";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgb(44, 8, 25)" }}
      >
        <Link className="navbar-brand" href="/#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              type="button"
              className="btn btn-outline-success my-2 my-sm-0"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
