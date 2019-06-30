import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    state = {}

    render() {
        return (
            <>
                <ul className="list-group">
                    {this.props.todoList.map(val => {
                        return <li className="list-group-item" key={val.id}><Todo todoData={val} del={this.props.del()} isComplete={this.props.isComplete()} /></li>
                    })}
                </ul>
            </>
        );
    }
}
export default Todos;