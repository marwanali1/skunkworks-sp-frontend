import React, {Component} from 'react';
import {Alert, Button, ButtonToolbar, FormControl} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'

import spotify_logo from '../../Assets/spotify_logo.eps';
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
            <div className="login">
                <NavBar />
                <span className="login-span">
                    <img src={spotify_logo} className="login-logo" alt="logo"/>
                    <br/>

                    <form name="Login" onSubmit={this.handleLogin}>
                        <FormControl
                            className="login-form"
                            value={this.state.email}
                            key="email"
                            type="text"
                            placeholder="Email or username"
                            onChange={this.handleChange}/>
                        <br/>
                        <FormControl
                            className="login-form"
                            value={this.state.password}
                            key="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}/>
                        <br/>

                        <LoginHandler
                        redirect={this.state.loggedIn}
                        loginAlert={this.state.loginAlert}
                        errorMessage={this.state.errorMessage}/>

                        <Button type="submit" className="login-button"><b>LOG IN</b></Button>
                    </form>

                    <ButtonToolbar>
                        <Button bsStyle="link" className="link-button"
                                onClick={this.handleSignUp}>SIGN UP</Button>
                        <Button bsStyle="link" className="link-button"
                                onClick={this.handleReset}>RESET PASSWORD</Button>
                    </ButtonToolbar>
                </span>
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
        }
        else if (this.props.redirect) {
            return (
                <Redirect to="/"/>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }

    }
}