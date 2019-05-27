import ImplementationNotFoundError from "App/Client/Common/Errors/ImplementationNotFoundError";

export const createMapper = (implContext) => {
    validateImplContext(implContext);
    return (map) => {
        validateMap(map, implContext);
        return function() {            
            return map[implContext](...arguments);
        };
    };
};

const validateImplContext = implContext => {
    if (!implContext) {
        throw ImplementationNotFoundError.fromUndefinedImplementation();
    }
};

const validateMap = (map, implContext) => {
    if (!map[implContext]) {
        throw ImplementationNotFoundError.fromMissingImplementationFromMap(map, implContext);
    }
};