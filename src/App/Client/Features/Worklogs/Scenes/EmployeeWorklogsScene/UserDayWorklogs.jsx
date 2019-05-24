import React from 'react';
import ProjectLogTable from 'App/Client/Features/Worklogs/Components/ProjectLogTable';
import ProjectLogTableComponent from 'App/Client/Features/Worklogs/Components/ProjectLogCard';
import { isViewportSmall } from 'App/Client/Common/Utilities/Viewport';

const UserDayWorklogs = ({ worklogs }) => {
    const groupedWorklogs = groupByProject(worklogs);    
    return Object.values(groupedWorklogs).map((worklogsByProject, worklogId) => {
        if (isViewportSmall()) {
            return (<ProjectLogTableComponent worklogs={ worklogsByProject } key={ worklogId } />);
        } else {
            return (<ProjectLogTable worklogs={ worklogsByProject } key={ worklogId } />);
        }
    });
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

export default UserDayWorklogs;