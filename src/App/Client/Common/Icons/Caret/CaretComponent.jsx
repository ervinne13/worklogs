import React from 'react';
import { ReactComponent as Logo } from './caret-up.svg';
import caretDirectionPropType from './caretDirectionPropType';

const CaretComponent = ({ direction, ...props }) => {
    const size = '54px';
    const transformationsPerDirection = {
        "up": "rotate(0)",
        "down": "rotate(180)",
    };
    const transform = transformationsPerDirection[direction];

    return (
        <Logo { ...props } width={ size } height={ size } transform={ transform } />
    );
};

CaretComponent.propTypes = {
    direction: caretDirectionPropType
};

export default CaretComponent;