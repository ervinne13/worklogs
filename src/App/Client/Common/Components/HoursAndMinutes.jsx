import React, { Fragment } from 'react';
import nonZeroPositiveNumber from 'App/Client/Common/PropTypes/nonZeroPositiveNumber';
import { breakDownDurationInMinutesToHoursAndMinutes, configureToIncludeUnits } from 'Domain/Services/Worklogs/WorklogDuration';

const HoursAndMinutes = ({ durationInMinutes }) => {
    const breakDown = configureToIncludeUnits(breakDownDurationInMinutesToHoursAndMinutes);
    const { hours, minutes } = breakDown(durationInMinutes);

    return (
        <Fragment>{ hours } { minutes }</Fragment>
    );
};

HoursAndMinutes.propTypes = {
    durationInMinutes: nonZeroPositiveNumber
};

export default HoursAndMinutes;