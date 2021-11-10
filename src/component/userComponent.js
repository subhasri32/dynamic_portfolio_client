import React from 'react';
import {Route,Switch,NavLink} from "react-router-dom";
import NotFound from './notFound';
import HeaderComponent from './headerComponent';
import UserDetails from './userDetails';

export default function UserComponent() {
    return(
    <>
    <div>
      <NavLink to="/view"></NavLink>
      <NavLink to="/add"></NavLink>
      <HeaderComponent/>
     <Switch>
        <Route path="*" component={NotFound}/>
    </Switch>
      <div>
      <UserDetails/>
      </div>
    </div>
    </>
    );
}


