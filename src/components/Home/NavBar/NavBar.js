import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { UserContext } from "../../../App";

const NavBar = () => {
  const [SignedInUser, setSignedInUser] = useContext(UserContext);
  const { isSignedIn, photoURL, email, name } = SignedInUser;
  console.log(isSignedIn, photoURL, email);
  console.log("Nav: ", SignedInUser);
  const userImageUrl = SignedInUser.photoURL;
  const linkStyle = {
    margin: "0px 10px",
    color: "white",
    pointer: "hand",
    textDecoration: "none",
  };

  ///offline
  // SignedInUser.isSignedIn = true;
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
            {isSignedIn ? (
              photoURL === undefined ? (
                <div>{name}</div>
              ) : (
                <div>
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                    }}
                    src={photoURL}
                    alt=""
                  ></img>
                </div>
              )
            ) : (
              <div>
                <Link style={linkStyle} to="/SignIn" id="signin">
                  Sign In
                </Link>
                <Link style={linkStyle} to="/SignUp" id="signup">
                  Sign Up
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
