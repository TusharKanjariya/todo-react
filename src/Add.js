import React, { Component } from 'react';

class Add extends Component {
    state = {
        title: ''
    }
    changeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        this.props.addData(this.state.title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="input-group mb-3">
                    <input type="text" value={this.state.title} required onChange={this.changeData} className="form-control" placeholder="Todo Title" name="title" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Add Todo</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Add;