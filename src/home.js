import React from 'react';
import {BrowserRouter,
    Route,
    Switch,
    NavLink} from "react-router-dom";
    // import Login from './component/login';
    import UserComponent from './component/userComponent';
    import LoginComponent from './component/loginComponent';
export default function home(){
    return(
        <>
        <div>
            <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component={Login}/> */}
                <Route exact path="/view" component={UserComponent}/>
                <Route exact path="/add" component={LoginComponent}/>
            </Switch>
            </BrowserRouter>
        </div>
        </>
    )
}