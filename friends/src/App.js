import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './Component/Friend';
import Addform from './Component/AddForm';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StyledApp from './Component/styleComponents/StyledApp';

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

  addNewFriend = (name, age, email, history) => {
    axios.post('http://localhost:5000/friends', {
      name: name,
      age: age,
      email: email,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
    history.pushState('/');
  }
  updating = (name, age, email, id) => {
        console.log(name, age, email, id);
        axios.put(`http://localhost:5000/friends/${id}`, {
        name: name,
        age: age,
        email: email,
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
    }

    deleteFriend = id => {
      console.log(id);
      axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => console.log(res))
      .catch(this.setError);
    }

  render() {
    return (
      <StyledApp>
        <Link path="/" to="/addFriend">Add Friend</Link>
        {
          this.state.friends.map(friend => <Route exact path="/" key={friend.id} render={(fr) => <Friend friend={friend} key={friend.id} updating={this.updating} deleteFriend={this.deleteFriend}/>} /> )
        }
        <Route path="/addFriend" render={() => <Addform addNewFriend={this.addNewFriend}/>} />
      </StyledApp>
    );
  }
}

export default App;
