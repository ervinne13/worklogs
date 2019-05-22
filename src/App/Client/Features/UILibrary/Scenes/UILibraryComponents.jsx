import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import CalendarLinkItem from 'App/Client/Features/Calendar/Components/CalendarLinkItem';
import StatusHeader from 'App/Client/Features/Worklogs/Components/StatusHeader';
import AdjustableNumericInput from 'App/Client/Common/Components/AdjustableNumericInput';
import ProjectLogTable from 'App/Client/Features/Worklogs/Components/ProjectLogTable';

import Caret from 'App/Client/Common/Icons/Caret';

import worklogs from 'App/Client/Mocks/worklogs';
import ProjectLogCard from 'App/Client/Features/Worklogs/Components/ProjectLogCard';

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
                <Col md={ 10 }>
                    <h2>Project Table</h2>
                    <ProjectLogTable worklogs={ worklogs }/>

                    <h2>Project Table (Waiting Persistence)</h2>
                    <ProjectLogTableTester />
                </Col>
            </Row>

            <Row>
                <Col md={ 4 }>
                    <h2>Project Card</h2>
                    <ProjectLogCard worklogs={ worklogs }/>
                </Col>
            </Row>
        </Grid>
    </div>
);

class ProjectLogTableTester extends React.Component {
    state = {
        worklogs,
        nextId: 0        
    };

    componentDidMount() {
        const nextId = this.state.worklogs.length;
        this.setState({ nextId });
    }

    addDummyWorklog = () => {
        let { nextId } = this.state;

        const randomFrom = 30;
        const randomTo = 180;
        const loggedMins = Math.random() * (+randomTo - +randomFrom) + +randomFrom; 

        const dummyWorklog = {
            loggedMins,
            id: ++nextId,
            status: 'awaiting_persistence',
            project: { id: "P-000002", name: "Project Juniper" },
            task: { id: "PT-000004", name: "Internal Meeting" },            
        };

        const worklogs = [ ...this.state.worklogs, dummyWorklog ];        
        this.setState({ nextId, worklogs });
    }

    setLoadingRowsDone = () => {
        let worklogs = [ ...this.state.worklogs ].map(worklog => {
            if (worklog.status === 'awaiting_persistence') {
                worklog.status = 'saved';
            }

            return worklog;
        });

        this.setState({ worklogs });
    }

    reset = () => {
        this.setState({ worklogs });
    }

    render() {
        return (
            <Fragment>
                <ProjectLogTable worklogs={ this.state.worklogs }/>
                <button onClick={ this.addDummyWorklog } >Add Item</button>
                <button onClick={ this.setLoadingRowsDone } >Set Added Item(s) Done</button>
                <button onClick={ this.reset } >Reset</button>
            </Fragment>
        );
    }
}

export default UILibraryComponents;
