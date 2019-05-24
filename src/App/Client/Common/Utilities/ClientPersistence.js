
export const mapImpl = map => {
    const driver = process.env.REACT_APP_CLIENT_PERSISTENCE_DRIVER;    
    return function() {
        return map[driver](...arguments);
    };
};
