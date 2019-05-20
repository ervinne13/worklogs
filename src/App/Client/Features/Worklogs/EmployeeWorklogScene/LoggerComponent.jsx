import React, { Fragment } from 'react';
import StatusHeader from 'App/Client/Features/Worklogs/StatusHeader';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectTaskSelector from 'App/Client/Features/Worklogs/ProjectTaskSelector';
import AdjustableNumericInput from 'App/Client/Features/Controls/AdjustableNumericInput';
import DailyWorklogsTableSet from './DailyWorklogsTableSet';

//  TODO: Remove mocks later
import projectsAndTasks from 'App/Client/Mocks/projectsAndTasks';
import worklogsMultiProject from 'App/Client/Mocks/worklogsMultiProject';

class LoggerComponent extends React.Component {
    render() {
        const date = this.props.date;
        return (
            <Fragment>
                <StatusHeader date={ date } loggedMins={ 467 }/>                
                <WorklogForm />                
                <DailyWorklogsTableSet worklogs={ worklogsMultiProject } />
            </Fragment>
        );
    }
}

const WorklogForm = () => (
    <Grid>
        <Row>
            <Col sm={ 12 } md={ 6 } >
                <div className="vspaced-children-10">
                    <ProjectTaskSelector projects={ projectsAndTasks } />
                </div>
            </Col>

            <Col sm={ 12 } md={ 3 } >
                <div className="vspaced-children-10" >
                    <AdjustableNumericInput label="Hours" className="float-right" maxValue={ 23 }/>
                    <AdjustableNumericInput label="Mins" className="float-right" maxValue={ 59 } />
                </div>
            </Col>

            <Col sm={ 12 } md={ 3 } >
                <div style={{ marginTop: '50px' }}>
                    <button className="call-to-action -lightgreen shadowed">Add to Logs</button>
                </div>
            </Col> 
        </Row>
    </Grid>
);

export default LoggerComponent;