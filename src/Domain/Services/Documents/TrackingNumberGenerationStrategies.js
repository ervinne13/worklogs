
import moment from 'moment';
import TrackingNumberGenerationFailedError from './Errors/TrackingNumberGenerationFailedError';

/**
 *  Generates something like:
 *      MC-20190101-000001
 *  Where:
 *      MC          = the module code
 *      20190101    = date today in YYYYMMDD format
 *      000001      = computed
 */
export const generateDailySequence = ({ module, code, lastNumberUsed, endingNumber }) => {    
    lastNumberUsed++;
    validateNumberWithinLimit(module, lastNumberUsed, endingNumber);

    const date = moment().format('YYYYMMDD');
    return {
        lastNumberUsed,
        trackingNumber: `${code}-${date}-${generatePaddedNumber(lastNumberUsed, endingNumber)}`
    };
};

/**
 *  Generates something like:
 *      MC-00000001
 *  Where:
 *      MC          = the module code
 *      000001      = computed
 */
export const generateStraightSequence = ({ module, code, lastNumberUsed, endingNumber }) => {
    lastNumberUsed++;
    validateNumberWithinLimit(module, lastNumberUsed, endingNumber);

    return {
        lastNumberUsed,
        trackingNumber: `${code}-${generatePaddedNumber(lastNumberUsed, endingNumber)}`
    };
};

const validateNumberWithinLimit = (module, number, endingNumber) => {
    if (number > endingNumber) {
        throw TrackingNumberGenerationFailedError.createFromNumberLimitReached(module)
    }
};

const generatePaddedNumber = (number, endingNumber) => {
    const padSize = `${endingNumber}`.length;
    return `${number}`.padStart(padSize, 0);
};
