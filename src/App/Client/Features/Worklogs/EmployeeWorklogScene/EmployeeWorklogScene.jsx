import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import VerticalDateNavigator from 'App/Client/Features/Calendar/VerticalDateNavigator';
import StatusHeader from 'App/Client/Features/Worklogs/StatusHeader';
import WorklogForm from 'App/Client/Features/Worklogs/WorklogForm';
import DailyWorklogsTableSet from './DailyWorklogsTableSet';


//  TODO: Remove mocks later
import worklogsMultiProject from 'App/Client/Mocks/worklogsMultiProject';

class EmployeeWorklogScene extends React.Component {
    render() {
        const selectedDate = this.props.match.params.date;
        return (
            <Grid fluid>
                <Row>
                    <Col md={ 4 }>
                        <VerticalDateNavigator selectedDate={ selectedDate }/>
                    </Col>
                    <Col md={ 8 }>                        
                        { selectedDate ? <LoggerComponent date={ selectedDate } /> : <SelectDatePrompt /> }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const SelectDatePrompt = () => (
    <h1>Please Select a Date</h1>
);

const LoggerComponent = ({ date }) => (
    <Fragment>
        <StatusHeader date={ date } loggedMins={ 467 }/>
        <WorklogForm />
        <DailyWorklogsTableSet worklogs={ worklogsMultiProject } />
    </Fragment>
);

export default EmployeeWorklogScene;