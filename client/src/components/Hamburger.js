import React from 'react';
import './style/hamburgerStyle.css';
class Hamburger extends React.Component {
    render() {
        return (
            <div className="menu" onClick={this.props.onClick}>
                <img
                    height="40px"
                    src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
                    alt="hamburger"
                ></img>
            </div>
        );
    }
}

export default Hamburger;
