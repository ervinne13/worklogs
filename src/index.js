import React from 'react';
import ReactDOM from 'react-dom';
import 'App/Client/index.css';
import App from 'App/Client/App';
import * as serviceWorker from 'App/Client/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
