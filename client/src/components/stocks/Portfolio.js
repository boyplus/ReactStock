import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { updateRoute, fetchPortfolio } from '../../actions';
class Portfolio extends React.Component {
    componentDidMount() {
        if (this.props.profile) {
            this.props.fetchAuth();
            this.props.updateRoute(this.props.location.pathname);
            this.props.fetchPortfolio();
            console.log(this.props);
        } else {
            history.push('/');
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="ui header">Portfolio</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.auth.profile,
        port: state.port
    };
};
export default connect(mapStateToProps, { updateRoute, fetchPortfolio })(
    Portfolio
);
