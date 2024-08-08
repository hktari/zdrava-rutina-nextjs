"use client";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { tinaField } from "tinacms/dist/react";

function BootstrapNav({ header }) {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary opacity-75">
      <Container>
        <Navbar.Brand href="/">
          <h1 data-tina-field={tinaField(header, "name")} className="mb-1">
            {header.name}
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {header.nav.map((item, index) => (
              <Nav.Link key={`${item.label}-${index}`} href={item.href}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNav;
