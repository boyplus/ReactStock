import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
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
    onAuthChnage() {
        
    }
    renderButton() {
        return (
            <div className="ui green button" onClick={this.onSignInClick}>
                Sign in with google
            </div>
        );
    }
    onSignInClick() {
        console.log('signed in click');
    }
    render() {
        return <div>{this.renderButton()}</div>;
    }
}

const mapStateToProp = state => {
    console.log(state);
    return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProp, { signIn, signOut })(GoogleAuth);
