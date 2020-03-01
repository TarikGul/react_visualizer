import Tile from './tile';
import Solver from './solver';
import _ from 'lodash'

class Board {
    constructor(level) {
        this.level = level;
        //creating the groundwork for the new sudoku puzzle
        this.grid = this.createGrid(9, 9);
        this.fillNumbers();
        this.solver1 = new Solver(this.grid);
        this.solved = this.solver1.solver()
        this.puzzle = this.generatePuzzle();
        console.log(this.puzzle)
        //----------------------------------//

        //----------------------------------//
        this.puzzleSolved = new Solver(_.cloneDeep(this.puzzle));
        this.puzzleSolved.solver();
        this.orderedPos = this.puzzleSolved.orderedPos;
        this.orderedVal = this.puzzleSolved.orderedVal;
        this.changeAttributes = this.changeAttributes.bind(this)
    }

    generatePuzzle(){
        let levels = {
            "easy": 30,
            "medium": 47,
            "hard": 55
        };
        
        let newBoard = _.cloneDeep(this.solved);

        for(let i = 0; i < levels[this.level]; i++) {
            let row = Math.floor(Math.random()*9);
            let col = Math.floor(Math.random()*9);
            if (newBoard[row][col].val === 0){
                i--;
            } else {
                newBoard[row][col].val = 0
            }
        }
        return newBoard;
    }


    createGrid(row, col){
        let positions = []
        for(let i = 0; i < row; i++) {
            let row = [];
            for(let j = 0; j < col; j++) {
                let curTile = new Tile([i, j], 0);
                row.push(curTile)
            }
            positions.push(row)
        }
        return positions
    }

    fillNumbers(){
        let block = [];
        block.push(this.generateBlockPositions(0, 2));
        block.push(this.generateBlockPositions(3, 5));
        block.push(this.generateBlockPositions(6, 8));

        for(let i = 0; i < block.length; i++) {
            let nums = this.generateRandomNumbers();
            for(let j = 0; j < nums.length; j++) {
                const [ pos_x, pos_y ] = block[i][j];
                this.grid[pos_x][pos_y].val = nums[j];
            }
        }
    }

    generateRandomNumbers() {
        return this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])
    }

    shuffle(originalArray) {
        let array = [].concat(originalArray);
        let curIdx = array.length, temVal, ranIdx;
        while (0 !== curIdx) {
            // Pick a remaining element...
            ranIdx = Math.floor(Math.random() * curIdx);
            curIdx -= 1;

            // And swap it with the current element.
            temVal = array[curIdx];
            array[curIdx] = array[ranIdx];
            array[ranIdx] = temVal;
        }
        return array;
    }

    generateBlockPositions(startIdx, endIdx) {
        let posArr = [];
        for (let i = startIdx; i <= endIdx; i++) {
            for (let j = startIdx; j <= endIdx; j++){
                posArr.push([i, j])
            }
        }
        return posArr;
    }

    // I still need to parse through the array and make sure that there is no duplicates
    // Note: im only being lazy because i need to work on my frontend auth
    togglePositions(pos) {
        let [p_x, p_y] = pos;
        let positions = [pos];
        let blockPositions = this.allBlockPositions(p_x, p_y)

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let stringify = [i, j].toString();
                if (i === p_x || j === p_y && stringify !== pos.toString()) {
                    positions.push([i, j])
                }
            }
        }
        for(let i = 0; i < blockPositions.length; i++) {
            positions.push(blockPositions[i])
        }
        return positions
    }

    allBlockPositions(row, col) {
        let positions = [];
        let p_x = 3 * Math.floor(row / 3);
        let p_y = 3 * Math.floor(col / 3);

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let r_x = 3 * Math.floor(i / 3);
                let r_y = 3 * Math.floor(j / 3);

                if ([p_x, p_y].toString() === [r_x, r_y].toString()
                    && [i, j].toString() !== [row, col].toString()) {
                    positions.push([i, j])
                }
            }
        }
        return positions
    }

    // This function is toggles in sudoku.jsx when a user is trying to get
    // All the rows, and columns to light up that correspond with the picked
    // tile.
    changeAttributes(pos) {
        let positions = this.togglePositions(pos);
        let hash = {};
        positions.forEach((el) => {
            hash[el] = true
        })

        console.log(this.puzzle)
        for(let i = 0; i < this.puzzle.length; i++) {
            for(let j = 0; j < this.puzzle.length; j++) {
                let stringify = [i, j]
                
                if(hash[stringify]) {
                    this.puzzle[i][j].gridAttribute = "dolphin"
                } else {
                    this.puzzle[i][j].gridAttribute = "white"
                }
            }
        }
        console.log("this is the puzzle after attributes have been changed", this.puzzle)
        
        return this.puzzle
    }
    
}

export default Board;
