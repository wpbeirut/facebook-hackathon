import React, { Component } from 'react';

class Settings extends Component {

    logout =()=>{
        localStorage.removeItem('token')
        this.props.history.push('/signin')
    }
    render() {
        return (
            <div>
                <button className='btn btn-danger btn-block m-3' onClick={this.logout}>logout</button>
            </div>
        );
    }
}

export default Settings;