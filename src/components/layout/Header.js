import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/home">
                        <a className="navbar-brand">Homework Section</a>
                    </Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/home">
                            <a className="nav-link" >Assignment <span className="sr-only">(current)</span></a>
                        </Link>
                    </li> 
                    <li className="nav-item active">
                        <Link to="/submission">
                            <a className="nav-link">Submission <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>                                        
                    </ul>                    
                </div>
            </nav>      
        )
    }
}

export default Header
