
export const UNDEFINED_IMPLEMENTATION = 1;
export const MISSING_IMPLEMENTATION = 2;

class ImplementationNotFoundError extends Error {
    constructor(message, code = 0, probableCauseObject) {
        super(message);
        this.name = ImplementationNotFoundError.NAME;
        this.code = code;
        this.probableCauseObject = probableCauseObject;

        this.httpCode = 500;
    }

    static fromUndefinedImplementation() {
        return new ImplementationNotFoundError(
            `Tried to use implementation switching using an undefined implementation context.`,
            UNDEFINED_IMPLEMENTATION
        );
    }

    static fromMissingImplementationFromMap(map, implementation) {
        return new ImplementationNotFoundError(
            `Tried to execute implementation [ ${implementation} ] but it was not found.`,
            MISSING_IMPLEMENTATION,
            map
        );
    }

    static checkMatchWith(error, code) {
        return error.name === ImplementationNotFoundError.NAME && error.code === code;
    }
}

Object.defineProperty(
    ImplementationNotFoundError,
    'NAME',
    {
        get: () => 'ImplementationNotFoundError'
    }
);

export default ImplementationNotFoundError;