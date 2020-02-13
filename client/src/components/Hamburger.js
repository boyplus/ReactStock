import React from 'react';
import './hamburgerStyle.css';
class Hamburger extends React.Component {
    render() {
        return (
            <div className="menu" onClick={this.props.onmyClick}>
                <img
                    height="40px"
                    src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
                ></img>
            </div>
        );
    }
}

export default Hamburger;
