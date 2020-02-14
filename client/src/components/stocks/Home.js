import React from 'react';
import { connect } from 'react-redux';
import { updateRoute } from '../../actions';
class Home extends React.Component {
    componentDidMount() {
        this.props.updateRoute(this.props.location.pathname);
    }
    removeCookie = () => {
        console.log(document.cookie);
    };
    renderUser = () => {
        if (this.props.profile) {
            return (
                <div>
                    <h3>Hello, {this.props.profile.name}</h3>
                </div>
            );
        } else {
            return <div>Please Signed In with google first!</div>;
        }
    };
    render() {
        return (
            <div>
                <div className="ui header">Welcome to React Stock</div>
                {this.renderUser()}
                <a href="http://localhost:3030/api/auth/facebook">facebook</a>
                <button className="ui button" onClick={this.removeCookie}>
                    log out
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.profile };
};

export default connect(mapStateToProps, { updateRoute })(Home);
