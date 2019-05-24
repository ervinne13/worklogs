import React from 'react';
import ReduxWrapper from 'App/Client/Redux/ReduxWrapper';
import Routes from 'App/Client/Routes';

import { configure as configureFirebase } from 'App/Client/Config/firebase';

configureFirebase();
const App = () => (
    <ReduxWrapper>
        <Routes />
    </ReduxWrapper>    
);

export default App;