import React from 'react'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tileSelected: false
        }
        
        this.toggleTile = this.toggleTile.bind(this)
    }

    toggleTile(e) {
        e.preventDefault();

        this.setState((prevState) => ({
            tileSelected: !prevState.tileSelected,
        }));
        this.props.toggle(this.props.tilepos)
        // console.log(this.state.tileSelected)   
    }

    render() {
        const tileClass = `${this.props.tile.gridAttribute} + tile`;
        
        return (
            <div 
                tilepos={this.props.tilepos} 
                className={`${this.state.tileSelected ? "dolphin" : tileClass}`} 
                onClick={this.toggleTile} 
                tile={this.props.tile}   
            >
            {(this.props.tile.val === 0) ? "" : this.props.tile.val}    
            </div>
        )
    }
}

export default Tile;