import React from 'react';
import './style/stockStyle.css';
import { moneyToString } from '../helperFunction';
import { connect } from 'react-redux';
import { buyStock, fetchPortfolio, sellStock } from '../../actions';
class Stock extends React.Component {
    state = { amount: '' };
    sellStock = () => {
        if (this.state.amount) {
            const amount = parseInt(this.state.amount);
            if (amount <= this.props.amount) {
                this.props.sellStock(this.props.id, amount);
                this.props.fetchPortfolio();
                this.setState({ amount: '' });
            }
        }
    };
    buyStock = () => {
        if (this.state.amount) {
            const amount = parseInt(this.state.amount);
            const price = parseInt(this.props.description) * amount;
            if (price <= this.props.fund) {
                this.props.buyStock(this.props.id, amount);
                this.props.fetchPortfolio();
                this.setState({ amount: '' });
            }
        }
    };
    checkActions = () => {
        if (this.props.actions === 'buyStock') {
            this.buyStock();
        } else if (this.props.actions === 'sellStock') {
            this.sellStock();
        }
    };

    buyClicked = () => {
        this.buyStock();
    };
    checkInput = str => {
        for (let i = 0; i < str.length; i++)
            if (str[i] < '0' || str[i] > '9' || str[0] === '0') return false;
        return true;
    };
    onInputChange = event => {
        if (this.checkInput(event.target.value)) {
            this.setState({ amount: event.target.value });
        } else {
            this.setState({ amount: '' });
        }
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.checkActions();
    };
    render() {
        return (
            <div className="card">
                <div className="top">
                    <div className="stockHeader">
                        <div className="ui header">{this.props.title}</div>
                        <div>{this.props.amount}</div>
                    </div>

                    <div>
                        <i className="dollar sign icon"></i>
                        {moneyToString(this.props.description)}
                    </div>
                </div>
                <div className="bottom">
                    <form
                        className="ui form stockForm"
                        onSubmit={this.onFormSubmit}
                    >
                        <div className="field">
                            <input
                                type="text"
                                placeholder="Quantity"
                                onChange={this.onInputChange}
                                value={this.state.amount}
                            ></input>
                        </div>
                    </form>
                    <button className="button" onClick={this.checkActions}>
                        <i className={this.props.iconClass}></i>
                        {this.props.actionName}
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToprops = state => {
    return {
        fund: state.auth.profile.fund
    };
};
export default connect(mapStateToprops, {
    buyStock,
    fetchPortfolio,
    sellStock
})(Stock);
