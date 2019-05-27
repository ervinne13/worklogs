
/**
 * @param Error error   must be o
 */
export const logError = (error) => {
    if (process.env.NODE_ENV !== 'production') {        
        console.error(error);

        if (error.probableCauseObject) {
            console.error('Probable Cause Object', error.probableCauseObject);
        }
    }

    //  TODO: write to error log file
};