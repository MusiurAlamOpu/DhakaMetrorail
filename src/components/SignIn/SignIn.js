import { Button } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

const SignIn = () => {
  return (
    <div id="logInMainDiv">
        <div id="SignInTitle" style={{textAlign: 'center', fontSize: '40px'}}>Sign In</div>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div style={{display: 'flex',
                       flexWrap: 'wrap',
                       justifyContent: 'center',}}>
            <div style={{margin: '0% 10%'}}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remmember Me" />
              </Form.Group>
            </div>
            <div style={{margin: '0% 10%'}}>
              <Link to="/SignUp">Forgot Password!</Link>
            </div>
          </div>
          <Button
            style={{ width: "80%", margin: "2% 10%", borderRadius: "20px" }}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
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
        <div style={{ width: "78%", textAlign: "center" }}>
          Continue with Google
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
