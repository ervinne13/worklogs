import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UILibrary from 'App/Client/UILibrary';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/ui-library" component={ UILibrary } />
        </Switch> 
    </BrowserRouter>
);

export default App;