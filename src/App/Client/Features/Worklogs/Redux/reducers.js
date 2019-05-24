
import { ADD_WORKLOG, RECEIVE_WORKLOGS } from 'App/Client/Features/Worklogs/Redux/actions';

const initialState = {
    worklogs: []
};

const employeeWorklogsReducer = (state = initialState, action) => {    
    switch(action.type) {
        case RECEIVE_WORKLOGS:
            return handleReceivedWorklogs();
        case ADD_WORKLOG:
            return handleNewWorklog(state, action);
        default:        
            return state;
    }
};

const handleReceivedWorklogs = (state, action) => {
    const worklogs = { ...action.worklogs };
    return { ...state, worklogs }
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