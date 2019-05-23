import React from 'react';
import Select from 'react-select';

const ProjectSelectInput = ({ selectedProject, projects, onProjectSelected, name = 'project' }) => (
    <Select 
        name={ name } 
        isSearchable={ true }
        getOptionValue={ project => project.id }
        getOptionLabel={ project => project.name }
        value={ selectedProject }
        onChange={ onProjectSelected }
        options={ projects } />
);

export default ProjectSelectInput;