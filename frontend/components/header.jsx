import Navbar from "com/navbar";
import React from 'react'
import Timer from './timer'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div id="header-container">
                <Navbar/>
            </div>
        )
    }
}

export default Header;
