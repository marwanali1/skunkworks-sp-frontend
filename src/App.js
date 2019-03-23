import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import Landing from './Components/Landing/Landing'
import Login from "./Components/Auth/Login";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    {/*<Route exact path="/sign-up" component={SignUp} />*/}
                    {/*<Route exact path="/premium" component={Premium} />*/}
                    {/*<Route exact path="/download" component={Download} />*/}
                    {/*<Route exact path="/help" component={Help} />*/}
                </Switch>
            </Router>
        );
    }
}

export default App;