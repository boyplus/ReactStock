import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import ProfileHeader from './stocks/ProfileHeader';
import './HeaderStyle.css';
class Header extends React.Component {
    getClassName = className => {
        if ('/' + className.toLowerCase() === this.props.route) {
            return 'item active';
        } else {
            return 'item';
        }
    };
    renderProfileHeader = () => {
        if (this.props.profile) {
            return (
                <div className="myHeader">
                    <ProfileHeader
                        imageUrl={this.props.profile.imageUrl}
                    ></ProfileHeader>
                </div>
            );
        }
    };
    render() {
        return (
            <div className="ui stackable container menu">
                <Link to="/" className={this.getClassName('')}>
                    Home
                </Link>
                <Link to="/stocks" className={this.getClassName('stocks')}>
                    Stocks
                </Link>
                <Link
                    to="/portfolio"
                    className={this.getClassName('portfolio')}
                >
                    Portfolio
                </Link>
                <div className="right menu">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {this.renderProfileHeader()}
                        <GoogleAuth></GoogleAuth>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        route: state.route.route,
        profile: state.auth.profile
    };
};
export default connect(mapStateToProps)(Header);
