import React from 'react'

class Difficulty extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.preventDefault();

        const { onChange } = this.props

        onChange(e.target.value)
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <select onChange={this.handleChange} className="button-diff">
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