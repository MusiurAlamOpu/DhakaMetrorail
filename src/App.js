import "./App.css";

import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About";
import NavBar from "./components/Home/NavBar/NavBar";
import Booking from "./components/Booking/Booking";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";


export const UserContext = createContext();

function App() {
  const [SignedInUser, setSignedInUser] = useState({});
  return (
    <UserContext.Provider value={[SignedInUser, setSignedInUser]}>
      {/* <p> Name: {SignedInUser.name}</p> */}
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <PrivateRoute path="/Booking">
          <Booking/>
        </PrivateRoute>
        {/* <Route path="/Booking">
          <Booking/>
        </Route> */}
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

// npm i --save @fortawesome/fontawesome-svg-core
// //   npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-brands-svg-icons
//   npm install --save @fortawesome/free-regular-svg-icons
//   npm install --save @fortawesome/react-fontawesome
