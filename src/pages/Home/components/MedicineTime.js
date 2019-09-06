import React, { Component } from 'react';

class MedicineTime extends Component {
    render() {
        return (
            <div className='col-11 d-flex mx-auto justify-content-between m-1 py-0 md-card'>
                <div>
                <img src='https://img.rasset.ie/000e6776-800.jpg' className='img-fluid img-thumbnail m-2' style={{width:'100px',height:'65px'}} alt='mm' />
                </div>
                <div className='mt-2'>
                    <strong>Panadol</strong>
                    <p>headache pills</p>
                </div>
                <div className='mx-auto my-auto'>
                    07:00 pm
                </div>
                </div>
        );
    }
}

export default MedicineTime;