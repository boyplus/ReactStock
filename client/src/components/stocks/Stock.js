import React from 'react';
import './style/stockStyle.css';
import { moneyToString } from '../helperFunction';
import { connect } from 'react-redux';
import { buyStock } from '../../actions';
class Stock extends React.Component {
    state = { amount: '' };
    buyClicked = () => {
        console.log('clicked');
    };
    onInputChange = event => {
        this.setState({ amount: event.target.value });
    };
    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.amount) {
            const amount = parseInt(this.state.amount);
            const price = parseInt(this.props.description) * amount;
            console.log(price);
            if (price <= this.props.fund) {
                console.log('you can buy');
                this.props.buyStock(this.props.id, amount);
            } else {
                console.log('cannot ');
            }
        } else {
            console.log('please input some value');
        }
    };
    render() {
        return (
            <div className="card">
                <div className="top">
                    <div className="ui header">{this.props.title}</div>
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
                                placeholder="Quality"
                                onChange={this.onInputChange}
                            ></input>
                        </div>
                    </form>
                    <button className="button" onClick={this.buyClicked}>
                        <i className="icon plus"></i>
                        Buy
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
export default connect(mapStateToprops, { buyStock })(Stock);
