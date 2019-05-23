import React from 'react';
import Select from 'react-select';

const TaskSelectInput = ({ selectedTask, tasks, onTaskSelected, name = "task" }) => (
    <Select 
        name={ name } 
        isSearchable={ true }
        getOptionValue={ task => task.id }
        getOptionLabel={ task => task.name }
        value={ selectedTask }
        onChange={ onTaskSelected }
        options={ tasks } />
);

export default TaskSelectInput;