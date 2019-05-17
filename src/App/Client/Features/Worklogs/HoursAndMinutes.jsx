import React, { Fragment } from 'react';
import { createErroFromInvalidMinutesProvided } from 'App/Client/Features/Worklogs/Errors/HoursAndMinutesRenderingFailedError';

const HoursAndMinutes = ({ minutes }) => {    
    validateMinutes(minutes);

    const hours = Math.floor(minutes / 60);
    const remMins = Math.round(minutes - (hours * 60));

    const hoursDisplay = `${hours} Hours`;
    const minsDisplay = remMins ? `${remMins} Minutes` : ''

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