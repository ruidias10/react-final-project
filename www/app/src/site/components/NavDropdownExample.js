import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavDropdownExample extends React.Component {

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" className="bgDark">
      <Navbar.Brand className="colorRed" href="#home"><b>App</b></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">New</Nav.Link>
        <Nav.Link href="#features">Popular</Nav.Link>
        <Nav.Link href="#pricing">Genres</Nav.Link>
        <Nav.Link href="#pricing">A-Z</Nav.Link>
      </Nav>
      <Nav inline>
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav>

    </Navbar>

    );
  }
}

export default NavDropdownExample;