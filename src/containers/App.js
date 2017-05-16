import React, { Component } from 'react';
import { render } from 'react-dom';
import AddTask from "../components/AddTask";

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks : []
    }
  }
  addTask(task) {
    // console.log(task)
    this.setState({
      tasks: [
        ...this.state.tasks,
        task
      ]
    })
  }
  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <h1>hello</h1>
        <AddTask addTask={this.addTask.bind(this)}/>
      </div>
    );
  }
}

export default App;
