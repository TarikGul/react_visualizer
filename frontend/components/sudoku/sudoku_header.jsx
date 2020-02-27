import React from 'react'
import Difficulty from './difficulty_dropdown'
import Timer from '../timer'
class SudokuHeader extends React.Component {
    constructor(props) {
        super(props)
        
        this.State = {
            difficulty: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ difficulty: value})

        const { onChange } = this.props
        onChange(value)
    }

    render() {
        return (
            <div className="sudoku-header">
                <Difficulty onChange={this.handleChange}/>
                {/* <Timer /> */}
            </div>
        )
    }
}

export default SudokuHeader