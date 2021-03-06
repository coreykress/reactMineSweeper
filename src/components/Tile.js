import React from 'react';
import Radium from 'radium';
import Color from 'color';

/**
 * Individual Game Tile
 */

// background-color: #758AA2; background-image: -webkit-gradient(linear, left top, left bottom, from(#758AA2), to(#7089B3));

let styles = {
    base: {
        backgroundColor: '#758AA2',
        border: '1px solid grey',
        borderRadius: 4,
        color: 'black',
        width: '100px',
        height: '100px',
        padding: '1.5em',
        justifyContent: 'center',

    },
    selectable: {
        ":hover": {
            backgroundColor: Color('#758AA2').lighten(0.2)
        }
    },
    showValue: {
        backgroundColor: Color('#758AA2').lighten(0.25)
    }
};

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.hasFlag = this.props.hasFlag;
        this.value = this.props.value;
        this.showValue = this.props.showValue;
    }

    render() {
        let style = [
            styles.base
        ];
        if (true) {
            style.push(styles.showValue);
        }
        return (
        <div className="tile" style={style}>
            <h1>test</h1>
            {this.hasFlag}
            {this.value}
            {this.showValue}
        </div>
        );
    }
}

Tile.defaultProps = {
    hasFlag: false,
    value: '',
    showValue: false,
};

export default Radium(Tile);
