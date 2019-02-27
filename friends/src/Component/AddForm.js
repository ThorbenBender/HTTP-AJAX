import React from 'react';

export default class AddForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Friends name"></input>
                <input type="number" placeholder="Friends age"></input>
                <input type="email" placeholder="Friends email"></input>
                <button>Send</button>
            </form>
        )
    }
}