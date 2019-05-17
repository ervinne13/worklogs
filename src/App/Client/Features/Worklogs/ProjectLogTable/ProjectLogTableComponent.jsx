import React, { Fragment } from 'react';
import HoursAndMinutes from 'App/Client/Features/Worklogs/HoursAndMinutes';
import './style.css'

const ProjectLogTableComponent = ({ worklogs }) => {

    const sum = worklogs => worklogs.reduce((sum, worklog) => sum + worklog.loggedMins, 0);
    const totalLoggedMins = sum(worklogs);

    return (
        <table className="project-log-table">
           <tbody>
                { 
                    worklogs.map((log, index) => 
                        <Row 
                            log={ log } 
                            showsProject={ index === 0 } 
                            key={ log.id } />) 
                }
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="text-bold">
                        <HoursAndMinutes minutes={ totalLoggedMins } />
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

const Row = ({ log, showsProject }) => {

    const project = showsProject ? log.project.name : "";

    return (
        <tr>
            <td>{ project }</td>
            <td>{ log.task.name }</td>
            <td><RowActions log={ log } /></td>
        </tr>
    );
};

const RowActions = ({ log }) => {
    return (
        <Fragment>
            <HoursAndMinutes minutes={ log.loggedMins } />
            <button className="table-row-button">X</button>
        </Fragment>
    );
};

export default ProjectLogTableComponent;