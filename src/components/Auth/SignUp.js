import React, {Component} from 'react';
import {Alert, Button, FormControl} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'

import spotify_logo from '../../assets/Spotify_Logo_RGB_White.png';
import './SignUp.css';
import NavBar from '../SharedComponents/NavBar.js'


class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                username: ""
            },
            loggedIn: false,
            signUpAlert: false,
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    componentDidMount() {
        document.title = "Spotify - Sign up"
    }

    handleLogin(event) {
        event.preventDefault();

    }

    async handleSignUp(event) {
        event.preventDefault();

        console.log(this.state.loggedIn);

        const response = await fetch('/auth/signup');
        const body = await response.json();

        this.setState({loggedIn: body.isLoggedOn});

        console.log(this.state.loggedIn)
    }

    handleChange(event) {
        let formControlKey = event._targetInst._debugOwner.key;
        let auth = {...this.state.auth};
        auth[formControlKey] = event.target.value;
        this.setState({auth});
    };

    render() {
        return (
            <div>
                <NavBar/>
                <div className="signup">
                    <span className="signup-span">
                        <img src={spotify_logo} className="signup-logo" alt="logo" />

                        <form onSubmit={this.handleSignUp}>
                            <FormControl
                                id="signup-form"
                                value={this.state.email}
                                key="email"
                                type="text"
                                placeholder="Email"
                                onChange={this.handleChange}/>

                            <FormControl
                                id="signup-form"
                                value={this.state.password}
                                key="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}/>

                            <FormControl
                                id="signup-form"
                                value={this.state.confirmPassword}
                                key="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                onChange={this.handleChange}/>

                            <FormControl
                                id="signup-form"
                                value={this.state.email}
                                key="username"
                                type="text"
                                placeholder="Username"
                                onChange={this.handleChange}/>

                            <SignUpHandler
                                redirect={this.state.loggedIn}
                                signUpAlert={this.state.signUpAlert}
                                errorMessage={this.state.errorMessage}/>

                            <Button id="signup-button" className="signup-button"><b>SIGN UP</b></Button>
                        </form>

                        <Button id="link-button" variant="link" href="/login">LOGIN</Button>
                    </span>
                </div>
            </div>
        );
    }
}

export default SignUp;

class SignUpHandler extends Component {

    render() {
        if (this.props.signUpAlert) {
            return (
                <Alert bsStyle="danger">
                    {this.props.errorMessage}
                </Alert>
            )
        } else if (this.props.redirect) {
            return (
                <Redirect to="/"/>
            )
        } else {
            return (
                <div>
                </div>
            )
        }

    }
}