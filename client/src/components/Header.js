import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
class Header extends React.Component {
    getClassName = className => {
        if ('/' + className.toLowerCase() === this.props.route) {
            return 'item active';
        } else {
            return 'item';
        }
    };
    render() {
        return (
            <div className="ui pointing menu">
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
                    <GoogleAuth></GoogleAuth>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { route: state.route.route };
};
export default connect(mapStateToProps)(Header);
