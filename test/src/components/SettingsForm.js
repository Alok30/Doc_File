import React, { Component } from "react";
import './SettingsForm.css';
export default class SettingsForm extends Component {
  render() {
    return (
      <div classNameName="container styleContainer">
        <div classNameName="row">
          <div className="col-xs-2 ">
            <label for="environment" className="floated">Select Enviroment</label>
            <input className="form-control" id="environment" type="text" 
            placeholder="Choose an environment"/>

            <label for="username" className="floated">Username</label>
            <input className="form-control" id="username" type="text" placeholder="Add Username" />

            <label for="password" className="floated">Password</label>
            <input className="form-control" id="password" type="text" placeholder="*****" />
          </div>
        </div>
      </div>
    );
  }
}
