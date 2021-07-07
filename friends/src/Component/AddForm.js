import React from 'react';

export default class AddForm extends React.Component {
    state = {
            name: '',
            age: '',
            email: '',
    }

    onChangeHandler = event => {
        if(event.target.type === 'text') {
            this.setState({name: event.target.value});
        }
        if(event.target.type === 'number') {
            this.setState({age: event.target.value});
        }
        if (event.target.type === 'email') {
            this.setState({email: event.target.value});
        }
    }

    render() {
        return (
            <form onSubmit={() => this.props.addNewFriend(this.state.name, this.state.age, this.state.email)}>
                <input onChange={this.onChangeHandler} type="text" value={this.state.name} placeholder="Friends name"></input>
                <input onChange={this.onChangeHandler} type="number" value={this.state.age} placeholder="Friends age"></input>
                <input onChange={this.onChangeHandler} type="email" value={this.state.email} placeholder="Friends email"></input>
                <button>Send</button>
            </form>
        )
    }
}