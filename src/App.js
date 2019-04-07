import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import Landing from './components/Landing/Landing'
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    {/*<Route exact path="/premium" component={Premium} />*/}
                    {/*<Route exact path="/download" component={Download} />*/}
                    {/*<Route exact path="/help" component={Help} />*/}
                </Switch>
            </Router>
        );
    }
}

export default App;