
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectTaskSelector from 'App/Client/Features/Worklogs/Components/ProjectTaskSelector';
import AdjustableNumericInput from 'App/Client/Common/Components/AdjustableNumericInput';
import './style.css';

//  TODO: remove later
import projectsAndTasks from 'App/Client/Mocks/projectsAndTasks';

const WorklogForm = () => (
    <div className="worklog-form">
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
    </div>
);

export default WorklogForm;