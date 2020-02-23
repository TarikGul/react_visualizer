import React from "react";
import css from "css/nav.css";

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-header">
                        <h3 className="navbar-header-title">Algo Vis</h3>
                    </div>
                    <ul className="navbar-items">
                        <li className="navbar-item"><a>Maze Solve</a></li>
                        <li className="navbar-item"><a>Sudoku</a></li>
                        <li className="navbar-item"><a>Rubik's Cube</a></li>
                        {/* <li className="navbar-item"><button className="run-button">run algorithm</button></li>
                        <li className="navbar-item"><a>Clear Board</a></li>
                        <li className="navbar-item"><a>Speed: Fast</a></li> */}
                        <li className="navbar-item"><a>Main</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;