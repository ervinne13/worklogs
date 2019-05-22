import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';

const UILibraryCompositeComponents = () => (
    <div className="app-container">
        <h1>Worklogs UI Library (Composite Components)</h1>

        <Grid>
            <Row>
                <Col sm={ 12 } md={ 12 } lg={ 4 }>
                    <h2>Vertical Date Navigator</h2>
                    <VerticalDateNavigator />
                </Col>
                <Col sm={ 12 } md={ 12 } lg={ 4 }>
                    <h2>Vertical Date Navigator (Selected Date)</h2>
                    <VerticalDateNavigator selectedDate={ new Date() } />
                </Col>
            </Row>
        </Grid>

    </div>
);


export default UILibraryCompositeComponents;
