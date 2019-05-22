
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectTaskSelector from 'App/Client/Features/Worklogs/ProjectTaskSelector';
import AdjustableNumericInput from 'App/Client/Features/Controls/AdjustableNumericInput';

//  TODO: remove later
import projectsAndTasks from 'App/Client/Mocks/projectsAndTasks';

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

export default WorklogForm;