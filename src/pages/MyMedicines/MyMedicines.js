import React, { Component } from 'react';
import Medicine from './components/Medicine';

class MyMedicines extends Component {
    render() {
        return (
            <div className='container'>
                MyMedicines
                <Medicine />
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