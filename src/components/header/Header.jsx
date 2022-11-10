import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="my-1">
          <Navbar.Brand to="/">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>Movies Info</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  className="nav-item"
                  to="/movies/popular"
                  style={{ textDecoration: "none" }}
                >
                  <span>Popular</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="nav-item"
                  to="/movies/top_rated"
                  style={{ textDecoration: "none" }}
                >
                  <span>Top Rated</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                  <span>Upcoming</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/search/movie" style={{ textDecoration: "none" }}>
                  <span>Search</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <span>About</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
