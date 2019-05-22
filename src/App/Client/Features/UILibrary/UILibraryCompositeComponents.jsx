import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import VerticalDateNavigator from 'App/Client/Features/Calendar/VerticalDateNavigator';

const UILibraryCompositeComponents = () => (
    <div className="app-container">
        <h1>Worklogs UI Library (Composite Components)</h1>        

        <Grid>
            <Row>
                <Col sm={ 12 } md={ 12 } lg={ 4 }>
                    <VerticalDateNavigator selectedDate={ new Date() } />
                </Col>
            </Row>
        </Grid>

    </div>
);


export default UILibraryCompositeComponents;
