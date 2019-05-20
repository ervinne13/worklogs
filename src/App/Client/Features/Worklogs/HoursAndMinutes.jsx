import React, { Fragment } from 'react';
import { createErroFromInvalidMinutesProvided } from 'App/Client/Features/Worklogs/Errors/HoursAndMinutesRenderingFailedError';

const HoursAndMinutes = ({ minutes }) => {    
    validateMinutes(minutes);

    const hours = Math.floor(minutes / 60);
    const remMins = Math.round(minutes - (hours * 60));

    const hoursLabel = hours > 1 ? 'Hours' : 'Hour';
    const hoursDisplay = `${hours} ${hoursLabel}`;
    const minsLabel = remMins > 1 ? 'Minutes' : 'Minute';
    const minsDisplay = remMins ? `${remMins} ${minsLabel}` : ''

    return (
        <Fragment>
            { hoursDisplay } { minsDisplay }
        </Fragment>
    );
};

const validateMinutes = (minutes) => {
    if (!minutes || minutes <= 0) {
        throw createErroFromInvalidMinutesProvided();
    }
};

export default HoursAndMinutes;