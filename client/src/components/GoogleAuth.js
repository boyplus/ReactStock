import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, updateProfile, fetchData } from '../actions';
import history from '../history';
import './style/authStyle.css';
class GoogleAuth extends React.Component {
    state = { re: false };
    componentDidMount() {
        console.log('from did');
        this.props.fetchData();
        console.log(this.props);
    }
    onAuthChnage = isSignedIn => {};

    onSignInClick = () => {
        window.location.href = 'http://localhost:3030/api/auth/facebook';
        this.props.signIn();
    };
    onSignOutClick = () => {};
    renderAuthButton() {
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
    render() {
        console.log('from render');
        console.log(this.props);
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
    fetchData
})(GoogleAuth);
