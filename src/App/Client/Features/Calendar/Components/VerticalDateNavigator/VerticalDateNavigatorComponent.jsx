import React, { Fragment } from 'react';
import './style.css';
import CalendarLinkItem from 'App/Client/Features/Calendar/Components/CalendarLinkItem';
import Caret from 'App/Client/Common/Icons/Caret';

import optionalLooseDate from 'App/Client/Common/PropTypes/optionalLooseDate';

/**
 *  @prop selectedDate     (Optional) The date that should be highlighted
 */
class VerticalDateNavigatorComponent extends React.Component {
    state = {
        displayDateSet: [],
        referenceDate: new Date()
    }

    componentDidMount() {
        this.refreshDisplayedDateSet();
    }

    refreshDisplayedDateSet() {
        const { selectedDate } = this.props;
        const referenceDate = selectedDate ? new Date(selectedDate) : new Date();

        this.setDisplayedDateSet(referenceDate);
    }    

    navigate(direction) {
        let referenceDate = new Date(this.state.referenceDate);
        const addend = direction === 'up' ? -1 : 1;

        referenceDate.setDate(referenceDate.getDate() + addend);
        this.setDisplayedDateSet(referenceDate);
    }

    setDisplayedDateSet(referenceDate) {
        const displayDateSet = this.generateWeekDatesBasedOnDate(referenceDate);
        this.setState({ referenceDate, displayDateSet });
    }

    generateWeekDatesBasedOnDate(referenceDate) {
        let weekDayDateSet = [];

        //  -3 = let's start 3 days before today
        for (let counter = -3; counter <= 3; counter ++) {
            const date = new Date(referenceDate);
            date.setDate(referenceDate.getDate() + counter);
            weekDayDateSet.push(date);
        }

        return weekDayDateSet;
    }

    render() {
        const { displayDateSet } = this.state;
        const { selectedDate } = this.props;

        return (
            <Fragment>
                <Navigator direction="up" onClick={ () => this.navigate("up") } />
                <ul className="vertical-date-navigator">
                    {displayDateSet && displayDateSet.map(date => (
                        <li key={ date.toString() } >
                            <CalendarLinkItem 
                                date={ date } 
                                isActive={ testDateMatch(selectedDate, date) } 
                            />
                        </li>
                    ))}
                </ul>
                <Navigator direction="down" onClick={ () => this.navigate("down") } />
            </Fragment>
        );
    }
}

const Navigator = ({ direction, onClick }) => (
    <button className="navigation-btn" onClick={ onClick } >        
        <Caret direction={ direction } />
    </button>
);

const testDateMatch = (date1, date2) => {
    return date1 && date2
        && (new Date(date1)).getFullYear() === date2.getFullYear()
        && (new Date(date1)).getDate() === date2.getDate()
        && (new Date(date1)).getMonth() === date2.getMonth()
    ;
};

VerticalDateNavigatorComponent.propTypes = {
    selectedDate: optionalLooseDate
};

export default VerticalDateNavigatorComponent;