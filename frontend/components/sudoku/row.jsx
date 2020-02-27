import React from "react";
import Tile from 'com/sudoku/tile'

class Row extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render() {

        return(
            <div className="row">
                {this.props.row.map((tile, idx)=>{
                    return <Tile 
                                key={idx} 
                                tile={tile} 
     
                                tilepos={tile.pos} 
                                toggle={this.props.toggle}
                            />
                })}
            </div>
        )
    }
}

export default Row;