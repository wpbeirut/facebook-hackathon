import React, { Component } from 'react';
import Header from './Header';
import moment from 'moment'
import { Modal, Button } from "react-bootstrap";


const alarm = new Audio('/sounds/alarm.mp3');

class Page extends Component {

    state = {
        alaram: '10:50:00 pm',
        open:false
    }
    componentDidMount() {
        setInterval(()=>{ 
            this.alaram()
         }, 1000);

    }
    
    alaram = ()=>{
        let now = moment().format('hh:mm:ss a')
        const {alaram} = this.state
        console.log(now,alaram)
        if(now === alaram){
            this.setState({open:true})
            alarm.play()

        }
    }
    modal = () => {
        const {  open } = this.state;
        if (open) {
          return (
            <Modal centered show={true} onHide={"handleClose"}>
              <Modal.Header>
                <Modal.Title>
                    <div className='row d-flex justify-content-between'>
                    <div className='col-5 my-auto'>
                       <h2 className='text-danger'>PALARM!!!</h2> 
                    </div>
                    <div className='col-3'>
                        <img className='img-fluid' src='http://pngimg.com/uploads/alarm_clock/alarm_clock_PNG28.png'/>
                    </div>
                    </div> </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={this.onSubmit}>
                  <div className="contianer mx-3">
                <div className='img-container m-2 p-2'>

                    <img className='img-fluid' src='https://thenypost.files.wordpress.com/2018/03/pills_advil1a.jpg?quality=90&strip=all&strip=all' alt='m' />
                </div>

    
            <div className='text-center p-2 m-3'>
                <h1>its the time for this pills</h1>
            </div>
 

           
    
                 <div class="form-group row mb-0 d-flex text-center">
                      <div className="col-11 text-center mx-auto d-flex">
                        {/* <button
                          className="btn btn-dark m-1 pt-1"
                          type="button"
                          onClick={() => this.setState({ open: false })}
                        >
                          Cancel
                        </button> */}
                        <button
                          className="btn btn-primary m-1 pt-1 btn-block"
                          type="button"
                          onClick={_=>this.setState({open:false},_=>alarm.pause())}
                        >
                          I will take it, Thank you
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
            <div className='height'>
                <Header title={this.props.title}/>
                {this.modal()}
                {this.props.children}
            </div>
        );
    }
}

export default Page;