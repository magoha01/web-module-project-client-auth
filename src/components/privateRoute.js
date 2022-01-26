import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    console.log(props);
    return <Route exact={props.exact} component={props.component} path={props.path}/>
}


export default PrivateRoute;