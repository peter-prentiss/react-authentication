import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from './auth/Signin';

export default class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/signin" component={Signin} />
                </Switch>
            </div>
        )
    }
}