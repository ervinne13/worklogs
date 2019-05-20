import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UILibrary from 'App/Client/UILibrary';
import EmployeeWorklogScene from 'App/Client/Features/Worklogs/EmployeeWorklogScene';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/ui-library" component={ UILibrary } />
            <Route exact path="/" component={ EmployeeWorklogScene } />
            <Route exact path="/log/:date" component={ EmployeeWorklogScene } />
        </Switch> 
    </BrowserRouter>
);

export default App;