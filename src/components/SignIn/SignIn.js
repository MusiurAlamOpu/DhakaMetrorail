import { Button } from "@material-ui/core";
import { React, useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";

import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App.js";

firebase.initializeApp(firebaseConfig);

const SignIn = () => {
  //sign in by google
  var provider = new firebase.auth.GoogleAuthProvider();
  const [SignedInUser, setSignedInUser] = useContext(UserContext);
  console.log(SignedInUser);
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        console.log(user);
        const { displayName, email, photoURL } = user;
        const loggedInUser = {isSignedIn:true ,name: displayName, email, photoURL };

        console.log(loggedInUser);
        setSignedInUser(loggedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode, email, errorMessage, credential);
      });
  };
  //sign in by email pass
  console.log(SignedInUser);
  const [user, setUser] = useState({
    isSignedIn: false,
    email: "",
    password: "",
    errorEmail: "",
    errorPassword: "",
    errorMessage: ""
  });
  const handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    let isFormedValid = true;
    if (event.target.name === "email") {
      isFormedValid = /\S+@\S+\.\S+/.test(event.target.value);
      if (!isFormedValid) {
        user.email = "";
        user.errorEmail = "'format: abc@abc.abc' is Missing";
      } else {
        user.email = event.target.value;
        user.errorEmail = "";
      }
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormedValid = isPasswordValid && passwordHasNumber;
      console.log(isFormedValid);
      console.log(event.target.value);
      if (!isFormedValid) {
        user.password = "";
        user.errorPassword = "Wrong Password";
      } else {
        user.password = event.target.value;
        user.errorPassword = "";
      }
    }
    // if (isFormedValid) {
    //   const newUserInfo = { ...user };
    //   newUserInfo[event.target.name] = event.target.value;
    //   setUser(newUserInfo);
    // }
    // setSignedInUser({});
    setSignedInUser(user);
    console.log(SignedInUser);
  };

  console.log("pass: ", SignedInUser);



  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSignInButton = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(SignedInUser.email, SignedInUser.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        
        SignedInUser.isSignedIn = true;
        console.log("error: ", SignedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        user.errorMessage = error.message;
        console.log(errorCode);
      });
  };



  return (
    <div id="logInMainDiv">
      <div id="SignInTitle" style={{ textAlign: "center", fontSize: "40px" }}>
        Sign In
      </div>
      <div>
        <Form>
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
              placeholder="Password"
              required
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ margin: "0% 10%" }}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remmember Me" />
              </Form.Group>
            </div>
            <div style={{ margin: "0% 10%" }}>
              <Link to="/SignUp">Forgot Password!</Link>
            </div>
          </div>
          {/* <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Booking"
          > */}
            <Button
              style={{ width: "80%", margin: "2% 10%", borderRadius: "20px" }}
              variant="contained"
              color="primary"
              onClick={handleSignInButton}
            >
              Sign In
            </Button>
          {/* </Link> */}
          <div style={{ textAlign: "center" }}>
            <p>
              Don't have account? <Link to="/SignUp">Create new Account</Link>
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

        <div
          style={{ width: "78%", textAlign: "center" }}
          onClick={handleGoogleSignIn}
        >
          {/* <Link
            style={{
              textDecoration: "none",
              color: "Black",
              textAlign: "center",
            }}
            to="/Booking"
          > */}
            {" "}
            Continue with Google
          {/* </Link> */}
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
          Continue with Facebook
        </div>
      </div>
    </div>
  );
};

export default SignIn;
