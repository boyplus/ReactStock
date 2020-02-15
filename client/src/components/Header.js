import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import ProfileHeader from './stocks/ProfileHeader';
import Hamburger from './Hamburger';
import Modal from './Modal';
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
                <div className="myHeader money">{this.props.profile.fund}</div>
            );
        }
    };
    renderModal = () => {
        if (this.state.showModal) {
            return (
                <Modal
                    onDisMiss={() =>
                        this.setState({ showModal: !this.state.showModal })
                    }
                    myClass="active"
                ></Modal>
            );
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
                            <Link to="/" className={this.getClassName('')}>
                                Home
                            </Link>
                            <Link
                                to="/stocks"
                                className={this.getClassName('stocks')}
                            >
                                Stocks
                            </Link>
                            <Link
                                to="/portfolio"
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
        route: state.route.route,
        profile: state.auth.profile
    };
};
export default connect(mapStateToProps)(Header);
