import React, { Fragment } from 'react';
import Select from 'react-select';

class ProjectTaskSelector extends React.Component {
    state = {
        options: {
            projects: [],
            tasks: []
        }
    }

    componentDidMount() {
        if (this.props.projects) {
            this.loadProjectsToOptions(this.props.projects)
        }
    }

    loadProjectsToOptions = (projects) => {
        const options = { ...this.state.options };
        options.projects = projects.map(project => ({ value: project.id, label: project.name, project }));

        this.setState({ options });
    }

    loadProjectTasksToOptions = (project) => {
        const options = { ...this.state.options };
        options.tasks = project.tasks.map(task => ({ value: task.id, label: task.name, task }));

        this.setState({ options });
    };

    onProjectSelected = (projectOption) => {
        const project = projectOption.project;
        this.loadProjectTasksToOptions(project);
        this.setState({ selectedProject: project });
    }
    
    onTaskSelected = (taskOption) => {
        const task = taskOption.task;
        this.setState({ selectedTask: task });        
    }

    render() {
        return (
            <Fragment>
                <Select 
                    name="selectedProject" 
                    isSearchable={ true }
                    options={ this.state.options.projects } 
                    onChange={ this.onProjectSelected } />

                <Select 
                    name="selectedTask" 
                    isSearchable={ true }
                    options={ this.state.options.tasks } />
            </Fragment>
        );
    }
}

export default ProjectTaskSelector;