import React from 'react'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        
        this.toggleTile = this.toggleTile.bind(this)
    }

    toggleTile(e) {
        e.preventDefault();

        this.props.toggle(this.props.tilepos)  
    }

    render() {
        const tileClass = `${this.props.tile.gridAttribute} + tile`;
        return (
            <div 
                tilepos={this.props.tilepos} 
                className={tileClass}
                onClick={this.toggleTile} 
                tile={this.props.tile}   
            >
            {(this.props.tile.val === 0) ? "" : this.props.tile.val}    
            </div>
        )
    }
}

export default Tile;