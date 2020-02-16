import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, updateProfile, fetchAuth } from '../actions';
import './style/authStyle.css';
class GoogleAuth extends React.Component {
    componentDidMount() {
        console.log('from did');
        this.props.fetchAuth();
    }
    onSignInClick = () => {
        window.location.href = 'http://localhost:3030/api/auth/facebook';
    };
    onSignOutClick = () => {
        console.log('signed out clicked');
        window.location.href = 'http://localhost:3030/api/auth/logout';
    };
    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
                <button
                    className="myButton"
                    onClick={this.onSignOutClick}
                    style={{ color: 'whiteSmoke' }}
                >
                    Signed Out
                </button>
            );
        } else {
            return (
                <button
                    className="myButton"
                    onClick={this.onSignInClick}
                    style={{ color: 'whiteSmoke' }}
                >
                    Signed In with facebook
                </button>
            );
        }
    }
    render() {
        console.log('render');
        console.log(this.props.data);
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        data: state.auth
    };
};

export default connect(mapStateToProps, {
    signIn,
    signOut,
    updateProfile,
    fetchAuth
})(GoogleAuth);
