import React from 'react';
import HoursAndMinutes from 'App/Client/Common/Components/HoursAndMinutes';
import Loading from 'App/Client/Common/Icons/Loading';
import WorkLogActions from 'App/Client/Features/Worklogs/Components/WorkLogActions';
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
                        <HoursAndMinutes durationInMinutes={ totalLoggedMins } />
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

const Row = ({ log, showsProject }) => {

    const project = showsProject ? log.project.name : "";
    const isSaving = log.status === 'awaiting_persistence';
    const isSaved = log.status === 'saved';

    let rowIndicatorClass = '';

    if (isSaving) {
        rowIndicatorClass = '-is-loading';
    } else if (isSaved) {
        rowIndicatorClass = '-is-saved';
    }

    return (
        <tr className={ `worklog-table-row ${ rowIndicatorClass }` }>
            <td>{ project }</td>
            <td>{ log.task.name } { isSaving ? '(saving)' : '' } </td>
            <td>
                <HoursAndMinutes durationInMinutes={ log.loggedMins } />
                { isSaving ? <Loading size="24px" style={{ marginLeft: '8px' }} /> : <WorkLogActions worklog={ log } /> }
            </td>
        </tr>
    );
};

export default ProjectLogTableComponent;