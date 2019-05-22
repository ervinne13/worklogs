import React from 'react';
import ProjectLogTable from 'App/Client/Features/Worklogs/Components/ProjectLogTable';

const DailyWorklogsTableSet = ({ worklogs }) => {
    const groupedWorklogs = groupByProject(worklogs);    
    return Object.values(groupedWorklogs).map((worklogsByProject, worklogId) => 
        <ProjectLogTable worklogs={ worklogsByProject } key={ worklogId } />
    );
};

const groupByProject = (worklogs) => {
    let groupedWorklogs = [];    

    worklogs.forEach(log => {
        const id = log.project.id;
        if (id in groupedWorklogs) {
            groupedWorklogs[id].push(log);
        } else {
            groupedWorklogs[id] = [ log ];
        }
    });

    return groupedWorklogs;
};

export default DailyWorklogsTableSet;