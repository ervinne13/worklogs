
/** Action Types */
export const ADD_WORKLOG = 'ADD_WORKLOG';

/** Action Creators */

export const addWorklog = (worklog) => {
    return { type: ADD_WORKLOG, worklog };
};