import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';
import WorklogForm from 'App/Client/Features/Worklogs/Forms/WorklogForm';

import worklogs from 'App/Client/Mocks/worklogs';
import projects from 'App/Client/Mocks/projects';
import tasks from 'App/Client/Mocks/employeeTasks';

const UILibraryCompositeComponents = () => (
    <div className="app-container">
        <h1>Worklogs UI Library (Composite Components)</h1>

        <Grid>
            <Row>
                <Col sm={ 12 } md={ 12 } lg={ 4 }>
                    <h2>Vertical Date Navigator (No Date Selected)</h2>
                    <VerticalDateNavigator />
                </Col>
                <Col sm={ 12 } md={ 12 } lg={ 4 }>
                    <h2>Vertical Date Navigator (Selected Date)</h2>
                    <VerticalDateNavigator selectedDate={ new Date() } />
                </Col>
            </Row>
            <Row>
                <Col sm={ 12 } md={ 8 }>
                    <h2>Worklog Form (Empty)</h2>
                    <WorklogForm projects={ projects } tasks={ tasks } />
                </Col>

                <Col sm={ 12 } md={ 8 }>
                    <h2>Worklog Form (Has Value)</h2>
                    <b>Check console after clicking "ADD TO LOGS"</b>
                    <WorklogForm onAddToLog={ console.log } worklog={ worklogs[0] } projects={ projects } tasks={ tasks } />
                </Col>
            </Row>
        </Grid>

    </div>
);


export default UILibraryCompositeComponents;
