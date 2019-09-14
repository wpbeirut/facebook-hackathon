import React, { Component } from 'react';
import Medicine from './components/Medicine';
import { Modal, Button } from "react-bootstrap";

class MyMedicines extends Component {

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
                <Modal.Title>Add Medicine </Modal.Title>
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
                        Dosage
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
    
    
                    <div class="form-group row mb-0 d-flex text-center">
                      <label for="inputEmail3" class="col-3 col-form-label">
                        Description
                      </label>
                      <div class="col-8">
    
                      <textarea
                          class="form-control"
                          name="select_importance"
                          placeholder="Add description"
                          
                          onChange={this.handleInputChange}
                        ></textarea>
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


      editModal = () => {
        const {  editModal } = this.state;
        if (editModal) {
          return (
            <Modal centered show={true} onHide={"handleClose"}>
              <Modal.Header>
                <Modal.Title>Edit </Modal.Title>
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
                          value='Panadol'
                          name="name_medicine"
                          placeholder="Name"
                          onChange={this.handleInputChange}
    
                        />
                                  </div>
                    </div>
                    <div class="form-group row mb-0 d-flex">
                      <label for="inputEmail3" class="col-3 col-form-label">
                        Dosage
                      </label>
                      <div class="col-8">
                        <input
                          class="form-control"
                          value='20 ml'
                          name="select_importance"
                          placeholder="Dosage"
                          onChange={this.handleInputChange}
                        />
                       </div>
                    </div>
    
    
                    <div class="form-group row mb-0 d-flex text-center">
                      <label for="inputEmail3" class="col-3 col-form-label">
                        Description
                      </label>
                      <div class="col-8">
    
                      <textarea
                          class="form-control"
                          name="select_importance"
                          value='loremddo kwodkwo kdow ke;o wkeo; kw ;eokw ;oek'
                          placeholder="Add description"
                          
                          onChange={this.handleInputChange}
                        ></textarea>
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
                          onClick={() => this.setState({ editModal: false })}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary m-1 pt-1 btn-block"
                          type="submit"
                        >
                          Save Changes
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
            <div className='container'>
                      {this.modal()}
                        {this.editModal()}
                MyMedicines
                <button className='btn btn-primary btn-block' onClick={()=>this.setState({open:true})}>Add new medicine</button>
                <Medicine onClick={()=>this.setState({editModal:true})} />
                <Medicine />
                <Medicine />
                <Medicine />
                <Medicine />
                <Medicine />

            </div>
        );
    }
}

export default MyMedicines;