
class UndefinedEnvVariableError extends Error {
    constructor(message, envVariable) {
        super(message);
        this.name = 'UndefinedEnvVariableError';
        this.envVariable = envVariable;
        this.httpCode = 500;
    }

    static from(envVariable) {
        return new UndefinedEnvVariableError(
            `The environment variable [ ${envVariable} ] must be defined`,
            envVariable
        );
    }
}

export default UndefinedEnvVariableError;