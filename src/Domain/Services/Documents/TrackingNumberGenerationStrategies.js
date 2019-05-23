
import moment from 'moment';
import TrackingNumberGenerationFailedError from './Errors/TrackingNumberGenerationFailedError';

export const generateDailyBased = ({ module, code, lastNumberUsed, endingNumber }) => {
    const date = moment().format('YYYYMMDD');
    lastNumberUsed++;
    validateNumberWithinLimit(module, lastNumberUsed, endingNumber);
    return {
        lastNumberUsed,
        trackingNumber: `${code}-${date}-${generatePaddedNumber(lastNumberUsed, endingNumber)}`
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
