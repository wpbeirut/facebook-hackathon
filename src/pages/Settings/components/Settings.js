import React, { Component } from 'react';

class Settings extends Component {

    logout =()=>{
        localStorage.removeItem('token')
        this.props.history.push('/signin')
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10' style={{height:'80vh'}}>

                    </div>
            <div className='col-10 mx-auto text-center'>
                <button className='btn btn-danger btn-block' onClick={this.logout}>logout</button>
            </div>
                </div>
            </div>
        );
    }
}

export default Settings;