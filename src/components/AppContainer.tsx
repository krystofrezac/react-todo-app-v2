//Dependencies
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Nav from './nav/NavReduxContainer';
import Todos from './todos/TodosReduxContainer';
import TodosForm from './todoForm/TodoFormReduxContainer';
import Search from './search/SearchReactContainer';

const AppContainer = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Switch>                
                <Route exact path="/" component={Todos}/>
                <Route exact path="/todoForm" component={TodosForm}/>
                <Route exact path="/search" component={Search}/>
                <Route render={() => "404"}/>
            </Switch>
        </BrowserRouter>
    )
};

export default AppContainer;