import React from 'react';
import Moment from 'react-moment';
import HoursAndMinutes from 'App/Client/Features/Worklogs/HoursAndMinutes';
import './style.css';

import looseDate from 'App/Client/Common/PropTypes/looseDate';

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
                    <HoursAndMinutes minutes={ loggedMins } />
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