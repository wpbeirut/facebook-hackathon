import React, { Component } from "react";
import MedicineContainer from "./components/MedicineContainer";
import { Modal, Button } from "react-bootstrap";
import PillParams from "./components/PillParams";

class Home extends Component {
  state = {
    open: false,
    data:{},
    times: [],
    medicines: [
      { id: 1, name: "Panadol" },
      { id: 2, name: "Tramal" },
      { id: 3, name: "Advil" },
      { id: 4, name: "Profinile" }
    ],
    importants: [
      { id: 1, name: "Very Important" },
      { id: 2, name: "Important" },
      { id: 3, name: "Normal" }
    ],
    days:['MO','TU','WE','TH','FR','SA','SU']
  };

  onSubmit = e => {
    e.preventDefault();
    // this.setState({ open: false });
    console.log(this.state.data)
  };

  addField = () => {
    const item = {};
    this.setState({
      times: [...this.state.times, item]
    });
  };
  removeField = idx => {
    let times = [...this.state.times];
    times.splice(idx, 1);
    this.setState({
      times
    });
  };

  handleInputChange = e=>{
    const data = {...this.state.data}
    data[e.target.name] = e.target.value
    this.setState({data})
  }

  handleChange = idx => e => {
    console.log(idx)
    const { name, value } = e.target;
    console.log(idx,name, value)
    const data = {...this.state.data}
    const times = [...this.state.times];
    data[idx] = {
      ...data[idx],
      [name]: value
    };
    data.details = times
    this.setState({data})

  };

  modal = () => {
    const { medicines, importants, times, open,days } = this.state;
    if (open) {
      return (
        <Modal centered show={true} onHide={"handleClose"}>
          <Modal.Header>
            <Modal.Title>Create Palarm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <div className="contianer mx-3">
                <div class="form-group row mb-0 d-flex-">
                  <label for="inputEmail3" class="col-3 col-form-label">
                    Medicine
                  </label>
                  <div class="col-8">
                    <select
                      class="form-control"
                      name="select_medicine"
                      placeholder="Full name"
                      onChange={this.handleInputChange}

                    >
                      {medicines.map(imp => (
                        <option key={imp.id}>{imp.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="form-group row mb-0 d-flex">
                  <label for="inputEmail3" class="col-3 col-form-label">
                    Importance
                  </label>
                  <div class="col-8">
                    <select
                      class="form-control"
                      name="select_importance"
                      placeholder="Full name"
                      onChange={this.handleInputChange}
                    >
                      {importants.map(med => (
                        <option key={med.id}>{med.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {times.map((time, idx) => {
                  return (
                    <PillParams
                      onChange={(obj)=>this.handleChange(obj)}
                      removeField={()=>this.removeField(idx)}
                    />
                  );
                })}

                <div class="form-group row mb-0 d-flex">
                  <div className="col-11 text-center mx-auto">
                    <button
                      className="btn btn-success m-1 pt-1"
                      style={{ fontSize: "13px" }}
                      type="button"
                      onClick={() => this.addField()}
                    >
                      ADD TIME +
                    </button>
                    {/* <i class="fas fa-plus-square"></i> */}
                  </div>
                </div>
                <hr />
                <div class="form-group row mb-0 d-flex text-center">
                  <div className="col-11 text-center mb-1 mx-auto">
                   {days.map(day=><a className='m-1 days-selection'>{day}</a>)}
                  </div>
                </div>

                <div class="form-group row mb-0 d-flex">
                <label for="inputEmail3" class="col-3 col-form-label">
                    From
                  </label>
                  <div className="col-8 text-center">
                  <input
                      type='date'
                      class="form-control"
                      name="from_date"
                    />
                  </div>
                </div>
                <div class="form-group row mb-2 d-flex">
                <label for="inputEmail3" class="col-3 col-form-label">
                    To
                  </label>
                  <div className="col-8 text-center">
                  <input
                      type='date'
                      class="form-control"
                      name="to_date"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group row mb-0 d-flex text-center">
                  <div className="col-11 text-center mx-auto d-flex">
                    <button
                      className="btn btn-dark m-1 pt-1"
                      type="button"
                      onClick={() => this.setState({ open: false })}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary m-1 pt-1 btn-block"
                      type="submit"
                    >
                      Create
                    </button>
                    {/* <i class="fas fa-plus-square"></i> */}
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      );
    }
  };

  render() {
    return (
      <div className="container">
        {this.modal()}
        <MedicineContainer
          header="Morning"
          openModal={() => this.setState({ open: true })}
        />
        <MedicineContainer
          header="Afternoon"
          openModal={() => this.setState({ open: true })}
        />
        <MedicineContainer
          header="Evening"
          openModal={() => this.setState({ open: true })}
        />
      </div>
    );
  }
}

export default Home;
