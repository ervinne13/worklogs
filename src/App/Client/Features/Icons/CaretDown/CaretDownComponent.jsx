import React from 'react';
import { ReactComponent as Logo } from './caret-down.svg';

const CaretDownComponent = (props) => {
    const size = '54px';
    return (
        <Logo { ...props } width={ size } height={ size } />
    );
};

export default CaretDownComponent;