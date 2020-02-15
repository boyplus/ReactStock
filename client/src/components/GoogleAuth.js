import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, updateProfile, fetchAuth } from '../actions';
import './style/authStyle.css';
class GoogleAuth extends React.Component {
    state = { re: false };
    componentDidMount() {
        this.props.fetchAuth();
    }
    onSignInClick = () => {
        window.location.href = 'http://localhost:3030/api/auth/facebook';
    };
    onSignOutClick = () => {
        console.log('signed out clicked');
    };
    renderAuthButton() {
        console.log(this.props.data);
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
