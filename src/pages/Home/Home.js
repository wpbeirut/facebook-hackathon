import React, { Component } from "react";
import MedicineContainer from "./components/MedicineContainer";
import {Modal,Button} from 'react-bootstrap'

class Home extends Component {
  state = {
    open: true
  };

  modal = () => {
    if (this.state.open) {
      return (

      <Modal show={true} onHide={'handleClose'}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={'handleClose'}>
            Close
          </Button>
          <Button variant="primary" onClick={'handleClose'}>
            Save Changes
          </Button>
        </Modal.Footer>
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
