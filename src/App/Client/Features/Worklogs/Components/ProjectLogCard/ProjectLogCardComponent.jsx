import React from 'react';
import HoursAndMinutes from 'App/Client/Common/Components/HoursAndMinutes';
import WorkLogActions from 'App/Client/Features/Worklogs/Components/WorkLogActions';
import './style.css'

const ProjectLogCardComponent = ({ worklogs }) => {
    const sum = worklogs => worklogs.reduce((sum, worklog) => sum + worklog.loggedMins, 0);
    const totalLoggedMins = sum(worklogs);

    const projectName = worklogs && worklogs.length > 0 ? worklogs[0].project.name : "";

    return (
        <div className="project-worklogs-card">
            <div className="title">
                <h3 className="worklog-project-name">{ projectName }</h3>                
            </div>
            <div className="body">
                <ul className="project-worklogs">
                    { worklogs && worklogs.map(worklog => (
                        <li key={ worklog.id }>
                            <div>
                                <span className="worklog-task-name">
                                    { worklog.task.name }
                                </span>
                                <WorkLogActions worklog={ worklog } />
                            </div>
                            <div className="worklog-logged-mins">
                                <HoursAndMinutes durationInMinutes={ worklog.loggedMins } />
                            </div>                          
                        </li>
                    )) }
                </ul>
                <span className="worklog-project-total-logged-mins">
                    Total: <HoursAndMinutes durationInMinutes={ totalLoggedMins } />
                </span>
            </div>
        </div>
    );
}

export default ProjectLogCardComponent;