import React, { Component } from "react";

class Footer extends Component {
    getYear = () => {
    return new Date().getFullYear();
    };
    render() {
        return (
            <div>
                <p>&copy; {this.getYear()} HamroCollege</p>
            </div>
        );
    }
}

export default Footer;
