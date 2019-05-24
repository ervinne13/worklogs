
import { ADD_WORKLOG, RECEIVE_WORKLOGS } from 'App/Client/Features/Worklogs/Redux/actions';

const initialState = {
    worklogsLoading: true,
    worklogs: [],
    loggedMins: 0
};

const employeeWorklogsReducer = (state = initialState, action) => {    
    switch(action.type) {
        case RECEIVE_WORKLOGS:
            return handleReceivedWorklogs(state, action);
        case ADD_WORKLOG:
            return handleNewWorklog(state, action);
        default:        
            return state;
    }
};

const handleReceivedWorklogs = (state, action) => {
    const worklogs = [ ...action.worklogs ];    
    const worklogsLoading = false;
    const loggedMins = worklogs.reduce((sum, worklog) => sum + worklog.loggedMins, 0);
    return { ...state, worklogsLoading, worklogs, loggedMins }
};

const handleNewWorklog = (state = [], action) => {
    const worklog = { ...action.worklog };
    
    worklog.status = 'awaiting_persistence';

    return {
        ...state,
        worklogs: [ ...state.worklogs, worklog ]
    }
};

export default employeeWorklogsReducer;