
export const NUMBER_LIMIT_REACHED = 1;

class TrackingNumberGenerationFailedError {
    constructor(message, code) {        
        this.code = code;
        this.message = message;

        this.httpCode = 500;
    }

    static createFromNumberLimitReached(module) {
        return new TrackingNumberGenerationFailedError(
            `Unable to create new tracking number for module ${module}. Limit reached!`,
            NUMBER_LIMIT_REACHED
        );
    }
}

export default TrackingNumberGenerationFailedError;