import React, { Component } from 'react';
import axios from 'axios';
import {
  NavLink,
  Route
} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then( res => this.setState({smurfs: res.data}))
    .catch( err => console.log(err))
  }

  addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then( res => this.setState({smurfs: res.data}))
  }

  render() {
    return (
      <div className="App">
        <nav>
        <NavLink to="/"><h1>Smurf Village</h1></NavLink>
          <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurfs">The Village</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/smurfs" render={ props => <Smurfs {...props} smurfs={this.state.smurfs}/> } />
        <Route  exact path="/smurf-form" render={ props => <SmurfForm {...props} addSmurf={this.addSmurf}/> } />
      </div>
    );
  }
}

export default App;
