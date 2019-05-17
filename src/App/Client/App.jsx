import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UILibrary from 'App/Client/UILibrary';
import LoggerScene from 'App/Client/Features/Worklogs/LoggerScene';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/ui-library" component={ UILibrary } />
            <Route exact path="/" component={ LoggerScene } />
            <Route exact path="/log/:date" component={ LoggerScene } />
        </Switch> 
    </BrowserRouter>
);

export default App;