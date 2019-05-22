import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import CalendarLinkItem from 'App/Client/Features/Calendar/CalendarLinkItem';
import StatusHeader from 'App/Client/Features/Worklogs/StatusHeader';
import ProjectTaskSelector from 'App/Client/Features/Worklogs/ProjectTaskSelector';
import AdjustableNumericInput from 'App/Client/Features/Controls/AdjustableNumericInput';
import ProjectLogTable from 'App/Client/Features/Worklogs/ProjectLogTable';

import projectsAndTasks from 'App/Client/Mocks/projectsAndTasks';
import worklogs from 'App/Client/Mocks/worklogs';

const UILibraryComponents = () => (
    <div className="app-container">
        <h1>Worklogs UI Library</h1>        

        <Grid fluid>
            <Row>
                <Col md={ 4 }>
                    <h3>Big Buttons</h3>
                    <button className="call-to-action -lightgreen shadowed">Add to Logs</button>
                </Col>
            </Row>

            <Row>
                <Col md={ 4 }>
                    <h3>Small Buttons</h3>
                    <button className="table-row-button">Edit</button>

                    <button className="table-row-button">X</button>
                </Col>
            </Row>

            <Row>
                <Col md={ 5 }>
                    <h3>Calendar Link Item</h3>

                    <b>Using Date Object `new Date('2019-05-06')`</b>
                    <CalendarLinkItem loggedMins={ 72 } date= { new Date('2019-05-06') } />

                    <b>Using Date String '2019-05-20'</b>
                    <CalendarLinkItem loggedMins={ 50 } date= { '2019-05-20' } />

                    <b>"Active" State</b>
                    <CalendarLinkItem loggedMins={ 120 } date= { '2019-05-21' } isActive={ true } />
                </Col>
            </Row>

            <Row>
                <Col md={ 8 }>
                    <h3>Worklog Status Header</h3>
                    <b>Using Date Object `new Date('2019-05-06')`</b>
                    <StatusHeader date={ new Date('2019-05-06') } loggedMins={ 467 } />

                    <b>Using Date String `2019-05-20`</b>
                    <StatusHeader date={ '2019-05-20' } loggedMins={ 500 } />

                    <b>Time logged is 0</b>
                    <StatusHeader date={ '2019-05-21' } loggedMins={ 0 } />
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <h3>Projects & Tasks, Adjustable Numeric Input</h3>
                </Col>

                <Col md={ 5 }>
                    <div className="vspaced-children-10">
                        <ProjectTaskSelector projects={ projectsAndTasks } />
                    </div>
                </Col>

                <Col md={ 3 }>
                    <div className="vspaced-children-10">
                        <AdjustableNumericInput />
                        <AdjustableNumericInput />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={ 7 }>
                    <h3>Project Table</h3>
                    <ProjectLogTable worklogs={ worklogs }/>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default UILibraryComponents;
