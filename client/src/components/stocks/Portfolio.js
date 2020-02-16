import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import {
    updateRoute,
    fetchPortfolio,
    fetchAuth,
    fetchStocks
} from '../../actions';
import Stock from './Stock';
import './style/stocksStyle.css';
class Portfolio extends React.Component {
    componentDidMount() {
        this.props.fetchAuth();
        this.props.fetchStocks();
        this.props.updateRoute(this.props.location.pathname);
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
                    id={stock.name}
                    key={stock.name}
                    amount={stock.quantity}
                    actions="sellStock"
                    actionName="Sell"
                    iconClass="minus icon"
                />
            );
        });
        return allStocks;
    };
    render() {
        return (
            <div>
                <div className="ui header">Portfolio</div>
                {this.renderListStocks(this.props.port)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        profile: state.auth.profile,
        port: state.port,
        stocks: state.stocks
    };
};
export default connect(mapStateToProps, {
    updateRoute,
    fetchPortfolio,
    fetchAuth,
    fetchStocks
})(Portfolio);
