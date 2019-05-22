import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import CalendarLinkItem from 'App/Client/Features/Calendar/Components/CalendarLinkItem';
import StatusHeader from 'App/Client/Features/Worklogs/Components/StatusHeader';
import AdjustableNumericInput from 'App/Client/Common/Components/AdjustableNumericInput';
import ProjectLogTable from 'App/Client/Features/Worklogs/Components/ProjectLogTable';

import Caret from 'App/Client/Common/Icons/Caret';

import worklogs from 'App/Client/Mocks/worklogs';

const UILibraryComponents = () => (
    <div className="app-container">
        <h1>Worklogs UI Library</h1>        

        <Grid fluid>
            <Row>
                <Col md={ 4 }>
                    <h2>Calendar Link Item</h2>

                    <b>Using Date Object `new Date('2019-05-06')`</b>
                    <CalendarLinkItem loggedMins={ 72 } date= { new Date('2019-05-06') } />

                    <b>Using Date String '2019-05-20'</b>
                    <CalendarLinkItem loggedMins={ 50 } date= { '2019-05-20' } />

                    <b>"Active" State</b>
                    <CalendarLinkItem loggedMins={ 120 } date= { '2019-05-21' } isActive={ true } />
                </Col>

                <Col md={ 4 }>
                    <h2>Caret Icon</h2>

                    <b>Up</b>
                    <p><Caret direction="up"/ ></p>

                    <b>Down</b>
                    <p><Caret direction="down"/ ></p>
                </Col>
            </Row>

            <Row>
                <Col md={ 4 }>
                    <h2>Big Buttons</h2>
                    <button className="call-to-action -lightgreen shadowed">Add to Logs</button>
                </Col>

                <Col md={ 4 }>
                    <h2>Small Buttons</h2>
                    <button className="table-row-button">Edit</button>

                    <button className="table-row-button">X</button>
                </Col>
            </Row>

            <Row>
                <Col md={ 8 }>
                    <h2>Worklog Status Header</h2>
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
                    <h2>Adjustable Numeric Input</h2>
                </Col>
            </Row>

            <Row>
                <Col md={ 4 }>
                    <b>No value set</b>
                    <div className="vspaced-children-10">
                        <AdjustableNumericInput label="(Label Here)" />
                    </div>
                </Col>
                <Col md={ 4 }>
                    <b>Property value = 10</b>
                    <div className="vspaced-children-10">
                        <AdjustableNumericInput label="(Label Here)" value="10" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={ 7 }>
                    <h2>Project Table</h2>
                    <ProjectLogTable worklogs={ worklogs }/>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default UILibraryComponents;
