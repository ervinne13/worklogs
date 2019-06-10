import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Loading from 'App/Client/Common/Icons/Loading';
import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';
import StatusHeader from 'App/Client/Features/Worklogs/Components/StatusHeader';
import WorklogForm from 'App/Client/Features/Worklogs/Forms/WorklogForm';
import UserDayWorklogs from './UserDayWorklogs';

//  TODO: Remove mocks later
import projects from 'App/Client/Mocks/projects';
import tasks from 'App/Client/Mocks/employeeTasks';

class EmployeeWorklogsScene extends React.Component {
    componentDidMount() {
        if (this.props.date) {
            this.triggerReadyToReceiveWorklogs();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
            this.triggerReadyToReceiveWorklogs();
        }
    }

    triggerReadyToReceiveWorklogs() {
        const { date, onReadyToReceiveWorklogs } = this.props;        
        if (onReadyToReceiveWorklogs) {
            onReadyToReceiveWorklogs(date);
            console.log('EmployeeWorklogsScene.componentDidMount');
        }
    }

    render() {
        console.log('rendered all');
        const { date } = this.props;
        return (
            <Grid fluid>
                <Row>
                    <Col md={ 4 }>
                        <SideBar date={ date }/>
                    </Col>
                    <Col md={ 8 }>
                        <MainContent { ...this.props }/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const SideBar = ({ date }) => <VerticalDateNavigator selectedDate={ date } />;
const MainContent = ({ worklogsLoading, worklogs, date, loggedMins }) => {
    if (date) {
        return (
            <Fragment>
                <StatusHeader date={ date } loggedMins={ loggedMins } />
                <WorklogForm logDate={ date } projects={ projects } tasks={ tasks } />
                { worklogsLoading ? <Loading size="200px" /> : <UserDayWorklogs worklogs={ worklogs } />}
            </Fragment>
        );
    } else {
        return <h1>Please Select a Date</h1>;
    }
};

export default EmployeeWorklogsScene;