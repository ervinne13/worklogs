import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

const ReduxWrapper = ({ children }) => (
    <Provider store={ store }>
        { children }
    </Provider>
);

export default ReduxWrapper;