
import EmployeeWorklogsScene from './EmployeeWorklogScene';
import { connect } from 'react-redux';
import { loadWorklogs } from 'App/Client/Features/Worklogs/Redux/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        date: ownProps.match.params.date,
        ...state.worklogsReducers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onReadyToReceiveWorklogs: date => dispatch(loadWorklogs(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeWorklogsScene);