import React from 'react';

export default class Friend extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>email: {this.props.friend.email}</p>
            </div>
        )
    }
}