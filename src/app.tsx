import React from 'react';
import { render } from 'react-dom';
import './styles.scss';

const He = () => <h1>Hi</h1>;

render(
    <He></He>,
    document.getElementById("main")
);