
export const makeRequiredMessageWithContext = (context) => {
    return (field) => {
        return requiredMessage(field, context);
    };
};

export const requiredMessage = (field, context) => {
    if (context) {
        return `The field ${ field } of ${ context } is required`;
    } else {
        return `The field ${ field } is required`;
    }
};