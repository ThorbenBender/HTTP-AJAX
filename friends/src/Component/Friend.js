import React from 'react';

export default class Friend extends React.Component {
    state = {
        updatingFriend: false,
        updateName: '',
        updateAge: '',
        updateEmail: '',
    }

    updateFriend = event => {
        if(event.target.type === 'text') {
            this.setState({updateName: event.target.value});
        }
        if(event.target.type === 'number') {
            this.setState({updateAge: event.target.value});
        }
        if (event.target.type === 'email') {
            this.setState({updateEmail: event.target.value});
        }
    }
    startUpdating = () => {
        this.setState(st => ({updatingFriend: !st.updatingFriend}));
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>email: {this.props.friend.email}</p>
                <div className="update-and-delete"> 
                    {
                        !this.state.updatingFriend &&
                        <button onClick={this.startUpdating}>Update</button>
                    }
                    {
                        this.state.updatingFriend &&
                        <button onClick={this.startUpdating}>Stop Update</button>
                    }
                    <button>Delete</button>
                </div>
                {
                    this.state.updatingFriend && 
                    <form>
                        <input type="text" value={this.state.updateName} onChange={this.updateFriend}></input>
                        <input type="number" value={this.state.updateAge} onChange={this.updateFriend}></input>
                        <input type="email" value={this.state.updateEmail} onChange={this.updateFriend}></input>
                        <button onClick={() => this.props.updating(this.state.updateName, this.state.updateAge, this.state.updateEmail, this.props.friend.id)}>Push Update</button>
                    </form>
                }
            </div>
        )
    }
}