import React from 'react';
import CalendarLinkItem from 'App/Client/Features/Calendar/CalendarLinkItem';
import StatusHeader from 'App/Client/Features/Worklogs/StatusHeader';
import ProjectTaskSelector from 'App/Client/Features/Worklogs/ProjectTaskSelector';
import AdjustableNumericInput from 'App/Client/Features/Controls/AdjustableNumericInput';
import ProjectLogTable from 'App/Client/Features/Worklogs/ProjectLogTable';

import projectsAndTasks from 'App/Client/Mocks/projectsAndTasks';
import worklogs from 'App/Client/Mocks/worklogs';

const UILibrary = () => (
    <div className="container">
        <h1>Worklogs UI Library</h1>        

        <div clasName="grid-row">
            <h3>Big Buttons</h3>
            <div className="grid-col-4">
                <button className="call-to-action -lightgreen shadowed">Add to Logs</button>
            </div>
        </div>

        <div clasName="grid-row">
            <h3>Small Buttons</h3>
            <div className="grid-col-4">
                <button className="table-row-button">Edit</button>

                <button className="table-row-button">X</button>
            </div>
        </div>

        <div clasName="grid-row">
            <h3>Calendar Link Item</h3>
            <div className="grid-col-5">
                {calendarLinkItemDataSamples.map((data, key) => (
                    <div className="bordered-overlapping" key={ key } >
                        <CalendarLinkItem { ...data } />
                    </div>
                ))}
            </div>
        </div>

        <div clasName="grid-row">
            <h3>Worklog Status Header</h3>

            <div className="grid-col-8">
                <b>Using Date Object `new Date('2019-05-06')`</b>
                <StatusHeader date={ new Date('2019-05-06') } loggedMins={ 467 }/>

                <b>Using Date String `2019-05-20`</b>
                <StatusHeader date={ '2019-05-20' } loggedMins={ 500 }/>
            </div>
        </div>

        <div clasName="grid-row">
            <h3>Projects & Tasks, Adjustable Numeric Input</h3>

            <div className="grid-col-5">
                <div className="vspaced-children-10">
                    <ProjectTaskSelector projects={ projectsAndTasks } />
                </div>
            </div>

            <div className="grid-col-3" style={{ marginTop: '5px' }}>
                <div className="vspaced-children-10">
                    <AdjustableNumericInput />
                    <AdjustableNumericInput />
                </div>
            </div>
        </div>

        <div clasName="grid-row">
            <h3>Project Table</h3>
            <div className="grid-col-7">
                <ProjectLogTable worklogs={ worklogs }/>
            </div>
        </div>
    </div>
);

const calendarLinkItemDataSamples = [
    {
        loggedMins: 72,
        date: '2019-05-06'
    },
    {
        loggedMins: 6 * 60,
        date: '2019-05-07'
    }
];



export default UILibrary;
