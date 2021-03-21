import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App.js";

// firebase.initializeApp(firebaseConfig);

library.add(fab, faCheckSquare, faCoffee);

const SignUp = () => {
  const [SignedInUser, setSignedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
  });
  console.log("signUp: ", SignedInUser);
  const handleChange = (event) => {
    // console.log(event.target.name, ": ", event.target.value);
    let isFormedValid = true;
    if (event.target.name === "name") {
      isFormedValid = true;
    }
    if (event.target.name === "email") {
      isFormedValid = /\S+@\S+\.\S+/.test(event.target.value);
      if (!isFormedValid) {
        user.errorEmail = "'format: abc@abc.abc' is Missing";
      } else {
        user.email = "";
        user.errorEmail = "";
      }
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormedValid = isPasswordValid && passwordHasNumber;

      if (!isFormedValid) {
        user.password = "";
        user.errorPassword = "Alpha Numeric Password Missing";
      } else {
        user.errorPassword = "";
      }
    }
    if (event.target.name === "confirmPassword") {
      if (event.target.value === user.password) {
        isFormedValid = true;
        user.errorConfirmPassword = "";
      } else {
        isFormedValid = false;
        user.confirmPassword = "";
        user.errorConfirmPassword = "Password Mismatch";
      }
    }
    if (isFormedValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
    setSignedInUser(user);
    // console.log(SignedInUser);
  };

  console.log("My User: ", SignedInUser);
  const SignUpButtonHandler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(SignedInUser.email, SignedInUser.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("new User: ", user);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div id="SignUpMainDiv">
      <div id="SignUpTitle" style={{ textAlign: "center", fontSize: "40px" }}>
        Sign Up
      </div>
      <div>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onBlur={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Email address{" "}
              <span style={{ fontSize: "10px", color: "red" }}>
                {user.errorEmail}
              </span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              onBlur={handleChange}
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Password{" "}
              <span style={{ fontSize: "10px", color: "red" }}>
                {user.errorPassword}
              </span>
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              onBlur={handleChange}
              placeholder="Write alpha numeric Password"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Confirm Password{" "}
              <span style={{ fontSize: "10px", color: "red" }}>
                {user.errorConfirmPassword}
              </span>
            </Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              onBlur={handleChange}
              placeholder="Rewrite your Password"
              required
            />
          </Form.Group>
          {/* <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/SignIn"
          > */}
          <Button
            style={{ width: "80%", margin: "2% 10%", borderRadius: "20px" }}
            variant="contained"
            color="primary"
            onClick={SignUpButtonHandler}
          >
            Sign Up
          </Button>
          {/* </Link> */}
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
