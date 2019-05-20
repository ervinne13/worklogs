import React from 'react';
import './style.css';
import CalendarLinkItem from 'App/Client/Features/Calendar/CalendarLinkItem';

class VerticalDateNavigatorComponent extends React.Component {
    state = {
        displayDateSet: []
    }

    componentWillMount() {
        if (!this.props.displayDateSet) {
            this.initializeDisplayDateSet();
        }
    }

    initializeDisplayDateSet() {
        const today = new Date();
        const displayDateSet = weekDayDateSetGenerator(today);

        this.setState({ displayDateSet });
    }

    render() {
        const { displayDateSet } = this.state;

        return (
            <ul className="vertical-date-navigator">
                {displayDateSet && displayDateSet.map(date => (
                    <li key={ date.toString() } >
                        <CalendarLinkItem date={ date } />
                    </li>
                ))}
            </ul>
        );
    }
}

const weekDayDateSetGenerator = (referenceDate) => {    
    let weekDayDateSet = [];

    //  -3 = let's start 3 days before today
    for (let counter = -3; counter <= 3; counter ++) {
        const date = new Date();
        date.setDate(referenceDate.getDate() + counter);
        weekDayDateSet.push(date);
    }

    return weekDayDateSet;
};

export default VerticalDateNavigatorComponent;