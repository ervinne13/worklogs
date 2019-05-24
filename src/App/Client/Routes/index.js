import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ComponentsPalette from 'App/Client/Features/DeveloperPalette/Scenes/ComponentsPalette';
import CompositesPalette from 'App/Client/Features/DeveloperPalette/Scenes/CompositesPalette';
import EmployeeWorklogScene from 'App/Client/Features/Worklogs/Scenes/EmployeeWorklogScene';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/palette/components" component={ ComponentsPalette } />
            <Route exact path="/palette/composites" component={ CompositesPalette } />
            <Route exact path="/" component={ EmployeeWorklogScene } />
            <Route exact path="/log/:date" component={ EmployeeWorklogScene } />
        </Switch> 
    </BrowserRouter>
);

export default Routes;