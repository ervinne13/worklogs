import React, { Fragment } from 'react';
import nonZeroPositiveNumber from 'App/Client/Common/PropTypes/nonZeroPositiveNumber';

const HoursAndMinutes = ({ minutes }) => {    
    const hours = Math.floor(minutes / 60);
    const remMins = Math.round(minutes - (hours * 60));

    const hoursDisplay = `${ hours } ${ hours > 1 ? 'Hours' : 'Hour' }`;
    const minsDisplay = remMins ? `${ remMins } ${ remMins > 1 ? 'Minutes' : 'Minute' }` : '';

    return (
        <Fragment>
            { hoursDisplay } { minsDisplay }
        </Fragment>
    );
};

HoursAndMinutes.propTypes = {
    minutes: nonZeroPositiveNumber
};

export default HoursAndMinutes;