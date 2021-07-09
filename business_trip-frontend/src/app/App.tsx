import * as React from 'react';
import { Redirect, Route, Router } from "react-router-dom";

import '../styles/index.scss';

import Decorator from "./Decorator/Decorator";
import Users from "./Users/Users"
import Home from "./Home/Home"

import { browerHistory, getCurrentPath } from "../utils/history";

function getRedirectPath() {
    let redirectPath = getCurrentPath();
    return redirectPath;
}

function getRedirect(props: any) {
    return (
        <Redirect to={props}/>
    );
}

const App = () => {
    const redirectPath = getRedirectPath();
    return (
        <div className='App'>
            <Router history={browerHistory}>
                <Decorator>
                    <div>
                        <Route exact={true} path='/' component={ () => getRedirect("/home") } />
                        <Route path="/users" component={ Users } />
                    </div>
                </Decorator>
            </Router>
        </div>
    )
}

export default App;
