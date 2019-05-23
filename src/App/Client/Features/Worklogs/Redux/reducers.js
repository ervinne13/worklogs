
import { ADD_WORKLOG } from 'App/Client/Features/Worklogs/Redux/actions';

const employeeWorklogsReducer = (state = [], action) => {
    switch(action) {
        case ADD_WORKLOG:
            return handleNewWorklog(state, action);
        default:
            return state;
    }
};

const handleNewWorklog = (state = [], action) => {
    const worklog = { ...action.worklog };
    worklog.status = 'awaiting_persistence';

    return [
        ...state,
        worklog
    ];
};

export default employeeWorklogsReducer;