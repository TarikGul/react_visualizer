import React from 'react'

const Tile = (props) => {
    console.log(props.tile.gridAttribute)
    const tileClass = `${props.tile.gridAttribute} + tile`;
    return (
        <div className={tileClass}>
            {(props.tile.val === 0) ? "" : props.tile.val}    
        </div>
    )
}

export default Tile;