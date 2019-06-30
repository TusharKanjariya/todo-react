import React from 'react';
import Todos from './Todos';
import Add from './Add';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Today is Birthday Party.",
        complete: false
      },
      {
        id: 2,
        title: "Goto Beach.",
        complete: false
      },
      {
        id: 3,
        title: "Deadline in UI/UX Project.",
        complete: false
      }
    ]
  }
  del = (id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter((val) => val.id !== id)]
      }
    )
  }

  isComplete = (id) => {
    this.setState(
      {
        todos: this.state.todos.map((val) => {
          if (val.id === id) {
            val.complete = !val.complete
          }
          return val;
        })
      }
    )
  }

  addData = (title) => {
    console.log(title);
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      complete: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="col-md-4 offset-md-3 bg-light p-2 mt-5 shadow-sm">
        <h4>Todo</h4>
        <Add addData={this.addData} />
        <Todos todoList={this.state.todos} del={() => this.del} isComplete={() => this.isComplete} />
      </div>
    )
  }
}

export default App;
