import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';
import StatusHeader from 'App/Client/Features/Worklogs/Components/StatusHeader';
import WorklogForm from 'App/Client/Features/Worklogs/Forms/WorklogForm';
import UserDayWorklogs from './UserDayWorklogs';

//  TODO: Remove mocks later
import projects from 'App/Client/Mocks/projects';
import tasks from 'App/Client/Mocks/employeeTasks';

class EmployeeWorklogsScene extends React.Component {
    render() {
        const { worklogs } = this.props;
        const selectedDate = this.props.match.params.date;
        return (
            <Grid fluid>
                <Row>
                    <Col md={ 4 }>
                        <SideBar selectedDate={ selectedDate }/>
                    </Col>
                    <Col md={ 8 }>
                        <MainContent selectedDate={ selectedDate } worklogs={ worklogs } />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const SideBar = ({ selectedDate }) => <VerticalDateNavigator selectedDate={ selectedDate } />;
const MainContent = ({ worklogs, selectedDate, loggedMins }) => {    
    if (selectedDate) {
        return (
            <Fragment>
                <StatusHeader date={ selectedDate } loggedMins={ loggedMins } />
                <WorklogForm logDate={ selectedDate } projects={ projects } tasks={ tasks } />
                <UserDayWorklogs worklogs={ worklogs } />
            </Fragment>
        );
    } else {
        return <h1>Please Select a Date</h1>;
    }
};

export default EmployeeWorklogsScene;