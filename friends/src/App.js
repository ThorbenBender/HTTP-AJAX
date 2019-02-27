import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './Component/Friend';
import Addform from './Component/AddForm';

class App extends Component {
  state = {
    friends: [],
    error: null,
  }
  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = () => {
    axios.get('http://localhost:5000/friends')
      .then(friends => this.setFriends(friends.data))
      .catch(this.setError)
  }
  setFriends = friends => {
    this.setState({ friends });
  }

  setError = error => {
    this.setState({ error })
  }

  render() {
    return (
      <div>
        {
          this.state.friends.map(friend => <Friend friend={friend} />)
        }
        <Addform />
      </div>
    );
  }
}

export default App;
