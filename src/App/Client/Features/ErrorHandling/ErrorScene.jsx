import React from 'react';

const ErrorScene = ({ title, message, linkBackTo="/", linkBackToLabel="Back to Home" }) => (
    <div className="error-scene">
        <h2>{ title }</h2>
        <p>{ message }</p>
        <a href={ linkBackTo }>{ linkBackToLabel }</a>
    </div>
);

export default ErrorScene;