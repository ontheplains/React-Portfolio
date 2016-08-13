import React from 'react';
import Home from '../containers/Home/Home';
import ProjectDetails from '../containers/Project-Detail/Project-Detail';


import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default (
    <Router history={ hashHistory }>
        <Route path="/" component={Home}>
            <IndexRoute component={Home}></IndexRoute>
        </Route>
        <Route path="projects/:projectId" component={ProjectDetails}></Route>
    </Router>
);
