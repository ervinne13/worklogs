import React from 'react';
import ReduxWrapper from 'App/Client/Redux/ReduxWrapper';
import Routes from 'App/Client/Routes';
import ErrorBoundary from 'App/Client/Features/ErrorHandling/ErrorBoundary';

import { configure as configureFirebase } from 'App/Client/Config/firebase';

configureFirebase();
const App = () => (
    <ErrorBoundary >
        <ReduxWrapper>
            <Routes />
        </ReduxWrapper>
    </ErrorBoundary>
);

export default App;