import React, { Component } from "react";

class PillParams extends Component {

  state = {options:[]}

  render() {
    return (
      <div class="form-group row mb-0 d-flex">
        <label for="inputEmail3" class="col-3 col-form-label">
          Quantity
        </label>
        <div class="col-3">
          <select
            class="form-control"
            name="take_quantity"
            onChange={e=>this.props.handleOptionChange(e)}
            placeholder="Full name"
          >
            {[1, 2, 3].map(med => (
              <option key={med}>{med}</option>
            ))}
          </select>
        </div>
        <label for="inputEmail3" class="col-1 col-form-label">
          time
        </label>
        <div class="col-4">
          <select
            class="form-control"
            name="take_time"
            placeholder="Full name"
            onChange={e=>this.props.handleOptionChange(e)}
          >
            {["1:00", "2:00", "3:00"].map(med => (
              <option key={med}>{med}</option>
            ))}
          </select>
        </div>
        <div className="col-1 text-center pl-0 pr-4 mt-2">
          <p style={{color:'red',cursor:'pointer'}} onClick={()=>this.props.removeField()}><i class="fa fa-window-close" aria-hidden="true"></i>
</p>
        </div>
      </div>
    );
  }
}

export default PillParams;
