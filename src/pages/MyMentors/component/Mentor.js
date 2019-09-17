import React, { Component } from "react";


class Mentor extends Component {
  
  



  render() {
    return (
      <div className='row single-medicine' onClick={this.props.onClick}>
              <div className='col-4 img-medicine-container'>
                  <img className="img-fluid mentor-thumbnail" src='/images/me.jpg' />
              </div>
              <div className='col-8 '>
                 <p className='mt-3'>
                 Hussein Hussein
                     </p> 
              </div>
          </div>
    );
  }
}

export default Mentor;
