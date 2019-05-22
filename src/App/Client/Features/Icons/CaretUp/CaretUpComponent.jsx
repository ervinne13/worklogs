import React from 'react';
import { ReactComponent as Logo } from './caret-up.svg';

const CaretUpComponent = (props) => {
    const size = '54px';
    return (
        <Logo { ...props } width={ size } height={ size } />
    );
};

export default CaretUpComponent;