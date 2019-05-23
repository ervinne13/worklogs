
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './style.css';

import AdjustableNumericInput from 'App/Client/Common/Components/AdjustableNumericInput';
import ProjectSelectInput from 'App/Client/Common/Components/ProjectSelectInput';
import TaskSelectInput from 'App/Client/Common/Components/TaskSelectInput';

import { breakDownDurationInMinutesToHoursAndMinutes, getDurationInMinutesFromBreakdown } from 'Domain/Services/Worklogs/WorklogDuration'

class WorklogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialStateBasedOnProps(props);
    }

    getInitialStateBasedOnProps(props) {
        const { worklog } = props;
        let project = null, task = null, hours = 0, minutes = 0;

        if (worklog) {
            const durationBreakdown = breakDownDurationInMinutesToHoursAndMinutes(worklog.loggedMins);
            hours = durationBreakdown.hours;
            minutes = durationBreakdown.minutes;

            project = worklog.project;
            task = worklog.task;
        }

        return { project, task, hours, minutes };
    }

    getWorklog() {
        const { project, task } = this.state;
        const breakdown = {
            hours: this.state.hours,
            minutes: this.state.minutes
        };
        
        return {            
            project,
            task,
            loggedMins: getDurationInMinutesFromBreakdown(breakdown)
        };
    }

    onInputValueChanged(input, value) {
        this.setState({ [input]: value });
    }

    onAddToLog = () =>{
        const { onAddToLog: parentOnAddToLog } = this.props;

        if (parentOnAddToLog) {
            parentOnAddToLog(this.getWorklog());
        }
    }

    render() {
        const { hours, minutes, project, task } = this.state;
        const { projects, tasks } = this.props;

        return (
            <div className="worklog-form">
                <Grid>
                    <Row>
                        <Col sm={12} md={6} >
                            <div className="vspaced-children-10">
                                <ProjectSelectInput 
                                    selectedProject={project} 
                                    projects={projects}
                                    onProjectSelected={ project => this.onInputValueChanged('project', project) } />

                                <TaskSelectInput 
                                    selectedTask={task} 
                                    tasks={tasks} 
                                    onTaskSelected={ task => this.onInputValueChanged('task', task) } />
                            </div>
                        </Col>

                        <Col sm={12} md={3} >
                            <div className="vspaced-children-10" >
                                <LoggedHoursInput 
                                    loggedHours={hours} 
                                    onChange={ hours => this.onInputValueChanged('hours', hours) } />
                                <LoggedMinutesInput 
                                    loggedMinutes={minutes} 
                                    onChange={ minutes => this.onInputValueChanged('minutes', minutes) } />
                            </div>
                        </Col>

                        <Col sm={12} md={3} >
                            <div style={{ marginTop: '50px' }}>
                                <button onClick={ this.onAddToLog } className="call-to-action -lightgreen shadowed">Add to Logs</button>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const LoggedHoursInput = ({ loggedHours, onChange }) => (
    <AdjustableNumericInput
        value={loggedHours}
        label="Hours"
        className="float-right"
        onChange={onChange}
        maxValue={23} />
);

const LoggedMinutesInput = ({ loggedMinutes, onChange }) => (
    <AdjustableNumericInput
        value={loggedMinutes}
        label="Minutes"
        className="float-right"
        onChange={onChange}
        maxValue={59} />
);

export default WorklogForm;