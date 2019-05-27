
export const EXCEEDED_DAILY_LOG_TIME = 1;

class InvalidWorklogError extends Error {
    constructor(message, code = 0) {
        super(message);
        this.code = code;
        this.name = InvalidWorklogError.NAME;

        this.httpCode = 500;
    }

    static fromExceededDailyLogTime () {
        return new InvalidWorklogError(
            `You may not write work logs that exceed 24hrs in total. Please write exceeding hours in the next day!`,
            EXCEEDED_DAILY_LOG_TIME            
        );
    }
}

Object.defineProperty(
    InvalidWorklogError,
    'NAME',
    {
        get: () => 'InvalidWorklogError'
    }
);

export default InvalidWorklogError;