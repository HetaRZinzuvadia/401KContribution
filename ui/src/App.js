import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';
import User from './components/User/User';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        name: '',
        email: '',
        password: '',
        age: 0,
        contribution: 0,
        match: 0
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      name: data.name,
      email: data.email,
      password: data.password,
      age: data.age,
      contribution: data.contribution,
      match: data.match
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <User user={this.state.user} />
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
