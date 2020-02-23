import ButtonNumbers from "com/sudoku/button_numbers";
import Board from "js/sudoku/board";
import React from 'react'
import Row from "com/sudoku/row";
import css from 'css/sudoku.css';

class Sudoku extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new Board("hard"),
            clicked: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let orderedPoss = this.state.board.orderedPos;
        let orderedVals = this.state.board.orderedVal;
        let i = 0;
        let curBoard = this.state.board.puzzle;

        const loopStep = () => {
            if (i === orderedPoss.length) {
                return
            }
            let [cur_x, cur_y] = orderedPoss[i];

            curBoard[cur_x][cur_y].val = orderedVals[i];
            setTimeout(()=>{
                this.setState({
                    board: curBoard,
                    clicked: true
                });
                loopStep();
                i++;
            }, 10)
        }
        loopStep();
    }

    render() {
        const grid = (this.state.clicked) ? this.state.board : this.state.board.puzzle;
        return (
            <div className="sudoku">
                <div className="sudoku-header">
                </div>
                <div className="rows-container">
                    {grid.map((row, idx)=>{
                        return <Row key= {idx} row={row} />
                    })}
                </div>
                <br/>
                <ButtonNumbers/>
                <button onClick={this.handleClick}>SOLVE</button>
            </div>
        )
    }
}

export default Sudoku;
