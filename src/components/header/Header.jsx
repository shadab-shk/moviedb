import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function header() {
  return (
    // <div className="header">
    //   <div className="headerLeft">
    //     <Link
    //       to="/"
    //       style={{ textDecoration: "none" }}
    //       className="header__icon"
    //     >
    //       <h1>Movies Info</h1>
    //     </Link>
    //     <Link to="/movies/popular" style={{ textDecoration: "none" }}>
    //       <span>Popular</span>
    //     </Link>
    //     <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
    //       <span>Top Rated</span>
    //     </Link>
    //     <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
    //       <span>Upcoming</span>
    //     </Link>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand header__icon"
          to="/"
          style={{ textDecoration: "none" }}
          // className"header__icon"
        >
          <h1>Movies Info</h1>
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-item"
                to="/movies/popular"
                style={{ textDecoration: "none" }}
              >
                <span>Popular</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                <span>Top Rated</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                <span>Upcoming</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search/movie" style={{ textDecoration: "none" }}>
                <span>Search</span>
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default header;
