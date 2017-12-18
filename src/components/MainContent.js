import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';

export default class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/signin" component={Signin} />
                    <Route path="/signout" component={Signout} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>
        )
    }
}