import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UILibraryComponents from 'App/Client/Features/UILibrary/UILibraryComponents';
import UILibraryCompositeComponents from 'App/Client/Features/UILibrary/UILibraryCompositeComponents';
import EmployeeWorklogScene from 'App/Client/Features/Worklogs/EmployeeWorklogScene';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/ui-library/components" component={ UILibraryComponents } />
            <Route exact path="/ui-library/composites" component={ UILibraryCompositeComponents } />
            <Route exact path="/" component={ EmployeeWorklogScene } />
            <Route exact path="/log/:date" component={ EmployeeWorklogScene } />
        </Switch> 
    </BrowserRouter>
);

export default Routes;