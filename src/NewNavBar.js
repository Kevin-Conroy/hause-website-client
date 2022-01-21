import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";

function NewNavBar() {
  return (
    <div>
      <Navbar
        bg="NavBar"
        variant="dark"
        sticky="top"
        expand="lg"
        className="App"
      >
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="tourdates">Tour Dates</Nav.Link>
            <Nav.Link href="bio">Bio</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="listen">Listen</Nav.Link>
            <Nav.Link href="archive">Archive</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NewNavBar;
