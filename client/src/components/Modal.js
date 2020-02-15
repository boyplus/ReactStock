import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './style/modalStyle.css';
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: 'activeContent' };
    }
    clickedLink = () => {
        this.setState({ test: 'unactiveContent' });
        this.props.onDisMiss();
    };
    render() {
        return ReactDOM.createPortal(
            <div className="myContainer">
                <div className="modal" onClick={this.clickedLink}>
                    <div
                        className={`content ${this.state.test}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="closeIcon" onClick={() => {}}>
                            <i className="close large icon closeIcon"></i>
                        </div>

                        <div className="ui large header menuHeader">Menu</div>
                        <div id="listMenu">
                            <Link
                                onClick={this.clickedLink}
                                to="/"
                                className="myMenu border"
                            >
                                Home
                            </Link>
                            <Link
                                onClick={this.clickedLink}
                                to="/stocks"
                                className="myMenu border"
                            >
                                Stocks
                            </Link>
                            <Link
                                onClick={this.clickedLink}
                                to="/portfolio"
                                className="myMenu"
                            >
                                Portfilio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}

export default Modal;
