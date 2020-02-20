import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import {
    updateRoute,
    fetchStocks,
    fetchAuth,
    fetchPortfolio
} from '../../actions';
import Stock from './Stock';
import './style/stocksStyle.css';
class Stocks extends React.Component {
    componentDidMount() {
        console.log('from did');
        console.log(this.props.isSignedIn);
        this.props.updateRoute(this.props.location.pathname);
        this.props.fetchStocks();
        this.props.fetchPortfolio();
    }
    componentDidUpdate() {
        if (!this.props.isSignedIn) {
            history.push('/');
        }
    }
    renderListStocks = stocks => {
        if (this.props.isSignedIn) {
            return <div className="listCards">{this.renderStocks(stocks)}</div>;
        } else {
            return null;
        }
    };
    renderStocks = stocks => {
        const allStocks = stocks.map(stock => {
            return (
                <Stock
                    title={stock.name}
                    description={stock.price}
                    id={stock.id}
                    key={stock.id}
                    amount=""
                    actions="buyStock"
                    actionName="Buy"
                    iconClass="plus icon"
                />
            );
        });
        return allStocks;
    };
    render() {
        return (
            <div>
                <div className="ui header">Stocks list</div>
                {this.renderListStocks(this.props.stocks)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('from state');
    console.log(state.auth.isSignedIn);
    return {
        isSignedIn: state.auth.isSignedIn,
        profile: state.auth.profile,
        stocks: state.stocks
    };
};
export default connect(mapStateToProps, {
    updateRoute,
    fetchStocks,
    fetchAuth,
    fetchPortfolio
})(Stocks);
