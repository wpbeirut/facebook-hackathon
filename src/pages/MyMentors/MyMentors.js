import React, { Component } from 'react';
import Mentor from './component/Mentor';
import { Modal, Button } from "react-bootstrap";

class MyMentors extends Component {



    state = {
        open:false,
        editModal:false
      }

      modal = () => {
        const {  open } = this.state;
        if (open) {
          return (
            <Modal centered show={true} onHide={"handleClose"}>
              <Modal.Header>
                <Modal.Title>Add Mentor </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={this.onSubmit}>
                  <div className="contianer mx-3">
                    <div class="form-group row mb-0 d-flex-">
                      <label for="inputEmail3" class="col-3 col-form-label">
                        Name
                      </label>
                      <div class="col-8">
                        <input
                          class="form-control"
                          name="name_medicine"
                          placeholder="Name"
                          onChange={this.handleInputChange}
    
                        />
                                  </div>
                    </div>
                    <div class="form-group row mb-0 d-flex">
                      <label for="inputEmail3" class="col-3 col-form-label">
                        Relative
                      </label>
                      <div class="col-8">
                        <input
                          class="form-control"
                          name="select_importance"
                          placeholder="Dosage"
                          onChange={this.handleInputChange}
                        />
                       </div>
                    </div>

                    <div class="form-group row d-flex ">
                      <label for="inputEmail3" class="col-3 col-form-label">
                        Image
                      </label>
                      <div class="col-8">
                      <input
                          type='file'
                          class="form-control"
                          name="upload_file"                          
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
    
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
                          Add
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
            <div>
                                      {this.modal()}
                MyMedicines
                <button className='btn btn-primary btn-block' onClick={()=>this.setState({open:true})}>Add Mentor</button>
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />


            </div>
        );
    }
}

export default MyMentors;