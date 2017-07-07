import React from 'react';
import Radium from 'radium';

/**
 * Individual Game Tile
 */

var styles = {
    base: {
        background: '#D3D3D3',
        border: '1px solid grey',
        borderRadius: 4,
        color: 'black',
        width: '100px',
        height: '100px',
        padding: '1.5em',
        justifyContent: 'center'
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
        return (
        <div className="tile" style={styles.base}>
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
