import React from 'react';

/**
 * Individual Game Tile
 */
class Tile extends React.Component {
    constructor() {
        super();
        this.hasFlag = this.props.hasFlag;
        this.displayValue = this.props.displayValue;
        this.isExposed = this.props.isExposed;
    }

    render() {
        return (
        <div>
            {this.hasFlag}
        </div>
        );
    }
}
export default Tile;