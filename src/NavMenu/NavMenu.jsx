import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavMenu = () =>{

        return(
        <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Home</Navbar.Brand>
            <Nav className="Navbar">
              <Nav.Link href="#">Alimento</Nav.Link>
              <Nav.Link href="#">Higiene</Nav.Link>
              <Nav.Link href="#">Accesorios</Nav.Link>
              <Nav.Link href="#">Especiales</Nav.Link> 
            </Nav>
      </Navbar>
      </Container>)
};

export default NavMenu