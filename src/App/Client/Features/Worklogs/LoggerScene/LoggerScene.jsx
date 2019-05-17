import React from 'react';
import LogDateSet from './LogDateSet';
import LoggerComponent from './LoggerComponent';
import { Grid, Row, Col } from 'react-flexbox-grid';

class LoggerScene extends React.Component {
    render() {
        const date = this.props.match.params.date;
        return (
            <Grid fluid>
                <Row>
                    <Col md={ 4 }>
                        <LogDateSet />
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

export default LoggerScene;