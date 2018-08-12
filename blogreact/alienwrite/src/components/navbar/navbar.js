import React from "react";

import './navbar.css';

class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <div className="brandName">
                    <h1>AlienWrite</h1>
                </div>
            </nav>
        )
    }

}

export default Navbar;