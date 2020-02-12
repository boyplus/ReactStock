import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { updateRoute } from '../../actions';
class Stocks extends React.Component {
    componentDidMount() {
        if (this.props.profile) {
            this.props.updateRoute(this.props.location.pathname);
        } else {
            history.push('/');
        }
    }
    renderStocks() {}
    render() {
        return (
            <div>
                <div className="ui header">Stocks list</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.profile };
};
export default connect(mapStateToProps, { updateRoute })(Stocks);
