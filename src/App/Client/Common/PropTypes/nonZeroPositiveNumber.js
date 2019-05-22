
const nonZeroPositiveNumber = (props, propName, componentName) => {
    componentName = componentName || 'ANONYMOUS';

    const value = props[propName];

    if (!value || value < 0) {        
        return new Error(`The property ${ propName } of component ${ componentName } is required must be a number greater than 0`);
    }

    //  no problem
    return null;
};

export default nonZeroPositiveNumber;