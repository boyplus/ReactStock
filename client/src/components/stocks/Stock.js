import React from 'react';

class Stock extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="description">{this.props.description}</div>
                </div>
                <div className="ui attached button">
                    <i className="add icon"></i>
                    Buy
                </div>
            </div>
        );
    }
}

export default Stock;
