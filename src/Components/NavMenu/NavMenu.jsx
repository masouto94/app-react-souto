import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

const NavMenu = (props) =>{


       

        return(
   
        
        
        <Navbar bg="light" expand="lg">
          
        
        <Navbar.Brand href="/">Home</Navbar.Brand>
        
            <Nav className="Navbar">
              {props.categorias.map((i) => <Nav.Link as={Link} to={`/categoria/${i}`}>{i}</Nav.Link>)
              }

              
            </Nav>
            <Nav.Item>{props.children}</Nav.Item>
      </Navbar>
        )   
};

export default NavMenu