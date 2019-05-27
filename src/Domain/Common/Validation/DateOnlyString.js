
import moment from 'moment';

export const FORMAT = 'YYYY-MM-DD';
export const ERROR_MESSAGE = `Date format must be ${ FORMAT }`;

export const testIfValid = value => {
    return moment(value, FORMAT).format(FORMAT) === value;
};