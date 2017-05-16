import React, { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component {
    render() {
        return(
        <button
            onClick={this.props.action}
            type={this.props.type}
            className={this.props.className}>{this.props.name}
        </button>
        )
    }
}

export default Button;