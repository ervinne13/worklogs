import React from 'react';

const WorkLogActions = ({ worklog, onEditCommand, onRemoveCommand }) => (
    <span className="worklog-actions">            
        <button className="table-row-button" onClick={ () => { onEditCommand(worklog) } }>Edit</button>
        <button className="table-row-button" onClick={ () => { onRemoveCommand(worklog) } }>X</button>
    </span>
);

export default WorkLogActions;