import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}

export default Header;