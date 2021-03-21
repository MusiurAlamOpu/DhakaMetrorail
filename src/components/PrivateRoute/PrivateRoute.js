import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [SignedInUser, setSignedInUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      SignedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/SignIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
