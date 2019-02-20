import React, { Component } from 'react'
import './app.css'
export default class deviceDetailsScreen extends Component {
  render() {
    return (
       
        <table className="table  table_css">
        <thead className="">
          <tr>
            <th scope="col">Barcode</th>
            <th scope="col">Parata</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>
    
     
    )
  }
}
