import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { updateRoute, fetchStocks } from '../../actions';
import Stock from './Stock';
import './style/stocksStyle.css';
class Stocks extends React.Component {
    componentDidMount() {
        if (this.props.profile) {
            this.props.updateRoute(this.props.location.pathname);
            this.props.fetchStocks();
        } else {
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
                <div className="stockContainer">
                    {this.renderListStocks(this.props.stocks)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.auth.profile,
        stocks: state.stocks
    };
};
export default connect(mapStateToProps, {
    updateRoute,
    fetchStocks
})(Stocks);
