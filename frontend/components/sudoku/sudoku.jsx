import Board from "js/sudoku/board";
import React from 'react'
import Row from "com/sudoku/row";
import css from 'css/sudoku.css';

class Sudoku extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new Board("easy"),
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const states = this.state.board.states;

        let i = 0;
        const loopStep = () => {
        // Finish the base case for breaking out of the loop
        setTimeout(() => {  
            this.setState({
                board: states[i], 
                clicked: true
            })
            loopStep();
            i += 1;
            }, 100);
        };
        loopStep();
        
    }

    render() {
        const grid = (this.state.clicked) ? this.state.board : this.state.board.puzzle;
        return (
            <div className="sudoku">
                <button onClick={this.handleClick}>SOLVE</button>
                {grid.map((row, idx)=>{
                    return <Row key= {idx} row={row} />
                })}
            </div>
        )
    }
}

export default Sudoku;

// visualizeAlgorithm() {
//     const colors = ['aquamarine', 'red', 'blue', 'blue'];
//     let i = 0;
//     console.log('this is orderedtraversal.length', this.orderedTravesal.length);
//     console.log(this.orderedTravesal);
//     const loopStep = () => {
//         // console.log("i at the top of loopstep:", i)
//         if (i === this.orderedTravesal.length) {
//             this.visualizeTravelPath();
//             return;
//         }
//         const nextPos = this.orderedTravesal[i].parsePos();
//         // Finish the base case for breaking out of the loop
//         setTimeout(() => {
//             const tile = document.getElementById(nextPos);
//             tile.style.backgroundColor = colors[0]
//             tile.style.backgroundColor = colors[0];
//             colors.rotateRight(1);
//             this.traversed.push(nextPos);
//             loopStep();
//             i += 1;
//         }, this.timeout);
//     };
//     loopStep();
// }
