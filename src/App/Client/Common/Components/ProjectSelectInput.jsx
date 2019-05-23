import React from 'react';
import Select from 'react-select';

const ProjectSelectInput = ({ selectedProject, projects, name = 'project' }) => (
    <Select 
        name={ name } 
        isSearchable={ true }
        getOptionValue={ project => project.id }
        getOptionLabel={ project => project.name }
        value={ selectedProject }
        options={ projects } />
);

export default ProjectSelectInput;