import React from 'react';
import { connect } from 'react-redux';
import { updateRoute } from '../../actions';
class Home extends React.Component {
    componentDidMount() {
        this.props.updateRoute(this.props.location.pathname);
    }
    componentDidUpdate() {}
    renderUser = () => {
        if (this.props.profile) {
            return (
                <div>
                    <h3>Hello, {this.props.profile.name}</h3>
                </div>
            );
        } else {
            return <div>Please Signed In with facebook first!</div>;
        }
    };
    render() {
        return (
            <div>
                <div className="ui header">Welcome to React Stock</div>
                {this.renderUser()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.profile };
};

export default connect(mapStateToProps, { updateRoute })(Home);
