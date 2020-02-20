import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import ProfileHeader from './stocks/ProfileHeader';
import Hamburger from './Hamburger';
import Modal from './Modal';
import { moneyToString } from './helperFunction';
import { fetchAuth } from '../actions';
import './style/HeaderStyle.css';
class Header extends React.Component {
    getClassName = className => {
        if ('/' + className.toLowerCase() === this.props.route) {
            return 'myLink active';
        } else {
            return 'myLink';
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
                <div className="myHeader money">
                    <i className="dollar sign icon"></i>
                    {moneyToString(this.props.profile.fund)}
                </div>
            );
        }
    };
    renderModal = () => {
        if (this.state.showModal) {
            return (
                <Modal
                    onDisMiss={() => {
                        setTimeout(() => {
                            this.setState({ showModal: !this.state.showModal });
                        }, 200);
                    }}
                    myClass="activeContent"
                ></Modal>
            );
        } else {
            return null;
        }
    };
    getRoute = route => {
        if (this.props.isSignedIn) {
            return route;
        } else {
            return '/';
        }
    };
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }
    render() {
        return (
            <div className="container">
                <div className="smallNav">
                    <Hamburger
                        onClick={() =>
                            this.setState({ showModal: !this.state.showModal })
                        }
                    ></Hamburger>
                    {this.renderModal()}
                </div>
                <div className="largeNav">
                    <div className="nav">
                        <div className="leftMenu">
                            <Link
                                to={this.getRoute('/')}
                                className={this.getClassName('')}
                            >
                                Home
                            </Link>
                            <Link
                                to={this.getRoute('/stocks')}
                                className={this.getClassName('stocks')}
                            >
                                Stocks
                            </Link>
                            <Link
                                to={this.getRoute('/portfolio')}
                                className={this.getClassName('portfolio')}
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
        isSignedIn: state.auth.isSignedIn,
        route: state.route.route,
        profile: state.auth.profile
    };
};
export default connect(mapStateToProps, { fetchAuth })(Header);
