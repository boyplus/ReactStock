import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import ProfileHeader from './stocks/ProfileHeader';
import Hamburger from './Hamburger';
import './HeaderStyle.css';
class Header extends React.Component {
    getClassName = className => {
        if ('/' + className.toLowerCase() === this.props.route) {
            return 'active';
        } else {
            return '';
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
    renderMoney = () => {
        if (this.props.profile) {
            return (
                <div
                    className="myHeader"
                    style={{ marginRight: '20px', color: 'rgb(0, 44, 86)' }}
                >
                    {this.props.user.money}
                </div>
            );
        }
    };
    render() {
        return (
            <div className="container">
                <div className="smallNav">
                    <Hamburger></Hamburger>
                </div>
                <div className="largeNav">
                    <div className="nav">
                        <div className="leftMenu">
                            <Link
                                to="/"
                                className={`myLink ${this.getClassName('')}`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/stocks"
                                className={`myLink ${this.getClassName(
                                    'stocks'
                                )}`}
                            >
                                Stocks
                            </Link>
                            <Link
                                to="/portfolio"
                                className={`myLink ${this.getClassName(
                                    'portfolio'
                                )}`}
                            >
                                Portfolio
                            </Link>
                        </div>

                        <div className="rightMenu">
                            {this.renderMoney()}
                            <div className="rightButton">
                                {this.renderProfileHeader()}
                                <Link
                                    to="/"
                                    className="myLink"
                                    style={{ padding: '15px' }}
                                >
                                    <GoogleAuth></GoogleAuth>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        route: state.route.route,
        profile: state.auth.profile,
        user: state.profile
    };
};
export default connect(mapStateToProps)(Header);
