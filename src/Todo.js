import React, { Component } from 'react';
class Todo extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-sm-10 col-xs-10">
                    <input type="checkbox" onChange={() => this.props.isComplete(this.props.todoData.id)} /> {' '}
                    <span className={(this.props.todoData.complete ? 'text-muted ' : 'text-dark')} style={{ textDecoration: this.props.todoData.complete ? 'line-through' : 'none' }}>{this.props.todoData.title}</span>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                    <button className="float-right btn btn-sm btn-danger" onClick={() => this.props.del(this.props.todoData.id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Todo;