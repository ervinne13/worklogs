
import WorklogForm from './WorklogForm';
import { connect } from 'react-redux';
import { addWorklog } from 'App/Client/Features/Worklogs/Redux/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToLog: worklog => dispatch(addWorklog(worklog))
    }
}

export default connect(null, mapDispatchToProps)(WorklogForm);