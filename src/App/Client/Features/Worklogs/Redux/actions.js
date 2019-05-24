import { saveWorklog, loadWorklogs as loadWorklogsFromPersistence } from 'App/Client/Features/Worklogs/Persistence/WorklogsPersistence';

/** Action Types */
export const RECEIVE_WORKLOGS = 'RECEIVE_WORKLOGS';
export const ADD_WORKLOG = 'ADD_WORKLOG';

/** Action Creators */

export const addWorklog = (worklog) => {    
    return function(dispatch) {
        dispatch({ type: ADD_WORKLOG, worklog });
        return saveWorklog(worklog)
            .then(loadWorklogsFromPersistence)
            .then(worklogs => {
                return dispatch({ type: RECEIVE_WORKLOGS, worklogs });
            });
    };
};

export const loadWorklogs = (date) => {    
    return function(dispatch) {
        return loadWorklogsFromPersistence(date)
            .then(worklogs => {                
                return dispatch({ type: RECEIVE_WORKLOGS, worklogs });
            });
    };
};