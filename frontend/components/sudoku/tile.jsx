import React from 'react'

const Tile = (props) => {
    return (
        <div className="tile">
            {(props.tile.val === 0) ? "" : props.tile.val}    
        </div>
    )
}

export default Tile;