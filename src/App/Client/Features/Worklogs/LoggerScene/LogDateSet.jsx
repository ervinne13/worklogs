import React from 'react';
import CalendarLinkItem from 'App/Client/Features/Calendar/CalendarLinkItem';

class LogDateSet extends React.Component {
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
            <div>
                {displayDateSet.map(date => <CalendarLinkItem date={ date } key={ date.toString() } />)}
            </div>
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

export default LogDateSet;