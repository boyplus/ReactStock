import React from 'react';
import { connect } from 'react-redux';
import { updateRoute } from '../../actions';
class Portfolio extends React.Component {
    componentDidMount() {
        this.props.updateRoute(this.props.location.pathname);
    }
    render() {
        return (
            <div>
                <div className="ui header">Portfolio</div>
            </div>
        );
    }
};

export default connect(null, { updateRoute })(Portfolio);
