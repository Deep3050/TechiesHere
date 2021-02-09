import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Logo from "../logo512.png";
// import "materialize-css/dist/css/materialize.min.css";
import "../Header.css";
import Home from "./Home";
import Projects from "./Projects";
import ContactUs from "./ContactUs";

export default function Header() {
  return (
    <Router>
      <div className="header">
        <div className="container">
          <div className="leftdiv">
            <div className="logo">
              <img src={Logo} className="brand-logo" />
            </div>
          </div>
          <div className="rightdiv">
            <div className="navbar">
              <ul>
                <li>
                  <MenuLink
                    activeOnlyWhenExact={true}
                    to="/home"
                    label="Home"
                  ></MenuLink>
                </li>
                <li>
                  <MenuLink to="/projects" label="Projects"></MenuLink>
                </li>
                <li>
                  <MenuLink to="/contactus" label="Contact Us"></MenuLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </div>
  );
}
