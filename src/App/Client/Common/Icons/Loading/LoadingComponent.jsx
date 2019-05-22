import React from 'react';
import { ReactComponent as Logo } from './tail-spin.svg';
import './style.css';

const LoadingComponent = ({ size = '54px', ...props }) => (
    <Logo { ...props } width={ size } height={ size } />
);

export default LoadingComponent;