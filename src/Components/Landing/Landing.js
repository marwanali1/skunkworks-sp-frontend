import React, {Component} from 'react'

import NavBar from '../SharedComponents/NavBar.js'
import './Landing.css'


class Landing extends Component {

    render() {
        return(
            <div>
                <NavBar />
                <div className="landing">
                    <h1>Welcome to Home</h1>
                </div>
            </div>
        )
    }
}

export default Landing