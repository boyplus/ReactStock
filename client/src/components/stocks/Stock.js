import React from 'react';
import './style/stockStyle.css';
class Stock extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="top">
                    <div className="ui header">{this.props.title}</div>
                    <div className="">{this.props.description}</div>
                </div>
                <div className="bottom">
                    <input type="number" className="numberInput"></input>
                    <button className="button">Buy</button>
                </div>
            </div>
        );
    }
}

export default Stock;
