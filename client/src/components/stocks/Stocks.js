import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { updateRoute } from '../../actions';
import Stock from './Stock';
class Stocks extends React.Component {
    componentDidMount() {
        if (this.props.profile) {
            this.props.updateRoute(this.props.location.pathname);
        } else {
            history.push('/');
        }
    }
    renderStocks = () => {
        return (
            <div
                className="ui cards"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <Stock title="facebook" description="hello"></Stock>
                <Stock title="facebook" description="hello"></Stock>
                <Stock title="facebook" description="hello"></Stock>
                <Stock title="facebook" description="hello"></Stock>
                <Stock title="facebook" description="hello"></Stock>
            </div>
        );
    };
    render() {
        return (
            <div>
                <div className="ui header">Stocks list</div>
                {this.renderStocks()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.profile };
};
export default connect(mapStateToProps, { updateRoute })(Stocks);
