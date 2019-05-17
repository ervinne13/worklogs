import React from 'react';
import Moment from 'react-moment';
import HoursAndMinutes from 'App/Client/Features/Worklogs/HoursAndMinutes';
import './style.css';

const StatusHeaderComponent = ({ date, loggedMins }) => {
    const dateObj = date instanceof Date ? date : new Date(date);

    return (
        <div className="status-header">
            <div className="date">
                <p>
                    <Moment format="DD MMM YYYY">{ dateObj }</Moment>
                </p>
            </div>
            <div className="total-time-logged">
                <p>
                    Total time logged: 
                    <span className="time">
                        <HoursAndMinutes minutes={ loggedMins } />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default StatusHeaderComponent;