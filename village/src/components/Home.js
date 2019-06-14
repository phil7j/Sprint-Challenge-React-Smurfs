import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <img src="https://fanart.tv/fanart/tv/75719/hdclearart/the-smurfs-51558ec877cf7.png" />
                <p>What would you like to do?</p>
                <Link to="/smurfs"><button>Who's in town?</button></Link>
                <Link to="/smurf-form"><button>Add a smurf!</button></Link>
            </div>
        )
    }
}

export default Home
