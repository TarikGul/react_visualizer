import Header from "com/header";
import React from "react";
import Sudoku from "com/sudoku/sudoku";


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            curGame: "sudoku"
        }
    }

    render (){
        return (
            <div>
                <Header/>
                <Sudoku/>
            </div>
        )
    }
}

export default App;
