import React, { Component } from 'react';

class Page extends Component {
    render() {
        return (
            <div className='height'>
                {this.props.children}
            </div>
        );
    }
}

export default Page;