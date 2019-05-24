import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ComponentsPalette from 'App/Client/Features/DeveloperPalette/Scenes/ComponentsPalette';
import CompositesPalette from 'App/Client/Features/DeveloperPalette/Scenes/CompositesPalette';
import EmployeeWorklogsScene from 'App/Client/Features/Worklogs/Scenes/EmployeeWorklogsScene';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/palette/components" component={ ComponentsPalette } />
            <Route exact path="/palette/composites" component={ CompositesPalette } />
            <Route exact path="/" component={ EmployeeWorklogsScene } />
            <Route exact path="/log/:date" component={ EmployeeWorklogsScene } />
        </Switch> 
    </BrowserRouter>
);

export default Routes;