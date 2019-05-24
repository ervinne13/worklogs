import { saveWorklog } from 'App/Client/Features/Worklogs/Persistence/WorklogsPersistence';


/** Action Types */
export const ADD_WORKLOG = 'ADD_WORKLOG';

/** Action Creators */

export const addWorklog = (worklog) => {
    return function(dispatch) {
        return saveWorklog(worklog)
            .then(() => {
                return dispatch({ type: ADD_WORKLOG, worklog });
            });
    };
};