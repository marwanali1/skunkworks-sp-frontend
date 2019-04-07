import React, {Component} from 'react';
import {Alert, Button, FormControl} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'

import spotify_logo from '../../assets/Spotify_Logo_RGB_White.png';
import './Login.css';
import NavBar from '../SharedComponents/NavBar.js'


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth: {
                email: "",
                password: ""
            },
            loggedIn: false,
            loginAlert: false,
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        document.title = "Spotify - Login"
    }

    async handleLogin(event) {
        event.preventDefault();
        console.log(this.state.loggedIn);

        const response = await fetch('/auth/login');
        const body = await response.json();

        this.setState({loggedIn: body.isLoggedOn});

        console.log(this.state.loggedIn)
    }

    handleSignUp(event) {
        event.preventDefault();
    }

    handleReset(event) {
        event.preventDefault();
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
                <div className="login">
                    <span className="login-span">
                        <img src={spotify_logo} className="login-logo" alt="logo" />

                        <form name="Login" onSubmit={this.handleLogin}>
                            <FormControl
                                id="login-form"
                                value={this.state.email}
                                key="email"
                                type="text"
                                placeholder="Email or username"
                                onChange={this.handleChange}/>

                            <FormControl
                                id="login-form"
                                value={this.state.password}
                                key="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}/>

                            <LoginHandler
                                redirect={this.state.loggedIn}
                                loginAlert={this.state.loginAlert}
                                errorMessage={this.state.errorMessage}/>

                            <Button id="login-button" className="login-button"><b>LOG IN</b></Button>
                        </form>

                        <Button id="link-button" variant="link" href="/signup">SIGN UP</Button>
                        <Button id="link-button" variant="link" href="/reset_password">RESET PASSWORD</Button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Login;

class LoginHandler extends Component {

    render() {
        if (this.props.loginAlert) {
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