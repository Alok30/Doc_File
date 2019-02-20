import React, { Component } from "react";
import deviceLandingScreen from './deviceLandingScreen';
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-12 col-sm-6 card_color">
           {/* <Link  to={} component={deviceLandingScreen}>CLick</Link> */}
           
           <div class="card">
            <div class="card-body ">
               
               <i className="fa fa-arrow-right float-right text-success "></i>
               <h5 class="card-title font_color ">Host Name </h5>
               <h5 class="card-title font_color">Ip:</h5>
               <h5 class="card-title font_color">Port No:</h5>
               <p className="float-right text-success font_color">connected</p>
              <span> <p className="font_color">devices</p></span>
             </div>
            </div>
          </div>
          <div className="col-md-4 col-12 col-sm-6 card_color">
           {/* <Link  to={} component={deviceLandingScreen}>CLick</Link> */}
           
           <div class="card">
            <div class="card-body ">
               
               <i className="fa fa-arrow-right float-right text-success "></i>
               <h5 class="card-title font_color ">Host Name </h5>
               <h5 class="card-title font_color">Ip:</h5>
               <h5 class="card-title font_color">Port No:</h5>
               <p className="float-right text-success font_color">connected</p>
              <span> <p className="font_color">devices</p></span>
             </div>
            </div>
          </div>
          <div className="col-md-4 col-12 col-sm-6 card_color">
           {/* <Link  to={} component={deviceLandingScreen}>CLick</Link> */}
           
           <div class="card">
            <div class="card-body ">
               
               <i className="fa fa-arrow-right float-right text-success "></i>
               <h5 class="card-title font_color ">Host Name </h5>
               <h5 class="card-title font_color">Ip:</h5>
               <h5 class="card-title font_color">Port No:</h5>
               <a href="#" className="float-right text-success font_color">connected </a>
              <span> <p className="font_color">devices</p></span>
             </div>
            </div>
          </div>
        </div>
          
          
       
      </div>
    );
  }
}
