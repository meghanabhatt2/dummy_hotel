import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dummy_Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
           
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rooms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Food
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Facility</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Gallery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Booking</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;