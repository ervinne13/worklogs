
import EmployeeWorklogsScene from './EmployeeWorklogScene';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        worklogs: state.worklogsReducers.worklogs
    };
};

export default connect(mapStateToProps)(EmployeeWorklogsScene);