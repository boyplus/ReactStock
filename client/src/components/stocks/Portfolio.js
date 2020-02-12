import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { updateRoute } from '../../actions';
class Portfolio extends React.Component {
    componentDidMount() {
        if (this.props.profile) {
            this.props.updateRoute(this.props.location.pathname);
        } else {
            history.push('/');
        }
    }
    render() {
        return (
            <div>
                <div className="ui header">Portfolio</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.profile };
};
export default connect(mapStateToProps, { updateRoute })(Portfolio);
