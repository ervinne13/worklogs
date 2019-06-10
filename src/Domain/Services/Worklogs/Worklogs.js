import WorklogYupValidationSchema from './WorklogYupValidationSchema';
import InvalidWorklogError from 'Domain/Services/Worklogs/Errors/InvalidWorklogError';

export const createModule = ({ worklogsPersistenceModule }) => {
    const validateWorklog = async worklog => {        
        const validatedWorklog = await validateWorklogFields(worklog)
        await validateWorklogWithinTotalTimeLogged(validatedWorklog);

        return validatedWorklog;
    };
    
    const validateWorklogFields = async worklog => {
        const options = { 
            abortEarly: false,   //  Let's get all errors by preventing abort on error found
        };
    
        return await WorklogYupValidationSchema.validate(worklog, options);
    };
    
    const validateWorklogWithinTotalTimeLogged = async worklog => {
        const totalLoggedMins = await worklogsPersistenceModule.getTotalLoggedMinsInDate(worklog.logDate);
        const didExceed24Hrs = totalLoggedMins + worklog.loggedMins > ( 24 * 60 );
        if (didExceed24Hrs) {
            throw InvalidWorklogError.fromExceededDailyLogTime();
        }
    };
    
    const saveWorklog = async worklog => {
        const validatedWorklog = await validateWorklogFields(worklog);
        return worklogsPersistenceModule.saveWorklog(validatedWorklog);
    };

    const loadWorklogs = (date, userId) => {
        return worklogsPersistenceModule.loadWorklogs(date, userId);
    };

    return {
        validateWorklog,
        saveWorklog,
        loadWorklogs
    };
};