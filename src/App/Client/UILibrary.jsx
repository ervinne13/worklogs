import React from 'react';
import CalendarLinkItem from 'App/Client/Features/Calendar/CalendarLinkItem';
import StatusHeader from 'App/Client/Features/Worklogs/StatusHeader';
import AdjustableNumericInput from 'App/Client/Features/Controls/AdjustableNumericInput';

const UILibrary = () => (
    <div className="container">
        <h1>Worklogs UI Library</h1>

        <h3>Calendar Link Item</h3>
        {calendarLinkItemDataSamples.map((data, key) => (
            <div className="bordered-overlapping" key={ key } style={{ width: '40%' }}>
                <CalendarLinkItem { ...data } />
            </div>
        ))}

        <h3>Worklog Status Header</h3>

        <div style={{ width: '60%' }}>
            <b>Using Date Object `new Date('2019-05-06')`</b>
            <StatusHeader date={ new Date('2019-05-06') } loggedMins={ 467 }/>

            <b>Using Date String `2019-05-20`</b>
            <StatusHeader date={ '2019-05-20' } loggedMins={ 500 }/>
        </div>

        <h3>Adjustable Numeric Input</h3>
        <AdjustableNumericInput />

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
