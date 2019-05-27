
import { createMapper } from './ImplementationMapper';
import ImplementationNotFoundError, { UNDEFINED_IMPLEMENTATION } from 'App/Client/Common/Errors/ImplementationNotFoundError';
import UndefinedEnvVariableError from 'App/Client/Common/Errors/UndefinedEnvVariableError';

export const mapImpl = (() => {
    try {
        return createMapper(process.env.REACT_APP_SERVER_PERSISTENCE_DRIVER);
    } catch(e) {
        if (ImplementationNotFoundError.checkMatchWith(e, UNDEFINED_IMPLEMENTATION)) {
            throw UndefinedEnvVariableError.from('REACT_APP_SERVER_PERSISTENCE_DRIVER');
        }

        throw e;
    }
})();
