import React, { Component } from "react";
import {BrowserRouter as Router, Link } from 'react-router-dom';
import './NavStyle.css'
class NavBar extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-light" >
          <div className="container-fluid  marginLeft">
            <div className="navbar-header  ">
              <Link className="navbar-brand navStyle " to="/">
                Device Management
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="#" className="navStyle styleLink">
                   Hosts & Devices
                </Link>
              </li>
              <li>
                <Link to="#" className="navStyle marginInBetween styleLink">
                   Settings
                </Link>
              </li>
              <li>
                <Link to="#" className="navStyle marginInBetween styleLink">
                   +Add New Hosts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      </Router>
    );
  }
}
export default NavBar;
