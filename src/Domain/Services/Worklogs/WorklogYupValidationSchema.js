
import { object, string, number } from 'yup';
import { makeRequiredMessageWithContext } from 'Domain/Common/Validation';
import { testIfValid as testDateOnlyStringIfValid, ERROR_MESSAGE } from 'Domain/Common/Validation/DateOnlyString';

const worklogRequiredMessage = makeRequiredMessageWithContext("worklog");
const worklogProjectRequiredMessage = makeRequiredMessageWithContext("worklog's project");
const taskProjectRequiredMessage = makeRequiredMessageWithContext("worklog's task");

export default object().shape({
    logDate: string()
        .required(worklogRequiredMessage('logDate'))
        .test('date-only-string', ERROR_MESSAGE, testDateOnlyStringIfValid),
    loggedMins: number()
        .typeError("The field loggedMins must be numeric")
        .min(1, "The field loggedMins must be greater than 1 to be valid")
        .required(worklogRequiredMessage('loggedMins')),
    project: object()
        .required(worklogRequiredMessage('project'))
        .shape({
            id: string()
                .required(worklogProjectRequiredMessage('id')),
            name: string()
                .required(worklogProjectRequiredMessage('name'))
        }),
    task: object()
        .required(worklogRequiredMessage('task'))
        .shape({
            id: string()
                .required(taskProjectRequiredMessage('id')),
            name: string()
                .required(taskProjectRequiredMessage('name'))
        }),
});