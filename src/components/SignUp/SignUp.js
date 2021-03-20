import { Button } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

const SignUp = () => {
  return (
    <div id="SignUpMainDiv">
      <div id="SignUpTitle" style={{ textAlign: "center", fontSize: "40px" }}>
        Sign Up
      </div>
      <div>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Write alpha numeric Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Rewrite your Password" />
          </Form.Group>
          
          <Button
            style={{ width: "80%", margin: "2% 10%", borderRadius: "20px" }}
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <div style={{ textAlign: "center" }}>
            <p>
              Already have an account? <Link to="/SignIn">Sign In</Link>
            </p>
            <p>---------Moreover---------</p>
          </div>
        </Form>
      </div>
      <div className="SignWithOthersSite">
        <div style={{ width: "16%", marginLeft: "6%" }}>
          <FontAwesomeIcon
            style={{ fontSize: "30px", color: "#00c853" }}
            icon={faGoogle}
          />
        </div>
        <div style={{ width: "78%", textAlign: "center" }}>
          Sign Up with Google
        </div>
      </div>
      <div className="SignWithOthersSite">
        <div style={{ width: "16%", marginLeft: "6%" }}>
          <FontAwesomeIcon
            style={{ fontSize: "30px", color: "#2196f3" }}
            icon={faFacebook}
          />
        </div>
        <div style={{ width: "78%", textAlign: "center" }}>
          Sign up with Facebook
        </div>
      </div>
    </div>
  );
};

export default SignUp;
