import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import {
    updateRoute,
    fetchPortfolio,
    fetchAuth,
    fetchStocks
} from '../../actions';
class Portfolio extends React.Component {
    componentDidMount() {
        this.props.fetchAuth();
        this.props.fetchStocks();
    }
    componentDidUpdate() {
        if (!this.props.isSignedIn) {
            history.push('/');
        } else {
            this.props.updateRoute(this.props.location.pathname);
            this.props.fetchPortfolio();
        }
    }
    render() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <div className="ui header">Portfolio</div>
                </div>
            );
        } else {
            return <div>Please signin</div>;
        }
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
