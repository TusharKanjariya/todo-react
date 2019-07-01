import React, { Component } from 'react';

class Add extends Component {
    state = {
        title: ' '
    }
    changeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        if (this.state.title | this.state.title !== ' ') {
            this.props.addData(this.state.title.trim());
            this.setState({
                title: ' '
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.submit} className="mb-3">
                <div className="input-group">
                    <input type="text" value={this.state.title} onChange={this.changeData} className="form-control" placeholder="Todo Title" name="title" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Add Todo</button>
                    </div>
                </div>
                {this.state.title ? '' : <small className="text-danger form-text mt-0">This is Required Field</small>}
            </form>
        );
    }
}

export default Add;