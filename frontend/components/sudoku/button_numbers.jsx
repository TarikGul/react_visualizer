import React, { Component } from 'react'

class ButtonNumbers extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        const numbers = [1,2,3,4,5,6,7,8,9];
        const buttons = ()=>{
            return numbers.map((ele, idx)=>{
                return <div key={idx} className="button-number"> {ele} </div>
            })
        }
        return (
            <div className="button-numbers">
                {buttons()}
            </div>
        )
    }
}

export default ButtonNumbers;