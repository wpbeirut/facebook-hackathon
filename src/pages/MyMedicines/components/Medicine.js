import React, { Component } from "react";

class Medicine extends Component {
  render() {
    return (
          <div className='row single-medicine'>
              <div className='col-4 img-medicine-container'>
                  <img className="img-fluid" src='https://pics.drugstore.com/prodimg/599258/900.jpg' />
              </div>
              <div className='col-8 '>
                 <p className='mt-3'>
                 this is a panadol paragraph i dont know what to writee here lol
                     </p> 
              </div>
          </div>
    );
  }
}

export default Medicine;
