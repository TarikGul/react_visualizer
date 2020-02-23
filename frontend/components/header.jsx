import React from 'react'
import Navbar from "com/navbar";

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
