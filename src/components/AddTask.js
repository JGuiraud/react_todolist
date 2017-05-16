import React, { Component } from 'react';
import { render } from 'react-dom';
import Input from './Input';
import Button from './Button';

class AddTask extends Component {
    constructor() {
        super()
        this.state = {
            value : ""
        }
    }
    render() {
        // console.log(this.state.value);
        return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    this.props.addTask(this.state.value);
                }
            } >
                <Input
                    placeholder='test new Task'
                    name="newtask"
                    type="text"
                    className="form-control"
                    value={(e) => this.setState({value:e.target.value}) }
                />
                <Button
                    name="add Task"
                    type='submit'
                    className="btn-success"
                />
            </form>
        </div>

        )
    }
}

export default AddTask;