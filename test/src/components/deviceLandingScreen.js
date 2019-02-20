import React, { Component } from "react";
import "./deviceLandingScreen.css";
export default class deviceLandingScreen extends Component {
  render() {
    return (
      <div className="container">
      
        <div className="row">

          <div className="col-md-6 col-12  container_css">
            <h1>HostName</h1>
            <h3>Ip: PortNo:</h3>
          </div>
          <div className="col-md-6 col-12 container_css">
            <div className="row">
              <div className="col-md-6">
             
              </div>
              <div className="col-md-6 col-12">
                 <button type="button" className="btn btn-info previous">add new device</button>
                 <button type="button" className="btn btn-light next">configure host</button>              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
