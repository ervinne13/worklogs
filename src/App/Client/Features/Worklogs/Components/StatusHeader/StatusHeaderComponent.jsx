import React from 'react';
import Moment from 'react-moment';
import HoursAndMinutes from 'App/Client/Common/Components/HoursAndMinutes';
import './style.css';

import looseDate from 'App/Client/Common/PropTypes/looseDate';

/**
 *  @prop date          The date that should be displayed in this component
 *  @prop loggedMins    (Optional) The total number of minutes that a user has logged given a date. Defaults to 0
 */
const StatusHeaderComponent = ({ date, loggedMins = 0 }) => {
    const dateObj = new Date(date);    

    return (
        <div className="status-header">
            <div className="date">
                <p>
                    <Moment format="DD MMM YYYY">{ dateObj }</Moment>
                </p>
            </div>
            <div className="total-time-logged">
                <TotalTimeLogged loggedMins={ loggedMins } />
            </div>
        </div>
    );
};

const TotalTimeLogged = ({ loggedMins }) => {
    if (loggedMins > 0) {
        return (
            <p>
                Total time logged: 
                <span className="time">
                    <HoursAndMinutes durationInMinutes={ loggedMins } />
                </span>
            </p>
        );
    } else {
        return (
            <p>No time logged yet</p>
        );
    }
};

StatusHeaderComponent.propTypes = {
    date: looseDate
};

export default StatusHeaderComponent;