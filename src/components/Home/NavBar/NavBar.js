import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const linkStyle = {
        margin: '0px 10px',
        color: 'white',
        pointer: 'hand',
        textDecoration: 'none'
    }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><span style={{color:'#2196f3'}}>Dhaka</span>MetroRail</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link style={linkStyle} to="/Home">Home</Link>
            <Link style={linkStyle} to="/Booking">Booking</Link>
            <Link style={linkStyle} to="/">Blog</Link>
            <Link style={linkStyle} to="/About">About</Link>
          </Nav>
          <Nav>
            <Link style={linkStyle} to="/SignIn" id="signin">Sign In</Link>
            <Link style={linkStyle} to="/SignUp" id="signup">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
