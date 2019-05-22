import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';
import StatusHeader from 'App/Client/Features/Worklogs/Components/StatusHeader';
import WorklogForm from 'App/Client/Features/Worklogs/Forms/WorklogForm';
import UserDayWorklogs from './UserDayWorklogs';

//  TODO: Remove mocks later
import worklogsMultiProject from 'App/Client/Mocks/worklogsMultiProject';

class EmployeeWorklogScene extends React.Component {
    render() {
        const selectedDate = this.props.match.params.date;
        return (
            <Grid fluid>
                <Row>
                    <Col md={ 4 }>
                        <SideBar selectedDate={ selectedDate }/>
                    </Col>
                    <Col md={ 8 }>
                        <MainContent selectedDate={ selectedDate } loggedMins={ 476 }/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const SideBar = ({ selectedDate }) => <VerticalDateNavigator selectedDate={ selectedDate } />;
const MainContent = ({ selectedDate, loggedMins }) => {
    if (selectedDate) {
        return (
            <Fragment>
                <StatusHeader date={ selectedDate } loggedMins={ loggedMins } />
                <WorklogForm logDate={ selectedDate } />
                <UserDayWorklogs worklogs={ worklogsMultiProject } />
            </Fragment>
        );
    } else {
        return <h1>Please Select a Date</h1>;
    }
};

export default EmployeeWorklogScene;