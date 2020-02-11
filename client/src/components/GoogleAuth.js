import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, updateProfile } from '../actions';
class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '566163681480-8sgrjkm15loj1mot7a5k0fsbh4knfbgf.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChnage(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChnage);
                });
        });
    }
    onAuthChnage = isSignedIn => {
        if (isSignedIn === true) {
            const entireProfile = this.auth.currentUser.get().getBasicProfile();
            const profile = {
                name: entireProfile.getName(),
                email: entireProfile.getEmail(),
                imageUrl: entireProfile.getImageUrl()
            };
            this.props.signIn(this.auth.currentUser.get().getId());
            this.props.updateProfile(profile);
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <div
                    className="ui active inline loader"
                    style={{ marginRight: '30px' }}
                ></div>
            );
        } else if (this.props.isSignedIn === true) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignOutClick}
                >
                    Signed Out
                </button>
            );
        }
        return (
            <button
                className="ui green google button"
                onClick={this.onSignInClick}
            >
                Signed In with google
            </button>
        );
    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut, updateProfile })(
    GoogleAuth
);
