import React from "react";
import Tile from 'com/sudoku/tile'

const Row = (props)=>{
    return(
        <div className="row">
            {props.row.map((tile, idx)=>{
                return <Tile key={idx} tile={tile} />
            })}
        </div>
    )
}

export default Row;