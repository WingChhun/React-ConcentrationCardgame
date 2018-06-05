import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//* import component
import Main from "./Main";
class Router extends Component
{

    render()
    {

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <Switch>

                    <Route exact path="/" component ={Main}/>

                </Switch>
            </BrowserRouter>

        )
    }

}
export default Router;