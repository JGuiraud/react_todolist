import React, { Component } from 'react';
import { render } from 'react-dom';

class Input extends Component {
    render() {
        return (
            <div>
             <input
                placeholder={this.props.placeholder}
                className={this.props.className}
                onChange={this.props.value}
            />
            </div>
        )
    }
}

export default Input;