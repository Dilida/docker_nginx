import React, { Component } from 'react';
import axios from 'axios';


class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            history:[],
        };
        this.getHistory();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.postApi();
    }

    getHistory() {
        console.log('getHistory', this.state.history)
        axios.get('http://localhost:8080/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    history: res.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    postApi() {
        console.log('postApi', this.state.value)
        axios.post('http://localhost:8080/posts', {
            text: this.state.value,
        })
            .then(res => {
                console.log(res.data);
                this.getHistory();
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                    <button type="button" onClick={(e) => this.handleSubmit(e)}>submit</button>
                </form>
                <div>
                    {this.state.history && this.state.history.map(({text, createdAt}) => (
                        <div key={createdAt} >
                            {text}
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default Child;
