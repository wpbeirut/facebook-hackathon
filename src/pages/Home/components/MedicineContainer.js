import React, { Component } from "react";
import MedicineTime from "./MedicineTime";

class MedicineContainer extends Component {
  render() {
    return (
      <div className='row mb-4'>
        <div className='col-11 mx-auto text-capitalize mb-0 d-flex justify-content-between'>
          <h3 className='my-auto'>{this.props.header}</h3>
          <h1 style={{color:'red'}}>+</h1>
        </div>
        <MedicineTime />
        <MedicineTime />
      </div>
    );
  }
}

export default MedicineContainer;
