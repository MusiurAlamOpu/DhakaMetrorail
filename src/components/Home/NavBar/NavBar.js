import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { UserContext } from "../../../App";

const NavBar = () => {
  const [SignedInUser, setSignedInUser] = useContext(UserContext);

  console.log("Nav: ", SignedInUser);
  const userImageUrl = SignedInUser.photoURL;
  const linkStyle = {
    margin: "0px 10px",
    color: "white",
    pointer: "hand",
    textDecoration: "none",
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <span style={{ color: "#2196f3" }}>Dhaka</span>MetroRail
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link style={linkStyle} to="/Home">
              Home
            </Link>
            <Link style={linkStyle} to="/Booking">
              Booking
            </Link>
            <Link style={linkStyle} to="/">
              Blog
            </Link>
            <Link style={linkStyle} to="/About">
              About
            </Link>
          </Nav>
          <Nav>
          {/* SignedInUser.email */}
            {(SignedInUser.isSignedIn || SignedInUser.email) && 
              <div style={{display: 'flex', width: "100%", margin: '4%', color: 'skyblue'}}>
                
                  <div><p>{SignedInUser.email}</p></div>
                 <div style={{width: '90%', marginLeft: '5%'}}><img
                    style={{ width: "60%", borderRadius: "30px" }}
                    src={userImageUrl}
                    alt=""
                  /></div>
              </div>
            }
            {
              (!SignedInUser.isSignedIn || SignedInUser.email) &&
              <div style={{width: "100%"}}>
              <Link style={linkStyle} to="/SignIn" id="signin">
                Sign In
              </Link>
              <Link style={linkStyle} to="/SignUp" id="signup">
                Sign Up
              </Link>
            </div>
            }
          </Nav>
          {/* <Nav>
            <Link style={linkStyle} to="/SignIn" id="signin">
              Sign In
            </Link>
            <Link style={linkStyle} to="/SignUp" id="signup">
              Sign Up
            </Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
