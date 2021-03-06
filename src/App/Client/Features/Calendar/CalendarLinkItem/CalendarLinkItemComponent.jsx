import React from 'react';
import HoursAndMinutes from 'App/Client/Features/Worklogs/HoursAndMinutes';
import Moment from 'react-moment'
import './style.css';

const CalendarLinkItemComponent = ({ loggedMins, date }) => {
    const dateObj = new Date(date);

    return (
        <div className="calendar-link-item">
            <div className="calendar-link-item-content">
                <DayOfWeek date={ dateObj } />
                <TimeLogged loggedMins={ loggedMins } />
            </div>
            <DayOfMonth date={ dateObj} />
        </div>
    );
};

const DayOfWeek = ({ date }) => {
    return (
        <span className="day-of-week">
            <Moment format="dddd">{ date }</Moment>
        </span>
    );
};

const TimeLogged = ({ loggedMins }) => {    
    return (
        <span className="time-logged"><HoursAndMinutes minutes={ loggedMins } /> Logged</span>
    );
};

const DayOfMonth = ({ date }) => {
    const dateOfMonth = date.getDate();
    const displayText = `${dateOfMonth}${getOrdinal(dateOfMonth)}`;

    return (
        <span className="day-of-month">{ displayText }</span>
    );
}

/**
 * TODO: Check if this should be moved to domain later
 */
const getOrdinal = (number) => {
    if (number > 3 && number < 21) return 'th'; 
    switch (number % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
};

export default CalendarLinkItemComponent;