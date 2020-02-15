import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { updateRoute, fetchStocks, fetchAuth } from '../../actions';
import Stock from './Stock';
import './style/stocksStyle.css';
class Stocks extends React.Component {
    componentDidMount() {
        this.props.updateRoute(this.props.location.pathname);
        this.props.fetchStocks();
    }
    componentDidUpdate() {
        if (!this.props.isSignedIn) {
            history.push('/');
        }
    }
    renderListStocks = stocks => {
        return <div className="listCards">{this.renderStocks(stocks)}</div>;
    };
    renderStocks = stocks => {
        const allStocks = stocks.map(stock => {
            return (
                <Stock
                    title={stock.name}
                    description={'$ ' + stock.price}
                    key={stock.id}
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
    return {
        isSignedIn: state.auth.isSignedIn,
        profile: state.auth.profile,
        stocks: state.stocks
    };
};
export default connect(mapStateToProps, {
    updateRoute,
    fetchStocks,
    fetchAuth
})(Stocks);
