import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from 'react-router-dom'
import Chart from './Chart'
import Domain_Check from './Domain_Check'
import Login from './Login'
import Create_admin from './Create_admin'
class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Domain_Check} />
                    <Route exact path="/chart" component={Chart} />
                    <Route exact path="/create_admin" component={Create_admin} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>

        );
    }
}

export default Routing;