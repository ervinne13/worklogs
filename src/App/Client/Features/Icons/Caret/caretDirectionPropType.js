
const caretDirectionPropType = (props, propName, componentName) => {
    componentName = componentName || 'ANONYMOUS';
    const validDirections = [ "up", "down" ];

    const direction = props[propName];
    const isValid = validDirections.indexOf(direction) > -1;

    if (!isValid) {
        return new Error(`The property ${ propName } of component ${ componentName } is required and must be any of the following: ${ validDirections.join(', ') }`);
    }

    //  no problem
    return null;
};

export default caretDirectionPropType;