
import FirestorePersistenceModule from 'Persistence/Worklogs/FirestorePersistenceModule';
import { createModule } from 'Domain/Services/Worklogs/Worklogs';

/** Action Types */
export const RECEIVE_WORKLOGS = 'RECEIVE_WORKLOGS';
export const ADD_WORKLOG = 'ADD_WORKLOG';

/** Action Creators */
const WorklogsModule = createModule({ worklogsPersistenceModule: FirestorePersistenceModule });

export const addWorklog = (worklog) => {
    return async function (dispatch) {
        await WorklogsModule.validateWorklog(worklog);
        dispatch({ type: ADD_WORKLOG, worklog });
        await WorklogsModule.saveWorklog(worklog);
        return await loadWorklogsAndDispatch(worklog.logDate, dispatch);
    };
};

export const loadWorklogs = (date) => {    
    return function (dispatch) {
        return loadWorklogsAndDispatch(date, dispatch);
    };
};

const loadWorklogsAndDispatch = async (date, dispatch) => {
    const worklogs = await WorklogsModule.loadWorklogs(date);
    return dispatch({ type: RECEIVE_WORKLOGS, worklogs });
};