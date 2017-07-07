import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './components/Tile';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Tile, {hasFlag: true}),
        document.getElementById('mount')
    );
});