import React from 'react';
import Select from 'react-select';

const TaskSelectInput = ({ selectedTask, tasks, name = "task" }) => (
    <Select 
        name={ name } 
        isSearchable={ true }
        getOptionValue={ task => task.id }
        getOptionLabel={ task => task.name }
        value={ selectedTask }
        options={ tasks } />
);

export default TaskSelectInput;