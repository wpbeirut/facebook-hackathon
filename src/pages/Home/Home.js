import React, { Component } from 'react';
import MedicineContainer from './components/MedicineContainer';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <MedicineContainer header='Morning' />
                <MedicineContainer header='Afternoon' />
                <MedicineContainer header='Evening' />
            </div>
        );
    }
}

export default Home;