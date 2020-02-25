import React from 'react'

class Difficulty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "easy"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({value: e.target.value})
        console.log("target value:", e.target.value)
        // let value = e.target.value
        console.log("this is in the dropdown component:", this.state.value)
        const { value } = this.state
        const { onChange } = this.props
        
        onChange(value)
    }

    render() {
        return (
            <div>
                {/* <form onChange={this.handleChange}> */}
                    <form>
                    {/* {this.props.onDifficultyChange} */}
                    <label>
                        <select value={this.state.value} onChange={this.handleChange} id="">
                        {/* <select value={this.state.value}  id=""> */}
                            <option disabled>Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </label>
                    <br/>
                </form>
            </div>
        )
    }
}
export default Difficulty