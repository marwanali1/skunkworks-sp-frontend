import React, {Component} from 'react'

import NavBar from '../SharedComponents/NavBar.js'
import './Landing.css'


class Landing extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="App">
                <NavBar />
                <h1>Welcome to Home</h1>
            </div>
        )
    }
}

export default Landing