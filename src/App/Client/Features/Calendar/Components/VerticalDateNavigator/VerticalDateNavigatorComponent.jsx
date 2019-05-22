import React, { Fragment } from 'react';
import './style.css';
import CalendarLinkItem from 'App/Client/Features/Calendar/Components/CalendarLinkItem';
import Caret from 'App/Client/Common/Icons/Caret';

import looseDate from 'App/Client/Common/PropTypes/looseDate';

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
                                isActive={ selectedDate && (new Date(selectedDate)).getDate() === date.getDate() } 
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
    <button className="navigation-button" onClick={ onClick } >        
        <Caret direction={ direction } />
    </button>
);

VerticalDateNavigatorComponent.propTypes = {
    selectedDate: looseDate
};

export default VerticalDateNavigatorComponent;