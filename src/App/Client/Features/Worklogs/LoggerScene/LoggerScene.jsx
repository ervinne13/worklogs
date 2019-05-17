import React from 'react';
import LogDateSet from './LogDateSet';

class LoggerScene extends React.Component {


    render() {
        return (
            <div className="grid-row">
                <div className="grid-col-4">
                    <LogDateSet />
                </div>
                <div className="grid-col-8">
                    <SelectDatePrompt />
                </div>
            </div>
        );
    }
}

const SelectDatePrompt = () => (
    <h1>Please Select a Date</h1>
);

export default LoggerScene;