import React, { Component } from 'react';
import Header from './Header';

class Page extends Component {
    render() {
        return (
            <div className='height'>
                <Header title={this.props.title}/>
                {this.props.children}
            </div>
        );
    }
}

export default Page;