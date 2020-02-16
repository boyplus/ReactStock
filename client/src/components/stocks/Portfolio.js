import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { updateRoute, fetchPortfolio, fetchAuth } from '../../actions';
class Portfolio extends React.Component {
    componentDidMount() {
        this.props.fetchAuth();
        this.props.updateRoute(this.props.location.pathname);
        this.props.fetchPortfolio();
    }
    componentDidUpdate() {
        if (!this.props.isSignedIn) {
            history.push('/');
        }
    }
    render() {
        console.log(this.props.port);
        return (
            <div>
                <div className="ui header">Portfolio</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        profile: state.auth.profile,
        port: state.port
    };
};
export default connect(mapStateToProps, {
    updateRoute,
    fetchPortfolio,
    fetchAuth
})(Portfolio);
