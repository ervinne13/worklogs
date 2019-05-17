
export const INVALID_OR_NO_MINUTES_PROVIDED = 1;

function HoursAndMinutesRenderingFailedError(code, message) {
    this.code = code;
    this.message = message;
    this.name = 'HoursAndMinutesRenderingFailedError';

    this.httpCode = null;   
}

export const createErroFromInvalidMinutesProvided = () => new HoursAndMinutesRenderingFailedError(INVALID_OR_NO_MINUTES_PROVIDED, "Invalid or no minutes provided.");

export default HoursAndMinutesRenderingFailedError;