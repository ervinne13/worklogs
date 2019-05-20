import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EmployeeWorklogScene from 'App/Client/Features/Worklogs/EmployeeWorklogScene';
import UILibraryComponents from 'App/Client/Features/UILibrary/UILibraryComponents';
import UILibraryCompositeComponents from 'App/Client/Features/UILibrary/UILibraryCompositeComponents';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/ui-library/components" component={ UILibraryComponents } />
            <Route exact path="/ui-library/composites" component={ UILibraryCompositeComponents } />
            <Route exact path="/" component={ EmployeeWorklogScene } />
            <Route exact path="/log/:date" component={ EmployeeWorklogScene } />
        </Switch> 
    </BrowserRouter>
);

export default App;