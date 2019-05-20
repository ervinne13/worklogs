import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import VerticalDateNavigator from 'App/Client/Features/Calendar/VerticalDateNavigator';
import LoggerComponent from './LoggerComponent';

class EmployeeWorklogScene extends React.Component {
    render() {
        const date = this.props.match.params.date;
        return (
            <Grid fluid>
                <Row>
                    <Col md={ 4 }>
                        <VerticalDateNavigator />
                    </Col>
                    <Col md={ 8 }>
                        { date ? <LoggerComponent date={ date } /> : <SelectDatePrompt /> }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const SelectDatePrompt = () => (
    <h1>Please Select a Date</h1>
);

export default EmployeeWorklogScene;